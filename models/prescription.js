const { Schema, default: mongoose } = require("mongoose");

const PrescriptionSchema = new Schema({
    aadharnumber:{
        type:Number,
        required:[true,"Aadhar required"],
    },
    patientname:{
        type:String,
        required:[true,"Patientname required"],
    },
    patientcontact:{
        type:Number,
        required:[true,"Patientcontact required"],
    },
    doctorcontact:{
        type:Number,
        required:[true,"Doctorcontact required"],
    },
    doctorname:{
        type:String,
        required:[true,"Doctorname required"],
    },
    date:{
        type:String,
        required:[true,"Date required"],
    },
    age:{
        type:String,
        required:[true,"Age required"],
    },
    gender:{
        type:String,
        required:[true,"Gender required"],
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    bloodpressure: {
        type:String,
    },
    bloodgroup: {
        type:String,
    },
    title:{
        type:String,
        required:[true,"Title required"],
    },
    description:{
        type:String,
    },
    medicines:{
        type:Array,
    },
    tests:{
        type:Array,
    },
    injections:{
        type:Array,
    },
    advice:{
        type:String,
    },
})
export const prescription = 
    mongoose.models.prescription||mongoose.model("prescription",PrescriptionSchema)