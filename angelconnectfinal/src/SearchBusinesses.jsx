import './Search.css';
import React, { useEffect, useState } from 'react';
import SearchProfile from './SearchProfile';
import db from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


function SearchBusinesses() {
  const [profiles, setProfiles] = useState([]);

  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate('/manageloans'); 
  };

  const userProfile = {
    name: "TechHealth Innovations",
    sectors: ["Technology", "Healthcare"],
    location: "San Francisco, CA",
    description: "Experienced software developer with a passion for integrating technology in healthcare. Alex has over 10 years of experience working with startups and major tech companies to deliver cutting-edge solutions.",
  };

  // Function to add a new profile
  const addProfile = (newProfile) => {
    setProfiles(currentProfiles => [...currentProfiles, newProfile]);
  };  

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "companies"));
        const profileData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProfiles(profileData);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);
  
  return (
    <div className="flex flex-col bg-gray-300">
      <div className="flex gap-5 justify-between px-14 py-7 w-full text-black whitespace-nowrap header-color max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img src="/AngelConnectLogo.png" alt="Angel Connect Logo" className="logoWidth" />
        <div className="flex gap-5 justify-between items-center text-2xl max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto text-white">Browse</div>
          <div className="self-stretch my-auto text-white">Manage</div>
          <div className="flex gap-5 justify-end self-stretch px-8 py-3.5 my-auto bg-zinc-100 rounded-[51px] text-neutral-400 max-md:px-5">
            <input className="my-auto no-border bg-zinc-100" placeholder="Search..."></input>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full text-6xl font-black text-center text-white bg-teal-600 max-md:max-w-full max-md:text-4xl">
        <div className="overflow-hidden relative flex-col justify-center items-center px-16 pt-20 w-full max-md:px-5 max-md:pb-10 max-md:max-w-full max-md:text-4xl">
          Search for Businesses
        </div>
      </div>
      <div className="flex z-10 flex-col self-center py-14 pl-20 mt-0 w-full rounded-3xl bg-zinc-100 max-w-[1347px] max-md:pl-5 max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-5 self-center px-6 py-3 max-w-full text-xl text-black bg-white border border-solid border-zinc-800 rounded-[45px] w-[744px] max-md:flex-wrap max-md:pr-5">
          <input className="flex-auto no-border" placeholder="Search..."></input>
        </div>
        <div className="flex gap-5 self-center mt-11 max-w-full w-[922px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-auto gap-5 justify-between self-start text-base text-neutral-600 max-md:flex-wrap">
            <div className="flex gap-5 justify-end py-2.5 pr-2.5 pl-5 whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-800">
              <input className="no-border" placeholder="Sector"></input>
            </div>
            <div className="flex gap-5 justify-end py-2.5 pr-2 pl-5 whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-800">
              <input className="no-border" placeholder="Location"></input>
            </div>
            <div className="flex gap-5 justify-end py-2 pr-2 pl-5 bg-white rounded-lg border border-solid border-zinc-800">
              <input className="no-border" placeholder="Year founded"></input>
            </div>
            <div className="justify-center px-12 py-2 text-center bg-white rounded-lg border border-solid border-zinc-800 max-md:px-5">
              All filters
            </div>
          </div>
          <div className="flex gap-2.5 text-xl text-center text-black">
            <div className="grow my-auto">Sort By</div>
          </div>
        </div>

      


        <div className="shrink-0 mt-8 ml-4 w-full h-px border border-solid bg-zinc-500 border-zinc-500" />
        
        {profiles.map(profile => (
          <SearchProfile key={profile.id} profile={profile} />
        ))}
        {/* <SearchProfile profile = {userProfile} /> */}

      
      </div>
      
      <div className="flex flex-col px-20 py-11 mt-24 w-full bg-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-medium text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-extrabold text-zinc-100 max-md:max-w-full">
                  QUICK LINKS
                </div>
                <div className="shrink-0 mt-4 h-0.5 bg-white border-2 border-white border-solid max-md:max-w-full" />
                <div className="mt-7 max-md:max-w-full">
                  Browse Loan Options
                </div>
                <div className="mt-7 max-md:max-w-full">Manage Profile</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-medium text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-extrabold text-zinc-100 max-md:max-w-full">
                  CONTACT US
                </div>
                <div className="shrink-0 mt-6 h-0.5 bg-white border-2 border-white border-solid max-md:max-w-full" />
                <div className="mt-6 max-md:max-w-full">(123) 456-7890</div>
                <div className="mt-7 max-md:max-w-full">
                  contact@angelconnectxyz.org
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-24 max-w-full h-0.5 bg-white border-2 border-white border-solid w-[1560px] max-md:mt-10" />
        <div className="mt-7 text-2xl font-medium text-zinc-100 max-md:max-w-full">
          Copyright © 2024 AngelConnect. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default SearchBusinesses
