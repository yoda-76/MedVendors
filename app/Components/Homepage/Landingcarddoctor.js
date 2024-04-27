"use client";
import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";
const Landingcarddoctor = () => {
  return (
    <>
      <div className="bg-white flex flex-wrap p-4 rounded-[10px] m-6 justify-center text-center">
        <FaUserDoctor className="h-32 w-32 text-blue-100" />
        <ul className="text-blue-500 font-bold m-4">
          <li>Paperless priscription.</li>
          <li>Easy to maintain Patient history.</li>
          <li>Easily Understandable priscriptions.</li>
        </ul>
        <div className="flex flex-col justify-center align-middle">
          <Link
            href="/Doctor/Doctorsignin"
            className="bg-blue-300 text-white rounded text-center px-2 py-1 mb-2"
          >
            Doctor Signin
          </Link>
          <Link
            href="/Doctor/Doctorlogin"
            className="bg-blue-300 text-white rounded text-center px-2 py-1"
          >
            Doctor Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landingcarddoctor;
