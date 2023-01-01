const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
    srno:String,
    amount:Number,
    itemtype:Number
})
module.exports = mongoose.model("techs",techSchema);