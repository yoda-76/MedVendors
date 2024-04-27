"use client";
import Belowformlinks from "@/app/Components/Formfields/Belowformlinks";
import Formheading from "@/app/Components/Formfields/Formheading";
import Otpinput from "@/app/Components/Formfields/Otpinput";
import Submitbutton from "@/app/Components/Formfields/Submitbutton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { doctorSignIn } from "@/Services/doctorservices";

const Verifyotp = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    otp: "",
    otpVerifier: false,
    disabled: false,
  });
  const [contact, setcontact] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!details.otpVerifier) {
      toast.dismiss();
      toast.error("Otp must be 6 digits only.");
      return;
    }
    setdetails({
      ...details,
      disabled: true,
    });
    const token = sessionStorage.getItem("doctorOtp");
    if(!token){
      router.push("/Doctor/Doctorlogin");
      return;
    }
    const otpdetials = { otp: details.otp, token: token };
    toast.dismiss();
    toast.loading("Signin...");
    try {
      await doctorSignIn(otpdetials);
      toast.dismiss();
      sessionStorage.removeItem("doctorOtp");
      setdetails({
        ...details,
        otp: "",
        otpVerifier: false,
        disabled: false,
      });
      router.push("/Doctor/Doctorlogin");
    } catch (error) {
      setcontact(error.response.data.contact);
      toast.dismiss();
      toast.error("Otp doesn't match.");
      setdetails({
        ...details,
        disabled: false,
      });
    }
  };

  return (
    <>
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handleSubmit}
        id="form"
        name="form"
        disabled={details.disabled}
      >
        <Formheading heading="OTP Verification Form" />
        <Otpinput
          details={details}
          setdetails={setdetails} 
        />
        <Submitbutton buttonname="Signin" disabled={details.disabled}/>
      </form>
      {contact ? (
        <Belowformlinks
          redirectpage="/Doctor/Doctorsignin"
          text={`Not your contact number ${contact} ?`}
        />
      ) : null}
    </>
  );
};

export default Verifyotp;
