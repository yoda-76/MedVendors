import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export async function POST(req) {
  const { contact, password } = await req.json();
  await connectDb();
  const user = await doctor.findOne({ contact: contact });
  if (user === null)
    return NextResponse.json("User not found!", { status: 401 });
  else if (user.password !== password)
    return NextResponse.json("Incorrect  Password!", { status: 401 });
  else {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
    // NextResponse.cookies.set(
    //   "patientLoginToken",
    //   token,
    //   { expiresIn: "3d" },
    //   { httpOnly: true }
    // );
    return NextResponse.json({ _id: user._id }, { status: 200 });
  }
}