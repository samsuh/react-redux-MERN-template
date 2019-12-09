//NOT BEING USED RIGHT NOW; this is a test file only to try adding files into future once architecture is known

const mongoose = require("mongoose");
const { Schema } = mongoose;

//filesize type should be changed
const fileInBucketSchema = new Schema({
  filename: String,
  fizesize: Number,
  updated: { type: Date, default: Date.now },
});

module.exports = fileInBucketSchema;
