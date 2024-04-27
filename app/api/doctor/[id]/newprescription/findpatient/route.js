import { connectDb } from "@/helper/db";
import { patient } from "@/models/patient";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDb();
  const { aadhar } = await req.json();
  const reqpatient = await patient.findOne({ aadharnumber: aadhar });
  if (reqpatient === null) {
    return NextResponse.json(
      { message: "Patient not found!" },
      { status: 401 }
    );
  } else {
    const res = {
      patientid: reqpatient._id,
    };
    return NextResponse.json(res, { status: 200 });
  }
}
