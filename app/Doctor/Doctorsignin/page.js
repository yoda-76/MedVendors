"use client";
import { sendOTP } from "@/Services/doctorservices";
import Belowformlinks from "@/app/Components/Formfields/Belowformlinks";
import Contactinput from "@/app/Components/Formfields/Contactinput";
import Formheading from "@/app/Components/Formfields/Formheading";
import Nameinput from "@/app/Components/Formfields/Nameinput";
import Passwordinput from "@/app/Components/Formfields/Passwordinput";
import Submitbutton from "@/app/Components/Formfields/Submitbutton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const doctorsignin = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    name: "",
    nameVerifier: false,
    contact: "",
    contactVerifier: false,
    password: "",
    passwordVerifier: false,
    disabled: false,
  });

  const handleDetails = async (event) => {
    event.preventDefault();
    if (
      !details.nameVerifier ||
      !details.contactVerifier ||
      !details.passwordVerifier
    ) {
      toast.dismiss();
      toast.error("Please verify your details");
      return;
    }
    toast.dismiss();
    toast.loading("Sending OTP. Please wait...");
    setdetails({
      ...details,
      disabled: true,
    });
    try {
      const token = await sendOTP(details);
      sessionStorage.setItem("doctorOtp", token);
      toast.dismiss();
      setdetails({
        name: "",
        nameVerifier: false,
        contact: "",
        contactVerifier: false,
        password: "",
        passwordVerifier: false,
        disabled: false,
      });
      router.push("/Doctor/Doctorsignin/Verifyotp");
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data);
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
        onSubmit={handleDetails}
        id="form"
        name="form"
        disabled={details.disabled}
      >
        <Formheading heading="Doctor Signin Form" />
        <Nameinput details={details} setdetails={setdetails} />
        <Contactinput details={details} setdetails={setdetails} />
        <Passwordinput
          details={details}
          setdetails={setdetails}
          autoComplete="new-password"
        />
        <Submitbutton buttonname="Signin" disabled={details.disabled} />
      </form>
      <Belowformlinks
        text="Already have an account Click Here"
        redirectpage="/Doctor/Doctorlogin"
      />
    </>
  );
};

export default doctorsignin;
