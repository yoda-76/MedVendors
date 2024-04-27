"use client";
import Submitbutton from "@/app/Components/Formfields/Submitbutton";
import Formheading from "@/app/Components/Formfields/Formheading";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { getDoctorDetails, uploadDegree } from "@/Services/doctorservices";
import { useRouter } from "next/navigation";

const Uploaddegree = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDoctorDetails(params.id);
      setdetails({
        ...details,
        name: result.name,
        contact: result.contact,
        supportingDocs: result.supportingdocs,
      });
      if (result.supportingdocs === true)
        router.push(`/Doctor/${params.id}`);
    };
    fetchData();
  }, []);
  const [details, setdetails] = useState({
    file: null,
    disabled: false,
  });

  const upload = async(event) => {
    event.preventDefault();
    const file = details.file;
    if (file.size > 500 * 1024) {
      toast.dismiss();
      toast.error("File must be less than 500 Kb.");
      return;
    }
    setdetails({...details, disabled:true});
    toast.dismiss();
    toast.loading("Uploading...");
    try{
      await uploadDegree(params.id, details);
    }
    catch(e){
      console.log(e);
    }
    toast.dismiss();
    setdetails({...details, disabled:false});
    router.push(`/Doctor/${params.id}`);
  };
  
  return (
    <div>
      <h1 className="text-blue-500 my-10 text-bold text-4xl text-center">
        Please upload your doctor's degree to proceed further.
      </h1>
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={upload}
        id="form"
        name="form"
      >
        <Formheading heading="Upload Doctor's Degree Certificate" />
        <p className="my-6 text-blue-600 px-2">
          <label htmlFor="degree" className="block font-semibold text-sm my-6">
            Select a Pdf file less than 500 Kb.
          </label>
          <input
            id="degree"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="degree"
            accept=".pdf"
            onChange={(event) => {
              if (event.target.files.length !== 0) {
                setdetails({
                  ...details,
                  file: event.target.files[0],
                });
              } else {
                setdetails({
                  ...details,
                  file: null,
                });
              }
            }}
            required
          />
        </p>
        <Submitbutton buttonname="Upload" disabled={details.disabled}/>
      </form>
    </div>
  );
};

export default Uploaddegree;
