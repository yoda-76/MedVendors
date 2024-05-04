import { NextResponse } from "next/server";
import qrCodeDetector from "@/Services/qrCodeDetector";
import { connectDb } from "@/helper/db";
import { qr } from "@/models/QR";
export async function POST(req){
  await connectDb();
  const { image } = await req.json();
  const qrRes = await qrCodeDetector(image)
  if(qrRes===null){
    return NextResponse.json("No Qr Found");
  }
  else{
    // console.log()
    const qrdata=await qr.findOne({uid:qrRes.data.replace("%3A", ":").replace("%20", " ")})
    console.log(qrdata)
    return NextResponse.json(qrdata.medicinedetails);
  }
}