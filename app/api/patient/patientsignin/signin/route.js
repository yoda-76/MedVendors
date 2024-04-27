import { connectDb } from "@/helper/db";
const { patient } = require("@/models/patient");
const { NextResponse } = require("next/server");
import jwt from "jsonwebtoken";
export async function POST(req) {
  const { otp, token } = await req.json();
  const data = jwt.verify(token, process.env.JWT_KEY);
  const { aadharnumber, name, contact, gender, dob, password } = data.details;
  await connectDb();
  if (data.otp != otp) {
    return NextResponse.json({contact:contact}, { status: 403 });
  } else {
    const newpatient = new patient({
      aadharnumber: aadharnumber,
      name: name,
      contact: contact,
      gender: gender,
      dob: dob,
      password: password,
    });
    await newpatient.save();
    return NextResponse.json({message:"Signup sucessful"});
  }
}
