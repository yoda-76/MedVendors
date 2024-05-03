import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
export async function POST(req, { params }) {
  await connectDb();
  const { umid, address, longitude, latitude } = await req.json();
  const machinedata = await machine.findOne({ umid: umid });
  if (machinedata) {
    if (machinedata.ownerid) {
      return NextResponse.json(
        { message: "Machine owner already exists" },
        { status: 403 }
      );
    }
    await vendor.updateOne(
      { _id: params.id },
      { $push: { machinedetails: umid } }
    );
    await machine.updateOne(
      { umid: umid },
      {
        $set: {
          address: {
            address: address,
            longitude: longitude,
            latitude: latitude,
          },
          ownerid: params.id,
        },
      }
    );
    return NextResponse.json({ message: "Machine added sucessfully" });
  } else {
    return NextResponse.json(
      { message: "No Machine Data Found" },
      { status: 403 }
    );
  }
}
