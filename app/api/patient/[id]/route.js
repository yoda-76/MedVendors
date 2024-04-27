import { connectDb } from "@/helper/db";
import { patient } from "@/models/patient";
import { prescription } from "@/models/prescription";
import { NextResponse } from "next/server";
export async function GET( req , {params} ){
  await connectDb();
  const {name, aadharnumber} = await patient.findOne({ _id: params.id });
  const patientPrescriptions = await prescription.find({ aadharnumber:aadharnumber });
  const response = {name : name, prescriptions: patientPrescriptions};
  return NextResponse.json( response , {status:200});
}