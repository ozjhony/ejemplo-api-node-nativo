/** packages */
const mongoose = require("mongoose");

/** Schema creation */
const programSchema = new mongoose.Schema({
    faculty_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_faculty",
        required: true
    },
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    },
    
    director_name:{
        type: "String",
        required: true
    }
});

/** schema exportation */
module.exports = programSchema;