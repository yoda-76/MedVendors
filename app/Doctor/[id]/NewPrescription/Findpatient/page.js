"use client";

import Belowformlinks from "@/app/Components/Formfields/Belowformlinks";
import Formheading from "@/app/Components/Formfields/Formheading";
import Aadharinput from "@/app/Components/Formfields/Aadharinput";
import Submitbutton from "@/app/Components/Formfields/Submitbutton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { findPatient } from "@/Services/doctorservices";

const findpatient = ({params}) => {
  const router = useRouter();
  const [details, setdetails] = useState({
    aadhar: "",
    aadharVerifier: false,
    details: false,
  });
  const handlePatientDetails = async (e) => {
    e.preventDefault();
    if (!details.aadharVerifier) {
      toast.dismiss();
      toast.error("Aadhar number must of 12 digits.");
      return;
    }
    setdetails({
      ...details,
      disabled: true,
    });
    toast.dismiss();
    toast.loading("Preparing form...");
    try {
      const result = await findPatient(params.id,details);
      router.push(`/Doctor/${params.id}/NewPrescription/${result.patientid}`)
      toast.dismiss();
    } catch (e) {
      setdetails({
        ...details,
        disabled: false,
      });
      toast.dismiss();
      toast.error(e.response.data.message);
    }
  };
  return (
    <div>
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handlePatientDetails}
        id="form"
        name="form"
        disabled={details.disabled}
    >
      <Formheading heading={"Enter Patient Aadhar Number"} />
      <Aadharinput details={details} setdetails={setdetails}  disabled={details.disabled}/>
      <Submitbutton buttonname="Find Patient" disabled={details.disabled}/>
    </form>
     <Belowformlinks
        text="Back to Doctor's Home Page"
        redirectpage={`/Doctor/${params.id}`}
      />
    </div>
  );
};

export default findpatient;
