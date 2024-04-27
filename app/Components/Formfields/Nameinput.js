"use client";

const Nameinput = ({ details, setdetails }) => {
  const handleChange = (e) => {
    let name = e.target.value;
    let flag = false;
    for (let i = 0; i < name.length; i++) {
      if (name[i] != " ") flag = true;
    }
    setdetails({
      ...details,
      name: name,
      nameVerifier: flag,
    });
  };
  return (
    <>
      <div className="flex my-10 px-2 w-full">
        <label
          htmlFor="name"
          className="flex-1 text-center text-blue-400 font-semibold"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          readOnly={details.disabled}
          autoComplete="given-name"
          placeholder="Raju Verma"
          className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          onChange={handleChange}
          value={details.name}
        ></input>
      </div>
      {details.nameVerifier ? null : (
        <div className="text-red-400 text-center mt-[-40px]">
          Please enter your name.
        </div>
      )}
    </>
  );
};

export default Nameinput;
