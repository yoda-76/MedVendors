const Patientprescriptions = ({ prescriptions, viewPrescription, buyPrescription }) => {
  return (
    <div className="my-4">
      {prescriptions.map((item) => (
        <div
          className=" mx-4 flex flex-wrap justify-evenly align-middle bg-blue-200 text-blue-700 rounded my-4"
          key={item._id}
        >
          <p className="text-center whitespace-nowrap overflow-scroll mx-2 my-2">
            {item.title}
          </p>
          <p className="text-center my-2 break-words w-full px-2">
            {item.description}
          </p>
          <div className="w-full flex flex-wrap justify-evenly">
            <p className="my-2 mx-2">Doctor Name: {item.doctorname}</p>
            <p className="my-2 mx-2">Doctor Contact: {item.doctorcontact}</p>
            <p className="my-2 mx-2">Date: {item.date}</p>
          </div>
          <div>
            <button
              className="bg-white mx-2 px-2 rounded my-2"
              onClick={() => viewPrescription(item)}
            >
              View Details
            </button>
            <button
              className="bg-white mx-2 px-2 rounded my-2"
              onClick={() => buyPrescription(item)}
            >
              Buy Medicines
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Patientprescriptions;
