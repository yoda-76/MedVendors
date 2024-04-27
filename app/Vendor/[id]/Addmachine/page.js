"use client";
import Formheading from "@/app/Components/Formfields/Formheading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getlocation from "@/Services/getlocation";
import { addMachine } from "@/Services/vendorservices";
import toast from "react-hot-toast";

const addmachine = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getlocation();
        setdetails({
          ...details,
          longitude: result.Longitude,
          latitude: result.Latitude,
        });
      } catch (e) {
        console.log("Unable to fetch loction.");
      }
    };
    fetchData();
  }, []);
  const [details, setdetails] = useState({
    umid: "",
    address: "",
    longitude: "",
    latitude: "",
    disabled: false,
  });
  const handleMachines = async (e) => {
    e.preventDefault();
    if (details.umid === "" && details.address === "") {
      toast.dismiss();
      toast.error("Please fill all fields");
      return;
    }
    toast.dismiss();
    toast.loading("Adding  Machine...");
    setdetails({
      ...details,
      disabled: true,
    });
    try {
      await addMachine(params.id, details);
      toast.dismiss();
      setdetails({
        ...details,
        disabled: false,
      });
      router.push(`/Vendor/${params.id}`);
    } catch (e) {
      toast.dismiss();
      toast.error(e.response.data.message);
      setdetails({
        ...details,
        disabled: false,
      });
    }
  };
  return (
    <div>
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handleMachines}
        id="form"
        name="form"
        disabled={details.disabled}
      >
        <Formheading heading="Add Machine Details" />
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="umid"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            UMID
          </label>
          <input
            readOnly={details.disabled}
            type="text"
            placeholder="Your unique id"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="umid"
            name="umid"
            onChange={(event) => {
              setdetails({
                ...details,
                umid: event.target.value,
              });
            }}
            value={details.umid}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="address"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Machine Address
          </label>
          <input
            readOnly={details.disabled}
            type="address"
            placeholder="Machine Address"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="address"
            name="address"
            autoComplete="address"
            onChange={(event) => {
              setdetails({
                ...details,
                address: event.target.value,
              });
            }}
            value={details.address}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="latitude"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Latitude
          </label>
          <input
            readOnly={details.disabled}
            type="number"
            placeholder="00.000000"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="latitude"
            name="latitude"
            onChange={(event) => {
              setdetails({
                ...details,
                latitude: event.target.value,
              });
            }}
            value={details.latitude}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="longitude"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Longitude
          </label>
          <input
            readOnly={details.disabled}
            type="number"
            placeholder="00.000000"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="longitude"
            name="longitude"
            onChange={(event) => {
              setdetails({
                ...details,
                longitude: event.target.value,
              });
            }}
            value={details.longitude}
          ></input>
        </div>
        <div className="flex my-6 px-2 w-full">
          <p className="text-yellow-300 text-center">
            Please check values of longitude and latitude before adding as
            precise values are required.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="text-center bg-blue-400 px-2 py-1 rounded text-white"
            disabled={details.disabled}
          >
            Add Machine
          </button>
        </div>
      </form>
    </div>
  );
};

export default addmachine;
