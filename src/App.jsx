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

  const [sitesToDisplay, handleDisplaySites] = useState(sitesRecord);

  const [rentValue, setRent] = useState(7000);

  const [bhkValue, setBHK] = useState(2);

  const [locationValue, setLocation] = useState("Chandigarh");

  const [furnishingStatus, setFurnishing] = useState();

  const handleSearch = (e, location, rentamount, sitebhk, furnish) => {
    e.preventDefault();

    if (furnish !== undefined) {
      let searchedSites = sitesRecord.filter(
        (site) =>
          site.city == location &&
          site.rent <= rentamount &&
          site.bhk == sitebhk &&
          site.furnishing == furnish
      );

      handleDisplaySites(searchedSites);
    }
  };

  return (
    <div className="w-full">
      {/* navbar */}
      <div className="h-20 p-2 bg-red-100 w-full flex items-center justify-around">
        <div className="text-3xl font-bold">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Ashiyana.in
          </a>
        </div>

        <div className="flex">
          <form className="flex items-center" action="">
            <label className="mx-3" htmlFor="location">
              Location
            </label>
            <select
              className="w-32 cursor-pointer rounded-md text-center border-gray-300 border-2"
              title="location"
              name="location"
              id="location"
              // value={locationValue}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="Chandigarh">Chandigarh</option>
              <option value="Indore">Indore</option>
              <option value="Mathura">Mathura</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Noida">Noida</option>
            </select>

            

            <div className="relative">
              <label className=" ml-6" htmlFor="rent">
                Rent
              </label>
              <input
                className="mx-3  w-28 cursor-pointer"
                type="range"
                name="rent"
                id="rent"
                min="1500"
                max="30000"
                value={rentValue}
                onChange={(e) => setRent(e.target.value)}
              />
              <span
                className="absolute  select-none top-5 right-7 text-xs text-center font-mono text-slate-500"
                htmlFor="rent"
              >
                ₹{rentValue}/month
              </span>
            </div>

            <label className="ml-6 " htmlFor="bhk">
              BHK
            </label>
            <input
              className="mx-3 w-12 pl-2  border-gray-300 border-2 rounded-md"
              type="number"
              name="bhk"
              id="bhk"
              steps="1"
              min="1"
              max="6"
              value={bhkValue}
              onChange={(e) => setBHK(e.target.value)}
            />

            <div className="mx-6 flex relative ">
              <div className={`cursor-pointer ${furnishingStatus===undefined ? ("after:content-['*_Select_a_furnishing_status'] after:ml-0.5 after:text-red-500 after:text-[0.7rem] after:absolute after:top-5 after:right-1"):"" }`}>
                <input
                  className="cursor-pointer "
                  type="radio"
                  name="furnishing"
                  id="Unfurnished"
                  value="Unfurnished"
                  // checked
                  onClick={(e) => setFurnishing(e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="Unfurnished">
                  Unfurnished
                </label>
              </div>
              <div className="mx-3">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="furnishing"
                  id="Semi-furnished"
                  value="Semi-furnished"
                  onClick={(e) => setFurnishing(e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="Semi-furnished">
                  Semi-furnished
                </label>
              </div>
              <div>
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="furnishing"
                  id="Furnished"
                  value="Furnished"
                  onClick={(e) => setFurnishing(e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="Furnished">
                  Furnished
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mx-2 p-1 w-20 text-center  border-2 border-blue-400 rounded-full bg-sky-300 hover:bg-sky-500 hover:text-slate-100 hover:scale-105 hover:transition"
              onClick={(e) =>
                handleSearch(
                  e,
                  locationValue,
                  rentValue,
                  bhkValue,
                  furnishingStatus
                )
              }
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="mx-52 flex flex-col items-start ">
        <h1 className="mt-12 mb-8 mx-5 text-gray-600 font-semibold text-3xl ">
          Available to rent : <span className="mx-3 text-2xl font-normal text-slate-600 ">
          {sitesToDisplay.length}{" "}{sitesToDisplay.length === 1 || sitesToDisplay.length === 0 ? "Property found." : "Properties found."}
        </span>
        </h1>
        

        <hr className="w-full my-4 border-solid border-t-2 border-gray-300" />

        {/* <div className="bg-red-300 self-center"> */}
        <div className=" flex flex-wrap">
          { sitesToDisplay.length !==0 ?(sitesToDisplay.map((site) => {
            return (
              // card
              <div
                key={site.id}
                className=" w-80  mx-2 my-8 border-2 border-slate-300 rounded-md bg-white-200 flex-col drop-shadow-xl bg-white overflow-hidden hover:cursor-pointer hover:scale-95 hover:transition  hover:drop-shadow-2xl hover:drop-shadow-[0_35px_35px_rgba(242, 150, 143,1)]"
              >
                {/* card */}
                <div className="h-50">
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
                        {site.furnishing}
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
          })): <div className="my-6 ml-4 text-2xl text-slate-700 text-center">No property with requisite filters found. Please search for other filter inputs.</div> }
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
