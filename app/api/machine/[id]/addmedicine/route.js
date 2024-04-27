import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
    try {
        await connectDb();
        console.log("object", req.body)
        
        // Update document or insert if it doesn't exist
        await machine.updateOne(
            { umid: params.id },
            { $push: { medicine: req.body } },
            { upsert: true }
        );

        // Fetch updated document
        const machinedetails = await machine.findOne({ umid: params.id });

        return NextResponse.json(machinedetails);
    } catch (error) {
        console.error("Error:", error);
        // Handle the error appropriately, e.g., return an error response
        return NextResponse.error("An error occurred while updating the machine details.");
    }
}
