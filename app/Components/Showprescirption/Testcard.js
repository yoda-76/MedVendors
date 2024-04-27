const Testcard = ({details}) => {
  return (
    <div className="text-center flex flex-wrap justify-evenly">
     <div className="w-full text-center font-bold">Tests</div>
        {details.tests.map((item) => (
        <div className="my-2 px-4 w-full flex justify-between" key={item}>
          <div
            className="text-left overflow-scroll whitespace-nowrap"
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testcard
