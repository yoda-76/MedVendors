import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  connectDb();
  // console.log(params, "body: ",await req.json)
  let newMedicine = await req.json();
    newMedicine=newMedicine.data
//   console.log(typeof newMedicine,newMedicine)
  const machineId = params.id;
//   console.log(machineId);
  const m = await machine.findOne({ umid: machineId });
  if (!m) {
    return new NextResponse("no machine is associated with this id");
  }
//   console.log(m.medicinedetails, newMedicine)
  let fetchedMedicineDetails= m.medicinedetails
  m.medicinedetails.map(async (medicine,index) => {
    if (medicine.slot == newMedicine.slot) {
        console.log("medicine :", medicine)
        fetchedMedicineDetails[index]=newMedicine
        const t= await machine.updateOne(
            { umid: machineId },
            {$set: { "medicinedetails": fetchedMedicineDetails } }
        )
        console.log(t)
      //find that medicine in the medicinedetail array that have same slot and update that element only
      return new NextResponse("updated");
    }
  });
  //push

  await machine.updateOne(
    { umid: machineId },
     {$push: { "medicinedetails": newMedicine } }
  );
//   await machine.findByIdAndUpdate(
//     { umid: machineId },
//     { $set: { "medicinedetails": [newMedicine] } }
//   );
  
//   console.log(m);
  return new NextResponse("pushed");
}
