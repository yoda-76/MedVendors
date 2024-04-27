import { connectDb } from "@/helper/db";
import { prescription } from "@/models/prescription";
import { NextResponse } from "next/server";

export async function POST(req){
    await connectDb();
    const {
      aadhar,
      date,
      doctorName,
      doctorContact,
      patientName,
      patientContact,
      age,
      gender,
      height,
      weight,
      bp,
      bg,
      title,
      desc,
      medicines,
      injections,
      tests,
      advice,
    } = await req.json();
    
    const newprescription = new prescription({
        aadharnumber: aadhar,
        patientname: patientName,
        patientcontact: patientContact,
        doctorcontact: doctorContact,
        doctorname: doctorName,
        date: date,
        age: age,
        gender: gender,
        height: height,
        weight:weight,
        bloodpressure: bp,
        bloodgroup: bg,
        title: title,
        description: desc,
        medicines: medicines,
        tests: tests,
        injections: injections,
        advice: advice,
    })
    await newprescription.save();
    return NextResponse.json({"message":"sucess"});
}