import React, { useState } from "react";
import data from "./realestateapi.json";

// react-icons
import { FaTree, FaHandHoldingWater, FaWifi, FaFire, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { GrUserManager, GrInstagram } from "react-icons/gr";
import { SiLinktree } from "react-icons/si";



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

  // hook for alert message
  const [ alert, setAlert] =useState (false);

  // function to filter sites when clicked on Search button
  const handleSearch = (e, location, rentamount, sitebhk, furnish) => {
    e.preventDefault();

    if (furnish !== undefined) {
      setAlert(false);
      let searchedSites = sitesRecord.filter(
        (site) =>
          site.city == location &&
          site.rent <= rentamount &&
          site.bhk == sitebhk &&
          site.furnishing == furnish
      );

      handleDisplaySites(searchedSites);
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="w-full">
      {/* Header navbar */}
      <header className="px-7 md:px-24  p-2 bg-blue-100 w-full border-b-2 border-blue-200 flex flex-wrap items-center justify-between  ">
        <div className="m-3 text-2xl md:text-3xl italic text-indigo-700 text font-bold">
          <a href="" target="_parent" rel="">
            Aashiyana.in
          </a>
        </div>

        <div className="m-3 whitespace-nowrap">
          <button className="text-center text-xs md:text-base   text-slate-100 py-2 px-4 border-1 border-indigo-400 rounded-full bg-indigo-500 hover:bg-indigo-600 hover:transition-all ">
            Login / SignUp
          </button>
        </div>
      </header>

      {/* main body content */}
      <main className="flex justify-center">
        <div className="w-[95%] md:w-4/5 my-20 flex flex-col items-start gap-10">
          {/* search filters */}
          <div className=" flex self-center p-4 lg:flex-nowrap border-2 border-slate-200 rounded-md shadow-lg shadow-indigo-200/70 ">
            <form
              className="flex flex-col gap-5 justify-center md:flex-row md:flex-nowrap md:items-center text-sm lg:text-base "
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
                    alert === true
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
                className="p-2 md:px-4 lg:p-1 self-center w-20 grow text-center text-slate-100  border-2 border-indigo-500 rounded-full bg-indigo-500 hover:bg-indigo-600 hover:text-slate-100 hover:scale-105 hover:transition"
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
          <div className="w-full  mt-10 text-gray-600  ">
           <span className="mx-3 font-semibold text-lg md:text-3xl"> Available to rent :</span>
            <span className="text-base md:text-2xl font-normal text-slate-600 ">
              {sitesToDisplay.length}{" "}
              {sitesToDisplay.length === 1 || sitesToDisplay.length === 0
                ? "Property found."
                : "Properties found."}
            </span>

            {/* Horizonatal Divider */}
            <hr className="my-3 border-solid border-t-2 border-gray-300" />
          </div>


          {/* Site Card Display function */}
          <div className=" gap-3 flex flex-wrap justify-center">
            {sitesToDisplay.length !== 0 ? (
              sitesToDisplay.map((site) => {
                return (
                  // card
                  <div
                    key={site.id}
                    className="w-[98%] md:w-[49%] lg:w-64 border-2 border-slate-300 rounded-md bg-white-200 flex flex-row lg:flex-col drop-shadow-lg bg-white overflow-hidden hover:cursor-pointer hover:scale-[98%] hover:transition-all hover:shadow-lg hover:shadow-indigo-200  "
                  >
                    {/* card design*/}
                    {/* <div className="h-50"> */}

                    <div className="w-2/5 h-full overflow-hidden lg:w-full lg:h-40">
                      <img
                        className="w-full h-full object-fill "
                        src={site.image}
                      />
                      </div>
  

                      <div className="w-full pl-2 py-1 lg:p-3">
                        {/* Details */}
                          <h1>
                            <span className="text-gray-700 text-xs lg:text-base font-semibold">
                              ₹ {site.rent}
                            </span>{" "}
                            <span className="text-xs">/month</span>
                          </h1>
                      
                        <div className=" flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0  ">
                          <h1 className="font-bold inline text-base lg:text-lg text-purple-800">
                            {site.name}
                          </h1>
                          <h1 className=" text-purple-700 font-mono text-xs lg:text-base">
                            {site.bhk} BHK {site.type}
                          </h1>
                        </div>

                        <div className=" text-slate-500 text-xs lg:text-sm flex items-center gap-2 lg:block ">
                          <h1 className="">
                            <GrUserManager className="inline h-[10px] "/> {site.owner}
                          </h1>
                          <h1 className="">
                            <FaMapMarkerAlt className="inline  h-2 lg:h-3 mr-0.5 " />
                            {site.city}, {site.state}
                          </h1>
                        </div>

                        {/* badges */}
                        <div className=" flex mx-1 gap-2 lg:m-0  lg:justify-between ">
                          <h1 className="badge">
                            <MdChair className="inline mr-0.5" />
                            {site.furnishing}
                          </h1>
                          <h1 className="badge">
                            <TbArrowAutofitWidth className="inline mr-0.5" />
                            {site.areasize} sq. feet{" "}
                          </h1>
                        </div>

                        {/* aminites / Facilities awailable */}
                        <div className="my-1 flex flex-wrap gap-2 text-xs lg:text-sm text-slate-400">
                          <div className="basis-1/2">
                            <FaHandHoldingWater className="inline my-1 mx-2" />
                            {site.Ammenities[0]}
                          </div>
                          <div className="">
                            <FaWifi className="inline mx-2" />
                            {site.Ammenities[1]}
                          </div>
                          <div className="basis-1/2">
                            <FaFire className="inline mx-2" />
                            {site.Ammenities[2]}
                          </div>
                          <div className="">
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
      </main>

      {/* footer contact */}
      <footer id="contact" className="contact flex justify-center bg-blue-100 text-indigo-600 border-t-2 border-blue-200" >
            <div className="py-8 flex flex-col items-center gap-2 ">
                <ul className="flex gap-6 md:gap-16">

                  <li title="Himanshu Personal website" className="hover:animate-bounce">
                    <a href="https://www.himanshusingh.site/" target="_blank" className="">
                      <FaGlobe className='w-5 h-5 fill-indigo-600 hover:fill-indigo-500 hover:scale-150 transition-all duration-150' /></a>
                  </li>


                  <li title="github" className="hover:animate-bounce">
                    <a href="https://github.com/singhhimansh/" target="_blank" className="">
                      <FaGithub className='w-5 h-5 fill-indigo-600 hover:fill-indigo-500 hover:scale-150 transition-all duration-150'/></a>
                  </li>

                  <li title="linkedin" className="hover:animate-bounce">
                    <a href="https://www.linkedin.com/in/singhhimansh/" target="_blank" className=""><FaLinkedin className='w-5 h-5 fill-indigo-600 hover:fill-indigo-500 hover:scale-150 transition-all duration-150'/> </a>
                  </li>

                  <li title="instagram" className="hover:animate-bounce">
                    <a href="https://www.instagram.com/himanshhh_/" target="_blank" className="">
                    <GrInstagram className='w-5 h-5 fill-indigo-600 hover:fill-indigo-500 hover:scale-150 transition-all duration-150'/></a>
                  </li>

                  <li title="facebook" className="hover:animate-bounce">
                    <a href="https://www.facebook.com/him.signum/" target="_blank" className=""><FaFacebook className='w-5 h-5 fill-indigo-600 hover:fill-indigo-500 hover:scale-150 transition-all duration-150' /></a>
                  </li>                  
                </ul>
                
                <div className="mt-3 w-full flex flex-nowrap gap-4 items-center opacity-50  ">
                  <hr className='w-full h-px bg-indigo-600' />
                 <a href="http://himanshusingh.site" target="_blank" rel="noopener noreferrer"><h1 className="text-xs font-mono uppercase tracking-widest whitespace-nowrap hover:text-indigo-600 hover:font-bold transition-all duration-200">Himanshu Singh</h1></a>
                  <hr className='w-full h-px bg-indigo-600' />
                </div>
            </div>
      </footer>
    </div>
  );
}

export default App;
