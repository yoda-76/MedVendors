"use client";
import Link from "next/link";
import { GiVendingMachine } from "react-icons/gi";
const Landingcardvendor = () => {
  return (
    <>
      <div className="bg-white flex flex-wrap p-4 rounded-[10px] m-6 justify-center text-center">
        <GiVendingMachine className="h-32 w-32 text-blue-100" />
        <ul className="text-blue-500 font-bold m-4 ">
          <li>High Security.</li>
          <li>Easy to maintain stock.</li>
          <li>Reduce the chances of any error.</li>
        </ul>
        <div className="flex flex-col justify-center align-middle">
          <Link
            href="/Vendor/Vendorsignin"
            className="bg-blue-300 h-fit text-white rounded text-center px-2 py-1 mb-2"
          >
            Vendor Signin
          </Link>
          <Link
            href="/Vendor/Vendorlogin"
            className="bg-blue-300 h-fit text-white rounded text-center px-2 py-1"
          >
            Vendor Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landingcardvendor;
