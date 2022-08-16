import React, { useState } from "react";
import data from "./realestateapi.json";
import { FaTree } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { TbArrowAutofitWidth } from "react-icons/tb";

function App() {
  // property data from json file
  const sitesRecord = data[0].properties;

  // hook to display property sites in DOM
  const [sitesToDisplay, handleDisplaySites] = useState(sitesRecord);

  // Hooks for each filter
  const [rentValue, setRent] = useState(7000);

  const [bhkValue, setBHK] = useState(2);

  const [locationValue, setLocation] = useState("Chandigarh");

  const [furnishingStatus, setFurnishing] = useState();

  // function to filter sites when clicked on Search button
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
      {/* Header navbar */}
      <div className="px-7 md:px-24  p-2 bg-blue-100 w-full border-b-2 border-blue-200 flex flex-wrap items-center justify-between  ">
        <div className="m-3 text-2xl md:text-3xl italic text-indigo-700 text font-bold">
          <a href="" target="_parent" rel="">
            Aashiyana.in
          </a>
        </div>

        <div className="m-3 whitespace-nowrap">
          <button className="text-center  text-slate-100 py-2 px-4 border-1 border-indigo-400 rounded-full bg-indigo-500 hover:bg-indigo-600 hover:transition-all ">
            Login / SignUp
          </button>
        </div>
      </div>

      {/* main body content */}
      <div className="flex justify-center">
        <div className="w-[95%] md:w-4/5 flex flex-col items-start">
          {/* search filters */}
          <div className="mt-20 flex self-center md:px-8 py-4 lg:flex-nowrap border-2 border-slate-200 rounded-md shadow-xl ring-slate-300 ">
            <form
              className=" p-7 md:p-0 flex flex-col gap-5 justify-center md:flex-row md:flex-nowrap md:items-center text-sm lg:text-base "
              action=""
            >
              {/* location */}
              <div className="whitespace-nowrap">
                <label className="mr-3 " htmlFor="location">
                  Location
                </label>
                <select
                  className=" w-32 cursor-pointer rounded-md text-center border-gray-300 border-2 text-slate-700"
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
              </div>

              {/* rent */}
              <div className="relative whitespace-nowrap">
                <label className="" htmlFor="rent">
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
                  className="absolute  select-none md:top-5 md:right-7 text-xs text-center font-mono text-slate-500"
                  htmlFor="rent"
                >
                  ₹{rentValue}/month
                </span>
              </div>

              {/* BHK */}
              <div className="whitespace-nowrap">
                <label className="mr-3" htmlFor="bhk">
                  BHK
                </label>
                <input
                  className="w-12 pl-2 text-slate-700 border-gray-300 border-2 rounded-md"
                  type="number"
                  name="bhk"
                  id="bhk"
                  steps="1"
                  min="1"
                  max="4"
                  value={bhkValue}
                  onChange={(e) => setBHK(e.target.value)}
                />
              </div>

              {/* furnishing status */}
              <div className="flex md:flex-col lg:flex-row gap-4 md:gap-0  lg:gap-4 flex-nowrap relative">
                <div
                  className={`cursor-pointer whitespace-nowrap ${
                    furnishingStatus === undefined
                      ? "after:content-['*_Select_a_furnishing_status'] after:ml-0.5 after:text-red-500 after:text-[0.6rem] after:absolute after:-bottom-4 lg:after:top-5  after:left-0 lg:after:right-1 "
                      : ""
                  }`}
                >
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
                    {" "}
                    Unfurnished
                  </label>
                </div>
                <div className="whitespace-nowrap">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="furnishing"
                    id="Semi-furnished"
                    value="Semi-furnished"
                    onClick={(e) => setFurnishing(e.target.value)}
                  />
                  <label className="cursor-pointer" htmlFor="Semi-furnished">
                    {" "}
                    Semi-furnished
                  </label>
                </div>
                <div className="whitespace-nowrap">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="furnishing"
                    id="Furnished"
                    value="Furnished"
                    onClick={(e) => setFurnishing(e.target.value)}
                  />
                  <label className="cursor-pointer" htmlFor="Furnished">
                    {" "}
                    Furnished
                  </label>
                </div>
              </div>

              {/* search button */}
              <button
                type="submit"
                className="p-2 md:px-4 lg:p-1 self-center my-2 sm:my-0  w-20 grow text-center text-slate-100  border-2 border-indigo-500 rounded-full bg-indigo-500 hover:bg-indigo-600 hover:text-slate-100 hover:scale-105 hover:transition"
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

          {/* Properties counter */}
          <h1 className="mt-16 mb-4 mx-1 md:mx-5 text-gray-600 font-semibold text-lg md:text-3xl ">
            Available to rent :{" "}
            <span className="mx-2 text-lg md:text-2xl font-normal text-slate-600 ">
              {sitesToDisplay.length}{" "}
              {sitesToDisplay.length === 1 || sitesToDisplay.length === 0
                ? "Property found."
                : "Properties found."}
            </span>
          </h1>

          {/* Horizonatal Divider */}
          <hr className="w-full my-4 border-solid border-t-2 border-gray-300" />

          {/* Site Card Display function */}
          <div className="lg:w-[105%] bg-red-200 flex flex-wrap justify-center">
            {sitesToDisplay.length !== 0 ? (
              sitesToDisplay.map((site) => {
                return (
                  // card
                  <div
                    key={site.id}
                    className="w-1/4 xl:w-1/5 text-[1em] h-50 mx-2 my-8 border-2 border-slate-300 rounded-md bg-white-200 flex-col drop-shadow-xl bg-white overflow-hidden hover:cursor-pointer hover:scale-95 hover:transition  hover:drop-shadow-2xl hover:drop-shadow-[0_35px_35px_rgba(242, 150, 143,1)]"
                  >
                    {/* card design*/}
                    {/* <div className="h-50"> */}
                      <img
                        className="w-full h-24 md:h-40 object-fill "
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
                      {/* </div> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="my-6 ml-4 text-2xl text-slate-700 text-center">
                No property with requisite filters found. Please search for
                other filter inputs.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
