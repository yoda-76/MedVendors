const { default: mongoose, Schema } = require("mongoose");
const DoctorSchema = new Schema({
    name: {
        type:String,
        required:[true,"Name Required"],
    },
    contact:{
        type:Number,
        required:[true,"Contact required"],
        unique: true
    },
    password:{
        type:String,
        required:[true,"Password required"],
    },
    supportingdocs:{
        type:String,
    }
})
export const doctor=
 mongoose.models.doctor|| mongoose.model("doctor",DoctorSchema)