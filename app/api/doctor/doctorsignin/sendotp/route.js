import { sendOtp } from "@/Services/sendOtp";
import { generateotp } from "@/Utilites/generateotp";
import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
const { NextResponse } = require("next/server");
import jwt from "jsonwebtoken";
export async function POST(req) {
  const details = await req.json();
  await connectDb();
  const contactIsPresent = await doctor.find({
    contact: details.contact,
  });
  if (contactIsPresent.length === 1) {
    return NextResponse.json("Contact Number already exists.", {status: 403});
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
