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
      <div className="bg-red-100 w-full">
        <div className="">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Ashiyana.in
          </a>
        </div>

        <div className="">
          <form action="">
            <label htmlFor="location">Location</label>
            <select name="location" id="">
              <option value="Chandigarh">Chandigarh</option>
              <option value="Indore">Indore</option>
              <option value="Mathura">Mathura</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Noida">Noida</option>
            </select>

            <label htmlFor="rent">Rent</label>
            <input type="range" name="rent" id="" min="0" max="50000" />
            
            <label htmlFor="bhk">BHK</label>
            <input type="number" name="bhk" id="" steps="1" min="1" max="6" />
            

            <div>
              <input type="radio" name="furnishing" id="1" ><label htmlFor="furnishing">Unfurnished</label></input>
              <input type="radio" name="furnishing" id="" ><label htmlFor="furnishing">Semi-furnised</label></input>
              <input type="radio" name="furnishing" id=""><label htmlFor="furnishing">Furnished</label></input>
            </div>





          </form>
        </div>
      </div>

      <div className="text-center">Properties to rent</div>

      <div className="m-5 w-3/4 flex flex-wrap border-2 border-red-500 justify-around">
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
                  <div className="p-2">
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
                    <div className="flex justify-around">
                      <h1 className="badge">
                        <MdChair className="inline mx-2" />
                        {site.furnising}
                      </h1>
                      <h1 className="badge">
                        <TbArrowAutofitWidth className="inline mx-2" />
                        {site.areasize} sq. feet{" "}
                      </h1>
                    </div>
                  </div>

                  {/* aminites / Facilities awailable */}
                  <div className="mb-5 pl-6 flex flex-wrap text-sm text-slate-400">
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
  );
}

export default App;
