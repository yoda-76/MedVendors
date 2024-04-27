const Otpinput = ({ details, setdetails }) => {
    const handleChange = (e) => {
      let otp = e.target.value;
      if (otp.length === 6) {
        setdetails({
          ...details,
          otp: otp,
          otpVerifier: true,
        });
      } else {
        setdetails({
          ...details,
          otp: otp,
          otpVerifier: false,
        });
      }
    };
    return (
      <>
        <div className="flex my-10 px-2 w-full">
          <label
            htmlFor="otp"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            OTP
          </label>
          <input
            type="otp"
            id="otp"
            name="otp"
            placeholder="**********"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            autoComplete="one-time-code"
            disabled={details.disabled}
            onChange={handleChange}
            value={details.otp}
          ></input>
        </div>
        {details.otpVerifier ? null : (
          <div className="text-red-400 text-center mt-[-40px]">
            Otp must be equal to 6 digits.
          </div>
        )}
      </>
    );
  };
  
  export default Otpinput;
  