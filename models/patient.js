const { default: mongoose, Schema } = require("mongoose");

const PatientSchema = new Schema({
    aadharnumber:{
        type:Number,
        required:[true,"Aadhar required"],
        unique: true
    },
    name:{
        type:String,
        required:[true,"Name required"],
    },
    dob:{
        type:Date,
        required:[true,"DOB required"],
    },
    gender:{
        type:String,
        required:[true,"Gender required"],
    },
    contact:{
        type:Number,
        required:[true,"Contact required"],
    },
    password:{
        type:String,
        required:[true,"Password required"],
    },
    qr:{
        type:[],
    },
})
export const patient=
mongoose.models.patient|| mongoose.model("patient",PatientSchema)