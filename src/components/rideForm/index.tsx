"use client";
import mailService from "@/api/mailService";
import { useState } from "react";

const RideForm = ({ onResult }) => {
  const [isChecked, setIsChecked] = useState("false");


  const [formData, setFormData] = useState({
    name:"",
    phone: "",
    email:"",
    service:"",
    passengers:"",
    luggages:"",
    pickUpAddress: "",
    dropOffAddress: "",
    pickUpDate: "",
    pickUpTime:"",
    addAReturn:"",
    flightNumber:"",
    pickUpDateReturn:"",
    pickUpTimeReturn:"",
    note:"",
    type: "Request a ride",
  });

  const handleCheckboxChange = () => {
    if(isChecked == "false"){
      setIsChecked("true");
      setFormData(prevFormData => ({
        ...prevFormData,
        addAReturn: "true",
      }));
    }
    else{
      setIsChecked("false");
      setFormData(prevFormData => ({
        ...prevFormData,
        addAReturn: "false",
      }));
    }


  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handler = async (event) => {
    event.preventDefault();

  
    const response = await mailService(formData);
    if (response === "true") {
      onResult("true");
      setFormData({
        name:"",
        phone: "",
        email:"",
        service:"",
        pickUpAddress: "",
        dropOffAddress: "",
        addAReturn:"",
        pickUpDate: "",
        pickUpTime:"",
        passengers:"",
        luggages:"",
        flightNumber:"",
        pickUpDateReturn:"",
        pickUpTimeReturn:"",
        note:"",
        type: "Request a ride",
      });
    } else if (response === "false") {
      onResult("false");
    } else {
      onResult("null");
    }
  };

  return (
    <form onSubmit={handler}>
      <fieldset>
        <legend className="mb-10 text-center  text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Request a ride
        </legend>
        <div className="-mx-4 flex flex-wrap">

    

          <div className="w-1/2 px-4 ">
            <div className="mb-8">
              <input
                id="name"
                autoFocus
                required
                autoComplete="name"
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="w-1/2 px-4 ">
            <div className="mb-8">
              <input
                id="phone"
                autoFocus
                required
                autoComplete="phone"
                type="text"
                name="phone"
                placeholder="Phone number"
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="w-1/2 px-4 ">
            <div className="mb-8">
              <input
                id="email"
                autoFocus
                required
                autoComplete="email"
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary"
              />
            </div>
          </div>


          <div className="w-1/2 px-4 ">
            <div className="mb-8">
            <select  onChange={handleChange}     value={formData.service} id="service" name="service" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary">
            <option value="" disabled selected>Select a service</option>
            <option value="Ride To the Airport">Ride To the Airport</option>
        <option value="Ride From the Airport">Ride From the Airport</option>
        <option value="Ride To Boston">Ride To Boston</option>
        <option value="Ride From Boston">Ride From Boston</option>
        <option value="Door To Door">Door To Door</option>
    </select>
            </div>
          </div>


          <div className="w-1/2 px-4">
            <div className="mb-8">
              <input
                id="passengers"
                autoFocus
                required
                autoComplete="passengers"
                type="number"
                name="passengers"
                placeholder="Passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="mb-8">
              <input
                id="luggages"
                autoFocus
                autoComplete="luggages"
                type="number"
                name="luggages"
                placeholder="Luggages"
                value={formData.luggages}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>
          <div className="w-1/2 px-4 ">
            <div className="mb-8">
              <input
                id="pickUpAddress"
                autoFocus
                required
                autoComplete="pickUpAddress"
                type="text"
                name="pickUpAddress"
                placeholder="Pickup address"
                value={formData.pickUpAddress}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark  outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="mb-8">
              <input
                id="dropOffAddress"
                autoFocus
                required
                autoComplete="dropOffAddress"
                type="text"
                name="dropOffAddress"
                placeholder="Drop-off address"
                value={formData.dropOffAddress}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>

          <div className="w-1/2 px-4">
            <div className="mb-8">
              <input
                id="pickUpDate"
                autoFocus
                required
                autoComplete="pickUpDate"
                type="date"
                name="pickUpDate"
                placeholder="Pickup date"
                value={formData.pickUpDate}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>

          <div className="w-1/2 px-4">
            <div className="mb-8">
              <input
                id="pickUpTime"
                autoFocus
                required
                autoComplete="pickUpTime"
                type="time"
                name="pickUpTime"
                placeholder="Pickup time"
                value={formData.pickUpTime}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>

          
          <div className="w-full px-4 flex items-center justify-center">
            <div className="mb-8 w-1/2 flex ">
              <input
                id="addAReturn"
                autoFocus
                autoComplete="addAReturn"
                type="checkbox"
                name="addAReturn"
                placeholder="addAReturn"
                value={formData.addAReturn}
                onChange={handleChange}
                className="border-stroke  rounded-sm border w-1/2 bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
               <h1 className="text-white w-full">Add a Return</h1>
            </div>
          </div>


          <div className="w-full px-4">
            <div className="mb-8">
              <input
                id="flightNumber"
                autoFocus
                autoComplete="flightNumber"
                type="number"
                name="flightNumber"
                placeholder="Flight number"
                value={formData.flightNumber}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>

          <div className="w-1/2 px-4">
            <div className="mb-8">
              <input
                id="pickUpDateReturn"
                autoFocus
                autoComplete="pickUpDateReturn"
                type="date"
                name="pickUpDateReturn"
                placeholder="Pickup date"
                value={formData.pickUpDateReturn}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>

          <div className="w-1/2 px-4">
            <div className="mb-8">
              <input
                id="pickUpTimeReturn"
                autoFocus
                autoComplete="pickUpTimeReturn"
                type="time"
                name="pickUpTimeReturn"
                placeholder="Pickup time"
                value={formData.pickUpTimeReturn}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary    "
              />
            </div>
          </div>

          <div className="w-full px-4">
            <div className="mb-8">
              <textarea
                id="note"
                autoFocus
                autoComplete="note"
                name="note"
                placeholder="Note"
                value={formData.note}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-dark outline-none focus:border-primary  resize-none  "
              />
            </div>
          </div>


          <div className="flex w-full items-center justify-between px-4">
            <button
              type="submit"
              className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
            >
              Submit
            </button>
          </div>


          
        </div>
      </fieldset>
    </form>
  );
};
export default RideForm;
