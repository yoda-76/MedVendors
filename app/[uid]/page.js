
"use client";

import Medicinecard from "../Components/Showprescirption/Medicinecard";
import Testcard from "../Components/Showprescirption/Testcard";
import Injectioncard from "../Components/Showprescirption/Injectioncard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QR from "../Components/QR";
import { saveQR } from "@/Services/saveqr";

const uid = ({ params }) => { 
  
  return (
    <div className="px-4 py-4">
      <QR data={params.uid} />
    </div>
  );
};

export default uid;
