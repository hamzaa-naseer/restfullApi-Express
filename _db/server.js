const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.iiuvitc.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) console.log("db connected");
    else console.log("db error");
  }
);

