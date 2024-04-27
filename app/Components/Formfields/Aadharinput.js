"use client";

const Aadharinput = ({ details, setdetails }) => {

  const handleChange = (e) => {
    let aadhar = e.target.value;
    if (aadhar.length === 12) {
      setdetails({
        ...details,
        aadhar: aadhar,
        aadharVerifier: true,
      });
    } else {
      setdetails({
        ...details,
        aadhar: aadhar,
        aadharVerifier: false,
      });
    }
  };
  
  return (
    <>
      <div className="flex my-10 px-2 w-full">
        <label
          htmlFor="aadhar"
          className="flex-1 text-center text-blue-400 font-semibold"
        >
          Aadhar
        </label>
        <input
          type="number"
          name="aadhar"
          id="aadhar"
          placeholder="999999999999"
          readOnly={details.disabled}
          className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          onChange={handleChange}
          value={details.aadhar}
        ></input>
      </div>
      {details.aadharVerifier ? null : (
        <div className="text-red-400 text-center mt-[-40px]">
          Aadhar must contain 12 digits only.
        </div>
      )}
    </>
  );
};

export default Aadharinput;