"use client"
import { getVendorDetails } from "@/Services/vendorservices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline, IoMdLogOut } from "react-icons/io";

const vendorid = ({ params }) => {
  const router = useRouter();
  const [machines, setMachines]= useState({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await getVendorDetails(params.id);
      console.log("resul")
      setMachines(result);
    };
    fetchData();
  }, []);
  const handleLogout = () => {
    //delete token stored in local storage
    router.push("/");
  };
  return (
    <div>
      <div className="flex justify-between px-2  my-2">
        <h1 className="text-center font-bold text-blue-500 text-xl">
          Hello
        </h1>
        <button
          onClick={handleLogout}
          className="font-bold text-xl text-white hover:text-red-400 flex "
        >
          Logout
          <IoMdLogOut className="mt-[0.35rem]" />
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <p className=" text-blue-500 text-md mx-2">My machines</p>
        <Link
          className="flex text-blue-500 text-md mx-2 hover:text-white"
          href={`/Vendor/${params.id}/Addmachine`}
        >
          Add machines
          <IoMdAddCircleOutline className="mt-[0.35rem] mx-1" />
        </Link>
      </div>
      <hr className="border-blue-500" />
      <div className="flex justify-evenly my-2">
      {machines.machines!==undefined && machines.machines.map(m=>
         (<Link href={`/Machines/${m}`} className="bg-white text-blue-400 px-2 py-1 m-4" key={m}>{`${m}`}</Link>)
      )}
      </div>
    </div>
  );
};

export default vendorid;
