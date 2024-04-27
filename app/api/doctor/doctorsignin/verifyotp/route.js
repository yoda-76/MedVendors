import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
const { NextResponse } = require("next/server");
import jwt from "jsonwebtoken";
export async function POST(req) {
  const { otp, token } = await req.json();
  const data = jwt.verify(token, process.env.JWT_KEY);
  const { name, contact, password } = data.details;
  await connectDb();
  if (data.otp != otp) {
    return NextResponse.json({contact:contact}, { status: 403 });
  } else {
    const newdoctor = new doctor({
      name: name,
      contact: contact,
      password: password,
    });
    await newdoctor.save();
    return NextResponse.json({message:"Signup sucessful"});
  }
}
