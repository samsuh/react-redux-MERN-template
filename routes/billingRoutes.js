const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
// const requireLogin = require("../middlewares/requireLogin");
//req.body.id here is from body-parser middleware that parses the incoming req

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    console.log(
      "Confirmed Working: billingRoutes after api/stripe post request. req.body from body-parser: ",
      req.body
    );
    //   console.log("billingRoutes user output: ", user);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Add Archon Credits",
      source: req.body.id,
    });
    console.log("Confirmed Working: billingRoutes charge: ", charge);
    console.log("Confirmed Working: req.user after charge created: ", req.user);

    req.user.credits += 5;
    //req.user.save() here updates the new user's info with 5 additional credits to the db
    const user = await req.user.save();
    //res.send here sends the 'user' object that we just got back from the db, which is the most up-to-date user
    res.send(user);
  });
};
