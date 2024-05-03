const { default: mongoose, Schema } = require("mongoose");

const qrSchema=new Schema({
    uid:{
        type:String,
        unique: true
    },
    umid:{
        type:String
    },
    medicinedetails:{
        type:[] //[slotno,noofmedicine,slotno2,noofmedicine2]
    }
})
export const qr=
 mongoose.models.qr|| mongoose.model("qr",qrSchema)