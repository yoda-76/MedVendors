"use client";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
const Landingcardpatient = () => {
  return (
    <>
      <div className="bg-white flex flex-wrap p-4 rounded-[10px] m-6 justify-center text-center">
        <IoPersonCircleOutline className="h-32 w-32 text-blue-100" />
        <ul className="text-blue-500 font-bold m-4">
          <li>Easy to handle prescriptions.</li>
          <li>Privacy of patient's medical history.</li>
          <li>Buying medicine will become easier.</li>
        </ul>
        <div className="flex flex-col justify-center align-middle">
          <Link
            href="/Patient/Patientsignin"
            className="bg-blue-300 text-white rounded text-center px-2 py-1 mb-2"
          >
            Patient Signin
          </Link>
          <Link
            href="/Patient/Patientlogin"
            className="bg-blue-300 text-white rounded text-center px-2 py-1"
          >
            Patient Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landingcardpatient;
