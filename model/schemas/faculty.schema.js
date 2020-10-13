/** packages */
const mongoose = require("mongoose");

/** Schema creation */
const facultySchema = new mongoose.Schema({
    
    dean_name:{
        type: "String",
        required: true
    },

    code:{
        type:"String",
        required:true
    },
    name:{
        type:"String",
        required:true
    }
});

/** schema exportation */
module.exports = facultySchema;