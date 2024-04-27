"use client";
import { vendorLogIn } from "@/Services/vendorservices";
import Belowformlinks from "@/app/Components/Formfields/Belowformlinks";
import Contactinput from "@/app/Components/Formfields/Contactinput";
import Formheading from "@/app/Components/Formfields/Formheading";
import Passwordinput from "@/app/Components/Formfields/Passwordinput";
import Submitbutton from "@/app/Components/Formfields/Submitbutton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const vendorlogin = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    contact: "",
    contactVerifier: false,
    password: "",
    passwordVerifier: false,
    disabled: false,
  });
  const handleVendorLogin = async (event) => {
    event.preventDefault();
    if (!details.contactVerifier || !details.passwordVerifier) {
      toast.dismiss();
      toast.error("Please verify your details");
      return;
    }
    toast.dismiss();
    toast.loading("Login...");
    setdetails({
      ...details,
      disabled: true,
    });
    try {
      const id = await vendorLogIn(details);
      setdetails({
        ...details,
        contact: "",
        contactVerifier: false,
        password: "",
        passwordVerifier: false,
        disabled: false,
      });
      toast.dismiss();
      router.replace(`/Vendor/${id._id}`);
    } catch (error) {
      setdetails({
        ...details,
        disabled: false,
      });
      toast.dismiss();
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handleVendorLogin}
        disabled={details.disabled}
      >
        <Formheading heading="Vendor Login Form" />
        <Contactinput details={details} setdetails={setdetails} />
        <Passwordinput
          details={details}
          setdetails={setdetails}
          autoComplete="current-password"
        />
        <Submitbutton buttonname="Login" disabled={details.disabled} />
      </form>
      <Belowformlinks
        text="Don't have an account Click Here"
        redirectpage="/Vendor/Vendorsignin"
      />
    </>
  );
};

export default vendorlogin;
