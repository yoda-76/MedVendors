import { connectDb } from "@/helper/db";
import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  await connectDb();
  const  { machinedetails }  = await vendor.findOne({ _id: params.id });
  if (machinedetails.length) return NextResponse.json({ machines: machinedetails });
  else return NextResponse.json({ machines: [] });
}
