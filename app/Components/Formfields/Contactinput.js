"use client";

const Contactinput = ({ details, setdetails }) => {

  const handleChange = (e) => {
    let contact = e.target.value;
    if (contact.length === 10) {
      setdetails({
        ...details,
        contact: contact,
        contactVerifier: true,
      });
    } else {
      setdetails({
        ...details,
        contact: contact,
        contactVerifier: false,
      });
    }
  };
  
  return (
    <>
      <div className="flex my-10 px-2 w-full">
        <label
          htmlFor="contact"
          className="flex-1 text-center text-blue-400 font-semibold"
        >
          Contact
        </label>
        <input
          type="number"
          name="contact"
          id="contact"
          placeholder="9999999999"
          autoComplete="tel-national"
          readOnly={details.disabled}
          className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          onChange={handleChange}
          value={details.contact}
        ></input>
      </div>
      {details.contactVerifier ? null : (
        <div className="text-red-400 text-center mt-[-40px]">
          Contact must contain 10 digits only.
        </div>
      )}
    </>
  );
};

export default Contactinput;
