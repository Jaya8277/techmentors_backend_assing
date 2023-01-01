require("dotenv").config()
const mongoose = require('mongoose');
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connection = mongoose.connect('mongodb+srv://techs:techs@cluster0.spci3ib.mongodb.net/?retryWrites=true&w=majority',connectionparams);

module.exports=connection;  