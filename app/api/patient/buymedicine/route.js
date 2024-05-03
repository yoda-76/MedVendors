import { connectDb } from "@/helper/db";
import { qr } from "@/models/QR";
import { machine } from "@/models/machine";
import { prescription } from "@/models/prescription";
import { NextResponse } from "next/server";
export async function POST(req) {
  await connectDb()
  const item = await req.json();
  const uid= item.aadharnumber+item.date.replace(/\//g, "-");
  const umid="Med_VedA"
  const medicine=item.medicines.map(m=>m.name)
//   const qty=item.medicines.map(m=>m.)
  const machines=await machine.findOne({umid})
  let medicinedetails=[]
  machines.medicinedetails.map(med=>{
    if(medicine.includes(med.name)){
        medicinedetails.push(med.slot)
        medicinedetails.push(1)
        
    }
})
  console.log("uid: ",uid,"\numid: ",umid,"\nmedicinedetails: ",medicinedetails);
  await qr.create({uid,umid,medicinedetails})
  await prescription.updateOne({aadharnumber:item.aadharnumber, date:item.date},{ $set:{status:"bought"}})
//   console.log(item)


  return  NextResponse.json({uid})
}
