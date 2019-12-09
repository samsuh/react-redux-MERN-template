const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const bucketEmailTemplate = require("../services/emailTemplates/bucketEmailTemplate");

const Bucket = mongoose.model("buckets");

module.exports = app => {
  app.get("/api/buckets/thanks", (req, res) => {
    res.send("Thanks for responding!");
  });
  //check if user is logged in and has enough credits to create a new bucket (custom middlewares)
  app.post("/api/buckets", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    //creating new instance of a bucket
    //TESTING EMAIL: required properties; will error if inconsistent (fileInBucket not working; prob syntax error)
    const bucket = new Bucket({
      title,
      body,
      subject,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      // fileInBucket: fileInBucket.map(filename => ({ filename })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // send email from bucket here; giving it the entire bucket
    // deciding what to show email recipient; send them filename for now
    const mailer = new Mailer(bucket, bucketEmailTemplate(bucket));

    try {
      await mailer.send();
      await bucket.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
