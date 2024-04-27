const Passwordinput = ({ details, setdetails, autoComplete }) => {
  const handleChange = (e) => {
    let password = e.target.value;
    if (password.length >= 8) {
      setdetails({
        ...details,
        password: password,
        passwordVerifier: true,
      });
    } else {
      setdetails({
        ...details,
        password: password,
        passwordVerifier: false,
      });
    }
  };
  return (
    <>
      <div className="flex my-10 px-2 w-full">
        <label
          htmlFor="password"
          className="flex-1 text-center text-blue-400 font-semibold"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          autoComplete={autoComplete}
          disabled={details.disabled}
          onChange={handleChange}
          value={details.password}
        ></input>
      </div>
      {details.passwordVerifier ? null : (
        <div className="text-red-400 text-center mt-[-40px]">
          Password must be greater than 8 digits.
        </div>
      )}
    </>
  );
};

export default Passwordinput;
