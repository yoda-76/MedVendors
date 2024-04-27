"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const Addtest = ({ details, setdetails }) => {
  const [item, setitem] = useState("");
  const addItem = () => {
    const checkitem =(item)=>{
      let flag = false;
      for (let i = 0; i < item.length; i++) {
        if (item[i] != " ") flag = true;
      }
      return flag;
    }
    if (!checkitem(item)){
      toast.dismiss();
      toast.error("Test must have a name.");
      return;
    }
    const newtest = [...details.tests, item];
    const set = new Set(newtest);
    if (set.size !== newtest.length) {
      toast.dismiss();
      toast.error(
        "Test already prescribed please enter another one if required."
      );
      return;
    }
    setitem("");
    setdetails({
      ...details,
      tests: newtest,
    });
  };
  const removeItem = (item) => {
    setdetails({
      ...details,
      tests: details.tests.filter((i) => i !== item),
    });
  };
  return (
    <div className="text-center py-2">
      <div className="font-bold text-center mt-4">Tests</div>
      {details.tests.map((item) => (
        <div className="my-2 px-4 w-full flex justify-between" key={item}>
          <div
            className="text-left w-[150px] sm:w-[400px] overflow-scroll whitespace-nowrap mr-2"
          >
            {item}
          </div>
          <button
            className="bg-red-400 px-2 rounded-sm"
            onClick={() => removeItem(item)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="my-2 px-4 w-full flex justify-between">
        <div className="text-left w-[150px] sm:w-[400px] overflow-scroll whitespace-nowrap mr-2">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Test Name"
            value={item}
            onChange={(e) => setitem(e.target.value)}
            className="border-[0.5px] w-full px-2 border-black border-solid rounded"
            readOnly={details.disabled}
          />
        </div>
        <button
          className="bg-green-400 px-2 rounded-sm"
          onClick={() => addItem(item)}
          disabled={details.disabled}
        >
          Add Test
        </button>
      </div>
    </div>
  );
};

export default Addtest;
