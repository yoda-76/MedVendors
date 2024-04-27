import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
import { prescription } from "@/models/prescription";
import { NextResponse } from "next/server";
export async function GET( req , {params} ){
  await connectDb();
  const {name, contact, supportingdocs} = await doctor.findOne({ _id: params.id });
  const doctorPrescriptions = await prescription.find({ doctorcontact:contact });
  if (supportingdocs === undefined){
    const result = {
      "name": name,
      "contact": contact,
      "supportingdocs":  false,
    }
    return NextResponse.json( result, { status: 200 });
  }else {
    const result = {
      "name": name,
      "contact": contact,
      "supportingdocs":  true,
      "prescriptions" : doctorPrescriptions,
    }
    return NextResponse.json(result, { status: 200 });
  }
}