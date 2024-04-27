"use client";
import { getPrescriptionDetails, savePrescription } from "@/Services/doctorservices";
import currentdateandtime from "@/Utilites/currdateandtime";
import findage from "@/Utilites/findage";
import Doctorsprecriptions from "@/app/Components/Doctorsprecriptioncards";
import Prescriptionform from "@/app/Components/Prescriptionform/Prescriptionform";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const prescriptionform = ({ params }) => {
  const router = useRouter();
  const [details, setdetails] = useState({
    aadhar: "",
    date: "",
    doctorName: "",
    doctorContact: "",
    patientName: "",
    patientContact: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bp: "",
    bg: "",
    title: "",
    desc: "",
    medicines: [],
    injections: [],
    tests: [],
    advice: "",
    previousprescriptions:[],
    disabled: false,
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPrescriptionDetails(params.id, params.patientid);
      setdetails({
        ...details,
        aadhar: result.patient.aadharnumber,
        date: currentdateandtime(),
        doctorName: result.doctor.name,
        doctorContact: result.doctor.contact,
        patientName: result.patient.name,
        patientContact: result.patient.contact,
        age: findage(result.patient.dob),
        gender: result.patient.gender,
        previousprescriptions:  result.prescriptions.reverse(),
      });
    };
    fetchData();
  }, []);
  const addPrescription = async () => {
    if (details.title === "") {
      toast.dismiss();
      toast.error("Please enter Prescription Title");
      document.getElementById("title").focus();
      return;
    }
    setdetails({
      ...details,
      disabled: true,
    });
    toast.dismiss();
    toast.loading("Saving and Sending Prescription.");
    await savePrescription(params.id, params.patientid, details);
    setdetails({
      aadhar: "",
      date: "",
      doctorName: "",
      doctorContact: "",
      patientName: "",
      patientContact: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      bp: "",
      bg: "",
      title: "",
      desc: "",
      medicines: [],
      injections: [],
      tests: [],
      advice: "",
      previousprescriptions:[],
      disabled: false,
    });
    router.push(`/Doctor/${params.id}`);
    toast.dismiss();
    toast.success("Paitent Saved Sucessfully");
  };
  const clearForm = async () => {
    setdetails({
      ...details,
      height: "",
      weight: "",
      bp: "",
      bg: "",
      title: "",
      desc: "",
      medicines: [],
      injections: [],
      tests: [],
      advice: "",
    });
    toast.dismiss();
    toast.success("Form  Cleared Successfully!");
  };
  const resetPatient = async () => {
    setdetails({
      aadhar: "",
      date: "",
      doctorName: "",
      doctorContact: "",
      patientName: "",
      patientContact: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      bp: "",
      bg: "",
      title: "",
      desc: "",
      medicines: [],
      injections: [],
      tests: [],
      advice: "",
      previousprescriptions:[],
      disabled: false,
    });
    toast.dismiss();
    router.push(`/Doctor/${params.id}/NewPrescription/Findpatient`)
  };
  const viewPrescription =(item)=>{
    const sessionData = {
      "item":item,
      "backTo":"Prescription Form",
      "link":`Doctor/${params.id}/NewPrescription/${params.patientid}`
    }
    sessionStorage.setItem("prescriptionDetails", JSON.stringify(sessionData));
    router.push("/ViewPrescription");
  }

  return (
    <div>
      <Prescriptionform
        details={details}
        setdetials={setdetails}
        buttonclick1={addPrescription}
        buttonclick2={clearForm}
        buttonclick3={resetPatient}
      />
      <h1 className="text-center text-bold text-xl text-white"> Patient Hitory</h1>
      <hr className="border-2 border-solid border-white"/>
      {details.previousprescriptions.length?<Doctorsprecriptions prescriptions={details.previousprescriptions} viewPrescription={viewPrescription}/>:(<div className="text-center my-4 text-white">No Prescriptions Avaliable</div>)}
      
    </div>
  );
};

export default prescriptionform;
