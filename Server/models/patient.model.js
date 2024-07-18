const mongoose = require ('mongoose');

const PatientSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Patient's name is required"],
        minLength: [1, "Patient's name must be at least 1 character long"],
        maxLength: [40, "Patient's name cannot be more than 40 characters long"]
    },
    age:{
        type:Number,
        required: [true, "Patient's age is required"],
        minLength: [1, "Patient's age must be at least 1 year old"],
        maxLength: [140, "Patient's age cannot be over 140 years old"]
    },
    symptoms:{
        type:String,
        required: [true, "Patient's symptoms are required"],
        minLength: [4, "Patient's symptoms must be described in at least 4 characters"],
    }

    // For created at and updated at
}, {timestamps:true} )

module.exports = mongoose.model('Patient', PatientSchema);