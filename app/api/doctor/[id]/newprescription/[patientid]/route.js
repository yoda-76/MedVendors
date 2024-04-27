import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
import { patient } from "@/models/patient";
import { prescription } from "@/models/prescription";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  await connectDb();
  const doctorData = await doctor.findOne({ _id: params.id });
  const patientData = await patient.findOne({ _id: params.patientid});
  const patientHistory = await prescription.find({ aadharnumber: patientData.aadharnumber})
  const response = {
    doctor: doctorData,
    patient: patientData,
    prescriptions: patientHistory
  }
  return NextResponse.json(response);
}
