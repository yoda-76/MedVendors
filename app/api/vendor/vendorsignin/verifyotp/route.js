import { connectDb } from "@/helper/db";
import { vendor } from "@/models/vendor";
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
    const newvendor = new vendor({
      name: name,
      contact: contact,
      password: password,
    });
    await newvendor.save();
    return NextResponse.json({message:"Signup sucessful"});
  }
}
