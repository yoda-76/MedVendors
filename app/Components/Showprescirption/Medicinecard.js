const Medicinecard = ({ details }) => {
  return (
    <div className="flex flex-wrap justify-evenly my-4">
      <div className="w-full text-center font-bold">Medicines</div>
      {details.medicines.map((item) => (
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
            <p className="w-[175.65px] text-left">Dosage (mg):</p>
            <p className="overflow-scroll">{item.dosage}</p>
          </div>
          <div className="w-[250px] my-4 mx-[25px] flex">
            <p className="w-[175.65px] text-left">Time Period (days):</p>
            <p className="overflow-scroll">{item.timeperiod}</p>
          </div>
          <p className="w-[250px] my-4 text-center overflow-scroll">{item.direction}</p>
        </div>
      ))}
    </div>
  );
};

export default Medicinecard;
