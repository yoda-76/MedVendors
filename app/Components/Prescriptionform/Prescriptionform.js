import Addinjections from "./Addinjections";
import Addmedicine from "./Addmedicine";
import Addtest from "./Addtest";

const Prescriptionform = ({
  details,
  setdetials,
  buttonclick1,
  buttonclick2,
  buttonclick3,
}) => {
  return (
    <div className="px-4 py-4">
      <div className="bg-white py-4 rounded">
        <div className="w-full text-center font-bold my-4 text-2xl">
          Dr.{details.doctorName}
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="mx-4 whitespace-nowrap align-middle flex-col">
            <div className="my-2">Date & Time: {details.date}</div>
            <div className="my-2">
              Doctor's Contact: {details.doctorContact}
            </div>
            <div className="mb-2 mt-4 font-bold">
              Patient Preliminary Examination
            </div>
            <div className="my-2">
              <label className="flex">
                <div className="w-[108.5px]">Height (cm):</div>
                <input
                  type="number"
                  id="height"
                  name="height"
                  className="mx-1 w-[100px] px-1 border-[1px] rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, height: e.target.value })
                  }
                  value={details.height}
                  disabled={details.disabled}
                />
              </label>
            </div>
            <div className="my-2">
              <label className="flex">
                <div className="w-[108.5px]">Weight (Kg):</div>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  className="mx-1 w-[100px] px-1 border-[1px] rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, weight: e.target.value })
                  }
                  value={details.weight}
                  disabled={details.disabled}
                />
              </label>
            </div>
            <div className="my-2">
              <label className="flex">
                <div className="w-[108.5px]">Blood Group:</div>
                <input
                  type="text"
                  id="bg"
                  name="bg"
                  className="mx-1 w-[100px] px-1 border-[1px] rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, bg: e.target.value })
                  }
                  value={details.bg}
                  disabled={details.disabled}
                />
              </label>
            </div>
            <div className="my-2">
              <label className="flex">
                <div className="w-[108.5px]">Blood Pressure:</div>
                <input
                  type="text"
                  id="bp"
                  name="bp"
                  className="mx-1 w-[100px] px-1 border-[1px] rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, bp: e.target.value })
                  }
                  value={details.bp}
                  disabled={details.disabled}
                />
              </label>
            </div>
          </div>
          <div className="mx-4 align-middle flex-col">
            <div className="my-2 font-bold">Patient details</div>
            <div className="my-2">Aadhar: {details.aadhar}</div>
            <div className="my-2">Name: {details.patientName}</div>
            <div className="my-2">Contact: {details.patientContact}</div>
            <div className="my-2">Age: {details.age}</div>
            <div className="my-2">Gender: {details.gender}</div>
          </div>
        </div>
        <div className="text-center font-bold my-4">
          Post Checkup Examination
        </div>
        <div className="text-center my-2">
          <label>
            Title:
            <input
              type="text"
              id="title"
              name="title"
              className="mx-1 w-[200px] px-1 border-[1px] rounded-sm border-black border-solid"
              onChange={(e) =>
                setdetials({ ...details, title: e.target.value })
              }
              value={details.title}
              disabled={details.disabled}
            />
          </label>
        </div>
        <div className="my-2 px-4 w-full">
          <label>
            Descritption:
            <textarea
              id="desc"
              name="desc"
              className="px-1 border-[1px] w-full rounded-sm border-black border-solid"
              onChange={(e) => setdetials({ ...details, desc: e.target.value })}
              value={details.desc}
              disabled={details.disabled}
            />
          </label>
        </div>
        <Addmedicine details={details} setdetails={setdetials}/>
        <Addtest details={details} setdetails={setdetials} />
        <Addinjections details={details} setdetails={setdetials}/>
        <div className="my-2 px-4 w-full">
          <label>
            Lifestyle advice:
            <textarea
              id="advice"
              name="advice"
              className="px-1 border-[1px] w-full rounded-sm border-black border-solid"
              onChange={(e) => setdetials({ ...details, advice: e.target.value })}
              value={details.advice}
              disabled={details.disabled}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly my-6 text-center ">
      <button className="bg-white px-2 py-1 mx-2 my-2 rounded" onClick={buttonclick1}>Save and Send</button>
      <button className="bg-white px-2 py-1 mx-2 my-2 rounded" onClick={buttonclick2}>Reset Form</button>
      <button className="bg-white px-2 py-1 mx-2 my-2 rounded" onClick={buttonclick3}>Reset Patient</button>
      </div>
    </div>
  );
};

export default Prescriptionform;
