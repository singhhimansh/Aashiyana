import logo from "./logo.svg";
// import './App.css';
import React, { useEffect, useState } from "react";
import data from "./realestateapi.json";
import { FaTree } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { TbArrowAutofitWidth } from "react-icons/tb";

function App() {
  const sitesRecord = data[0].properties;

  return (
    <div className="w-full">
      {/* navbar */}
      <div className="mx-2 p-2 bg-red-100 w-full flex items-center justify-around">
        <div className="text-3xl font-bold">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Ashiyana.in
          </a>
        </div>

        <div className="flex">
          <form className="flex items-center" action="">
            <label className="mx-3" htmlFor="location">Location</label>
            <select className="w-32  rounded-md text-center border-gray-300 border-2" name="location" id="">
              <option value="Chandigarh">Chandigarh</option>
              <option value="Indore">Indore</option>
              <option value="Mathura">Mathura</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Noida">Noida</option>
            </select>

            <label className="ml-6" htmlFor="rent">Rent</label>
            <input className="mx-3 w-28" type="range" name="rent" id="" min="0" max="50000" />

            <label className="ml-6 " htmlFor="bhk">BHK</label>
            <input className="mx-3 w-12 pl-2 border-gray-300 border-2 rounded-md" type="number" name="bhk" id="" steps="1" min="1" max="6" />

            <div className="mx-6 flex ">
              <div className="">
              <input type="radio" name="furnishing" id="Unfurnished" /><label htmlFor="Unfurnished"> Unfurnished</label></div>
              <div className="mx-3">
              <input type="radio" name="furnishing" id="Semi-furnised" />
              <label htmlFor="Semi-furnised"> Semi-furnised</label></div>
              <div>
              <input type="radio" name="furnishing" id="Furnished" />
              <label htmlFor="Furnished"> Furnished</label></div>
            </div>

            <button className="mx-2 p-1 w-20 text-center  border-2 border-blue-300 rounded-full bg-purple-300">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="m-10 flex flex-col items-center">

      <h1 className="my-8 text-gray-600 font-semibold text-3xl ">Properties to rent</h1>

      <div className="flex justify-center ">
        <div className="w-4/5 flex flex-wrap  justify-center">
          {sitesRecord.map((site) => {
            return (
              <div
                key={site.id}
                className="mx-2 my-8  w-1/4 border-2 border-slate-300 rounded-md bg-white-200 flex-col drop-shadow-xl bg-white overflow-hidden"
              >
                {/* card */}
                <div className=" w-full h-50 ">
                  <img
                    className="w-full h-24 md:h-40 object-cover "
                    src={site.image}
                  />

                  <div className="m-1  ">
                    {/* Details */}
                    <div className="mx-5 my-3">
                      <h1>
                        <span className="text-gray-700 font-semibold">
                          ₹ {site.rent}
                        </span>{" "}
                        <span className="text-xs">/month</span>
                      </h1>
                      <h1 className="font-bold inline text-lg text-purple-800">
                        {site.name}
                      </h1>
                      <h1 className=" text-purple-700 font-mono text-base">
                        {site.bhk} BHK {site.type}
                      </h1>

                      <h1 className="text-sm text-slate-500">
                        Owner: {site.owner}
                      </h1>
                      <h1 className="text-sm text-slate-500">
                        <FaMapMarkerAlt className="inline h-3 mr-1 " />
                        {site.city}, {site.state}
                      </h1>
                    </div>

                    {/* badges */}
                    <div className="m-2 flex justify-around">
                      <h1 className="badge">
                        <MdChair className="inline mx-2" />
                        {site.furnising}
                      </h1>
                      <h1 className="badge">
                        <TbArrowAutofitWidth className="inline mx-2" />
                        {site.areasize} sq. feet{" "}
                      </h1>
                    </div>

                    {/* aminites / Facilities awailable */}
                    <div className="mb-8 pl-6 flex flex-wrap text-sm text-slate-400">
                      <div className="w-1/2 ">
                        <FaHandHoldingWater className="inline my-1 mx-2" />
                        {site.Ammenities[0]}
                      </div>
                      <div className="w-1/2 ">
                        <FaWifi className="inline mx-2" />
                        {site.Ammenities[1]}
                      </div>
                      <div className="w-1/2 ">
                        <FaFire className="inline mx-2" />
                        {site.Ammenities[2]}
                      </div>
                      <div className="w-1/2 ">
                        <FaTree className="inline mx-2" />
                        {site.Ammenities[3]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
