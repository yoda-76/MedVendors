const Submitbutton = ({ buttonname, disabled }) => {
  return (
    <div className="flex w-full justify-center mt-10">
      <button
        type="submit"
        className="text-center bg-blue-400 px-2 py-1 rounded text-white"
        disabled={disabled}
      >
        {buttonname}
      </button>
    </div>
  );
};

export default Submitbutton;
