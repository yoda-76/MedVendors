const { default: mongoose, Schema } = require("mongoose");

const VendorSchema= new Schema({
    name:{
        type:String,
    },
    contact:{
        type:Number,
        required:true,
        unique: true
    },
    password:{
        type:String,
        requierd:true,
    },
    machinedetails:{
        type:[],
    },
})
export const vendor=
 mongoose.models.vendor|| mongoose.model("vendor",VendorSchema)