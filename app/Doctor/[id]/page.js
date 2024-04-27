"use client";
import { useEffect, useState } from "react";
import { getDoctorDetails } from "@/Services/doctorservices";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdAddCircleOutline, IoMdLogOut } from "react-icons/io";
import Doctorsprecriptions from "@/app/Components/Doctorsprecriptioncards";

const doctor = ({ params }) => {
  const router = useRouter();
  const [details, setdetails] = useState({
    name: "",
    contact: "",
    supportingDocs: false,
  });
  const [patientdetails, setpatientdetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDoctorDetails(params.id);
      setdetails({
        ...details,
        name: result.name,
        contact: result.contact,
        supportingDocs: result.supportingdocs,
      });
      if(result.prescriptions)setpatientdetails(result.prescriptions.reverse());
      if (result.supportingdocs === false)
        router.push(`/Doctor/${params.id}/Uploaddegree`);
    };
    fetchData();
  }, []);
  const handleLogout =()=>{
    //delete token stored in local storage
    router.push("/");
  }
  const viewPrescription =(item)=>{
    const sessionData = {
      "item":item,
      "backTo":"Doctor Page",
      "link":`Doctor/${params.id}`
    }
    sessionStorage.setItem("prescriptionDetails", JSON.stringify(sessionData));
    router.push("/ViewPrescription");
  }

  return (
    <>
    <div className="flex justify-between px-2  my-2">
    <h1 className="text-center font-bold text-blue-500 text-xl">
        Hello Dr. {details.name}
      </h1>
      <button onClick={handleLogout} className="font-bold text-xl text-white hover:text-red-400 flex ">Logout<IoMdLogOut className="mt-[0.35rem]"/></button>
    </div>
      
      <div className="flex justify-between">
        <p className=" text-blue-500 text-md mx-2">Previous Prescriptions</p>
        <Link
          className="flex text-blue-500 text-md mx-2 hover:text-white"
          href={`/Doctor/${params.id}/NewPrescription/Findpatient`}
        >
          <IoMdAddCircleOutline className="mt-[0.35rem] mx-1" />
          Add New Prescription
        </Link>
      </div>
      <hr className="border-blue-500" />
      <div>
        {patientdetails.length ? (
        <Doctorsprecriptions prescriptions={patientdetails} viewPrescription={viewPrescription}/>
        ) : (
          <div className="text-center text-4xl my-4 text-white font-bold ">
          No Prescriptions Avaliable.
        </div>
        )}
      </div>
    </>
  );
};

export default doctor;
