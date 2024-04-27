import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";

import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  await connectDb();
  const   machinedetails  = await machine.findOne({ umid: params.id });
  console.log(machinedetails)
  return NextResponse.json(machinedetails );
  
}

