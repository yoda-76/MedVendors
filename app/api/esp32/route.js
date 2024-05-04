import { NextResponse } from "next/server";
import qrCodeDetector from "@/Services/qrCodeDetector";
import { connectDb } from "@/helper/db";
export async function POST(req){
  await connectDb();
  const { image } = await req.json();
  const qrRes = await qrCodeDetector(image)
  if(qrRes===null){
    return NextResponse.json("No Qr Found");
  }
  else{
    console.log(qrRes.data)
    return NextResponse.json(qrRes.data);
  }
}