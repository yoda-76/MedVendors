import { sendOtp } from "@/Services/sendOtp";
import { generateotp } from "@/Utilites/generateotp";
import { connectDb } from "@/helper/db";
const { patient } = require("@/models/patient");
const { NextResponse } = require("next/server");
import jwt from "jsonwebtoken";
export async function POST(req) {
  const details = await req.json();
  await connectDb();
  const aadharIsPresent = await patient.find({
    aadharnumber: details.aadharnumber,
  });
  if (aadharIsPresent.length === 1) {
    return NextResponse.json("Invalid Aadhar Number", { status: 403 });
  } else {
      const otp = generateotp();
      const token = jwt.sign({ otp: otp, details: details }, process.env.JWT_KEY);
      const result = await sendOtp(`Your Med_Vendors otp is: ${otp}`, "+91" + details.contact);
      if(result==="Ivalid contact number."){
        return  NextResponse.json(result, {status: 406})
      }
      else{
        return NextResponse.json(token, {status:200});
      }
  }
}
