"use client";
import { vendorSignIn } from "@/Services/vendorservices";
import Belowformlinks from "@/app/Components/Formfields/Belowformlinks";
import Formheading from "@/app/Components/Formfields/Formheading";
import Otpinput from "@/app/Components/Formfields/Otpinput";
import Submitbutton from "@/app/Components/Formfields/Submitbutton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Verifyotp = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    otp:"",
    otpVerifier:false,
    disabled:false,
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
    const token = sessionStorage.getItem("vendorOtp");
    if(!token){
      router.push("/Vendor/Vendorlogin");
      return;
    }
    const otpdetials = { otp: details.otp, token: token };
    toast.dismiss();
    toast.loading("Signin...");
    try {
      await vendorSignIn(otpdetials);
      toast.dismiss();
      sessionStorage.removeItem("vendorOtp");
      setdetails({
        ...details,
        otp: "",
        otpVerifier: false,
        disabled: false,
      });
      router.push("/Vendor/Vendorlogin");
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
      <Toaster position="top-right"></Toaster>
      <form
        onSubmit={handleSubmit}
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        name="form"
        id="form"
        disabled={details.disabled}
      >
        <Formheading heading="OTP Verification form" />
        <Otpinput details={details} setdetails={setdetails}/>
        <Submitbutton buttonname="Signin" disabled={details.disabled} />
      </form>
      {contact ? (
        <Belowformlinks
          redirectpage="/Patient/Patientsignin"
          text={`Not your contact number ${contact} ?`}
        />
      ) : null}
    </>
  );
};

export default Verifyotp;