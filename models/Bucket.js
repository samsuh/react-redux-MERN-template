const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

// note mongo 4mb limit per document
// https://mongoosejs.com/docs/schematypes.html#arrays
const bucketSchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: { type: Date, default: Date.now() },
  lastUpdated: { type: Date, default: Date.now() },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

mongoose.model("buckets", bucketSchema);
