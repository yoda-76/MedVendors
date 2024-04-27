import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
export async function POST(req, { params }) {
  await connectDb();
  const { umid, address, longitude, latitude } = await req.json();
  const machinedata = await machine.findOne({ umid: umid });
  // if (machinedata) {
  //   const match=machinedata.medicines.filter((item, index)=>{
  //     if(item.name===req.body.name && item.dosage===req.body.dosage &&item.price===req.body.price && item.cpsuleeachpack===req.body.cpsuleeachpack )return true
  //   })
  //   if(match[0]){

  //   }
  //   }
    // await vendor.updateOne(
    //   { _id: params.id },
    //   { $push: { machinedetails: umid } }
    // );
    await machine.updateOne(
      { umid: umid },
      {
        $set: {
          medicines:{...req.body}
        },
      }
    );
    return NextResponse.json({ message: "Machine added sucessfully" });
  
}
