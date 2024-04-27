import { useState } from "react";
import toast from "react-hot-toast";

const Addinjections = ({ details, setdetails }) =>  {
    const [item, setitem] = useState({
      name: "",
      dailyfrequency: 1,
      dosage: 100,
      timeperiod: 1,
      direction: "",
    });
    const addItem = (e) => {
      e.preventDefault();
      const checkitem = (name) => {
        let flag = false;
        for (let i = 0; i < name.length; i++) {
          if (name[i] != " ") flag = true;
        }
        return flag;
      };
      if (!checkitem(item.name)) {
        toast.dismiss();
        toast.error("Injection must have a name.");
        return;
      }
      const newinjection = [...details.injections, item];
      const newmednames = newinjection.map((item) => item.name);
      const set = new Set(newmednames);
      if (set.size !== newinjection.length) {
        toast.dismiss();
        toast.error(
          "Injection already prescribed please enter another one if required."
        );
        return;
      }
      if (item.dosage === "") {
        toast.dismiss();
        toast.error("Number of capsules per time cannot be empty.");
        return;
      }
      if (item.timeperiod === "") {
        toast.dismiss();
        toast.error("Number of days could not be empty.");
        return;
      }
      if (item.dailyfrequency === "") {
        toast.dismiss();
        toast.error("Daily fequency cannot be empty.");
        return;
      }
      setitem({
        name: "",
        dailyfrequency: 3,
        dosage: 100,
        timeperiod: 1,
        direction: "",
      });
      setdetails({
        ...details,
        injections: newinjection,
      });
    };
  
    const removeItem = (item) => {
      setdetails({
        ...details,
        injections: details.injections.filter((i) => i !== item),
      });
    };
    return (
      <div>
        <div className="font-bold text-center mt-4">Injections</div>
        <div className="text-center flex flex-wrap justify-evenly">
          {details.injections.map((item) => (
            <div
              className="w-[300px] border-solid border-2 border-black rounded my-4"
              key={item.name}
            >
              <div className="w-full my-4 flex">
                <p className="w-[250px] mx-auto overflow-scroll">{item.name}</p>
              </div>
              <div className="w-[250px] my-4 mx-[25px] flex">
                <p className="w-[175.65px] text-left">Daily fequency:</p>
                <p className="overflow-scroll">{item.dailyfrequency}</p>
              </div>
              <div className="w-[250px] my-4 mx-[25px] flex">
                <p className="w-[175.65px] text-left">Dosage (ml):</p>
                <p className="overflow-scroll">{item.dosage}</p>
              </div>
              <div className="w-[250px] my-4 mx-[25px] flex">
                <p className="w-[175.65px] text-left">Time Period (days):</p>
                <p className="overflow-scroll">{item.timeperiod}</p>
              </div>
              <p className="w-[250px] mx-auto whitespace-nowrap overflow-scroll">
                {item.direction}
              </p>
              <button
                className="bg-red-400 px-2 rounded-sm my-4"
                onClick={() => removeItem(item)}
                disabled={details.disabled}
              >
                Remove
              </button>
            </div>
          ))}
          <form
            onSubmit={addItem}
            disabled={details.disabled}
            className="w-[300px] my-4 border-solid border-2 border-black rounded"
          >
            <input
              type="text"
              name="mdname"
              id="mdname"
              readOnly={details.disabled}
              className="border-[0.5px] border-black px-1 border-solid w-[250px] mx-[25px] mt-4 rounded "
              placeholder="Injection Name"
              value={item.name}
              onChange={(e) =>
                setitem({
                  ...item,
                  name: e.target.value,
                })
              }
            />
            <div className="w-full my-4 flex">
              <label
                htmlFor="dailyfrequency"
                className="ml-[25px] w-[175.65px] mr-1 text-left"
              >
                Daily frequency:
              </label>
              <input
                readOnly={details.disabled}
                type="number"
                name="dailyfrequency"
                id="dailyfrequency"
                min="1"
                value={item.dailyfrequency}
                onChange={(e) =>
                  setitem({
                    ...item,
                    dailyfrequency: e.target.value,
                  })
                }
                className="w-[70px] px-1 rounded border-[0.5px] border-black border-solid"
              />
            </div>
            <div className="w-full my-4 flex">
              <label
                htmlFor="dosage"
                className="ml-[25px] w-[175.65px] mr-1 text-left"
              >
                Dosage(ml):
              </label>
              <input
                type="number"
                name="dosage"
                id="dosage"
                readOnly={details.disabled}
                value={item.dosage}
                onChange={(e) =>
                  setitem({
                    ...item,
                    dosage: e.target.value,
                  })
                }
                className="w-[70px] px-1 rounded border-[0.5px] border-black border-solid"
              />
            </div>
            <div className="w-full my-4 flex">
              <label
                htmlFor="timeperiod"
                className="ml-[25px] w-[175.65px] mr-1 text-left"
              >
                Time Period (Days):
              </label>
              <input
                type="number"
                name="timeperiod"
                id="timeperiod"
                min="1"
                readOnly={details.disabled}
                value={item.timeperiod}
                onChange={(e) =>
                  setitem({
                    ...item,
                    timeperiod: e.target.value,
                  })
                }
                className="w-[70px] px-1 rounded border-[0.5px] border-black border-solid"
              />
            </div>
            <div className="w-full my-4 flex justify-center">
              <input
                type="text"
                name="instruction"
                id="instruction"
                readOnly={details.disabled}
                placeholder="Directions (optional)"
                value={item.direction}
                onChange={(e) =>
                  setitem({
                    ...item,
                    direction: e.target.value,
                  })
                }
                className="w-[250px] px-1 rounded border-[0.5px] border-black border-solid"
              >
              </input>
            </div>
            <button disabled={details.disabled} className="bg-green-400 px-2 rounded-sm mb-4" type="submit">
              Add Injection
            </button>
          </form>
        </div>
      </div>
    );
  };

export default Addinjections
