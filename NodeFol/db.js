const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/loanDb' , err => {
    if(!err)
    console.log("MOngodb connection successfull");
    else
    console.log('err in db connection :' + JSON.stringify(err,undefined,2));
});

module.exports = mongoose;