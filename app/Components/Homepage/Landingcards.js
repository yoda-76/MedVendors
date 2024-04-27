"use client";
import Landingcarddoctor from "./Landingcarddoctor";
import Landingcardpatient from "./Landingcardpatient";
import Landingcardvendor from "./Landingcardvendor";
const Landingcards = () => {
  return (
    <div className="flex flex-wrap justify-center m-6">
      <Landingcarddoctor />
      <Landingcardpatient />
      <Landingcardvendor />
    </div>
  );
};

export default Landingcards;
