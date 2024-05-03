"use client";
import { addMedicine, getMachineDetails } from "@/Services/machineservices";
import today from "@/Utilites/todayhtml";

import React, { useEffect, useState } from "react";

const machineid = ({ params }) => {
  const [newmedicinedetails, setnewmedicinedetails] = useState({
    slot: "",
    name: "",
    dosage: "",
    capsuleeachpack: "",
    expiry: "",
    price: "",
    sold:0,
    soldandnotcollected:0,
    notsold:""
  });
  const [medicinedetails, setmedicinedetails] = useState([]);
  const [slots, setslots] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getMachineDetails(params.id);
      setslots(result.noofslots);
      setmedicinedetails(result.medicinedetails);
      console.log(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(medicinedetails);
    // console.log(newmedicinedetails)
  }, [medicinedetails]);

  const addMedicineHandler = async (e) => {
    e.preventDefault();

    addMedicine({ id: params.id, medicine: newmedicinedetails });

    //if the slot is pre occupied change it only
    // setmedicinedetails(p=> {
    //   return [...p, newmedicinedetails]
    // }); //push in db directly
  };
  return (
    <div>
      <div className="flex justify-center my-4">
        <form
          onSubmit={addMedicineHandler}
          className="flex-col w-[350px] justify-center align-middle bg-blue-400 rounded py-4"
        >
          <input
            type="number"
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="noofslots"
            id="noofslots"
            placeholder="Slot Number"
            max={slots}
            min={1}
            onChange={(e) =>
              setnewmedicinedetails({
                ...newmedicinedetails,
                slot: e.target.value,
              })
            }
            value={newmedicinedetails.slot}
            required
          />
          <input
            type="text"
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="medicinename"
            id="medicinename"
            placeholder="Medicine Name"
            onChange={(e) =>
              setnewmedicinedetails({
                ...newmedicinedetails,
                name: e.target.value,
              })
            }
            value={newmedicinedetails.name}
          />
          <input
            type="number"
            min={0}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="dosage"
            id="dosage"
            placeholder="Dosage"
            onChange={(e) =>
              setnewmedicinedetails({
                ...newmedicinedetails,
                dosage: e.target.value,
              })
            }
            value={newmedicinedetails.dosage}
          />
          <input
            type="number"
            min={1}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="capsuleeachpack"
            id="capsuleeachpack"
            placeholder="Capsules per pack"
            onChange={(e) =>
              setnewmedicinedetails({
                ...newmedicinedetails,
                capsuleeachpack: e.target.value,
              })
            }
            value={newmedicinedetails.capsuleeachpack}
          />
          <input
            type="date"
            min={today()}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="expiry"
            id="expiry"
            placeholder="Expiry"
            onChange={(e) =>
              setnewmedicinedetails({
                ...newmedicinedetails,
                expiry: e.target.value,
              })
            }
            value={newmedicinedetails.expiry}
          />
          <input
            type="number"
            min={1}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="price"
            id="price"
            placeholder="Price"
            onChange={(e) =>
              setnewmedicinedetails({
                ...newmedicinedetails,
                price: e.target.value,
              })
            }
            value={newmedicinedetails.price}
          />

          <input
            type="number"
            min={1}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="notsold"
            id="notsold"
            placeholder="no of medicines"
            onChange={(e) =>
              setnewmedicinedetails({
                ...newmedicinedetails,
                notsold: e.target.value,
              })
            }
            value={newmedicinedetails.notsold}
          />

          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="text-center bg-white px-2 py-1 rounded text-blue-400"
            >
              Add Medicines
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-blue-500 text-md text-center">Medicine Detials</h1>
      <hr className="border-blue-500" />
      {medicinedetails.map((medicine) => (
        <div key={medicine.slot}>
          <h1>Slot {medicine.slot}</h1>
        </div>
      ))}
    </div>
  );
};

export default machineid;
