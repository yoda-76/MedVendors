"use client"
import { addMedicine, getMachineDetails } from '@/Services/machineservices';
import React, { useEffect, useState } from 'react'

const machineid = ({params}) => {
    const machineId = params.id;
    // console.log("object", params.id)
    const [machine, setMachine]= useState({})
    const  [medicine, setMedicine]=useState([])
    const [newMedicine, setNewMedicine]= useState({
        name:"",
        price:0,
        dosage:"",
        cpsuleeachpack:0,
        // slot:"",
        expiry:[]
    })
    
  useEffect(() => {
    const fetchData = async () => {
      const result = await getMachineDetails(params.id);
    //   console.log("resul")
      setMachine(result);
    };
    fetchData();
  }, []);

  const addMedicineHandler = async()=>{
    // new action
    // console.log(newMedicine)
    // "use server"
    const updatedMedicine = await addMedicine({id:params.id, medicine:newMedicine})
     setMedicine(updatedMedicine)

  }
  return (
    <div>
      {JSON.stringify(machine)}
      {/* <input type='number' name='slot' placeholder='slot number'  onChange={e=>{setNewMedicine(p=>{
        return{...p,slot:e.target.value}
    })}} value={newMedicine.slot}></input> */}
      <input type="text" name="name" placeholder='name' onChange={e=>{setNewMedicine(p=>{
        return{...p,name:e.target.value}
      })}} value={newMedicine.name}></input>  
      <input type="number" name="dosage" placeholder='dosage'onChange={e=>{setNewMedicine(p=>{
        return{...p,dosage:e.target.value}
      })}} value={newMedicine.dosage}></input>  
      <input type="number" name="price" placeholder='price'onChange={e=>{setNewMedicine(p=>{
        return{...p,price:e.target.value}
      })}} value={newMedicine.price}></input>  
      <input type="date" name="expiry" placeholder='expiry'onChange={e=>{setNewMedicine(p=>{
        return{...p,expiry:e.target.value}
      })}} value={newMedicine.expiry}></input>  
      <input type="number" name="cpsuleeachpack" placeholder='Number of tabs ' onChange={e=>{setNewMedicine(p=>{
        return{...p,cpsuleeachpack:e.target.value}
      })}} value={newMedicine.cpsuleeachpack}></input>  


      <button onClick={addMedicineHandler} className="bg-white text-blue-400 px-2 py-1">Add medicine</button>

      {JSON.stringify(medicine)}
    </div>
  )
}

export default machineid
