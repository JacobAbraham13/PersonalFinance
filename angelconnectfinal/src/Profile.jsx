import './Profile.css'
import * as React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {

  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate('/searchlenders'); 
  };

  return (
    <div className="flex flex-col pb-20 bg-gray-300">
      <div className="flex gap-5 justify-between px-14 py-7 w-full text-black whitespace-nowrap bg-zinc-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full header-color">
        <img src="/AngelConnectLogo.png" alt="Angel Connect Logo" className="logoWidth" />
        <div className="flex gap-5 justify-between items-center text-2xl max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto text-white">Browse</div>
          <div className="self-stretch my-auto text-white">Manage</div>
          <div className="flex gap-5 justify-end self-stretch px-8 py-3.5 my-auto bg-zinc-100 rounded-[51px] text-neutral-400 max-md:px-5">
            <input className="my-auto no-border bg-zinc-100" placeholder="Search..."></input>
          </div>
        </div>
      </div>
      <div className="justify-center items-center px-16 pt-20 w-full text-6xl font-black text-center text-white bg-teal-600 max-md:px-5 max-md:pb-10 max-md:max-w-full max-md:text-4xl">
        Create Your Profile
      </div>
      <div className="flex z-10 justify-center items-center self-center px-16 py-20 mt-0 w-full text-2xl font-medium rounded-3xl bg-zinc-100 max-w-[1316px] text-zinc-800 max-md:px-5 max-md:mt-0 max-md:max-w-full">
        <div className="flex flex-col mb-6 max-w-full w-[1084px]">
          <div className="max-md:max-w-full">Your Account Information</div>
          <div className="flex gap-5 justify-between mt-8 text-xl text-neutral-400 max-md:flex-wrap max-md:max-w-full">
            <input className="justify-center items-start px-5 py-4 bg-white rounded-lg border border-solid shadow-sm border-zinc-800 max-md:pr-5" placeholder="First Name"></input>
            <input className="justify-center items-start px-5 py-4 bg-white rounded-lg border border-solid shadow-sm border-zinc-800 max-md:pr-5" placeholder="Last Name"></input>
            <input className="justify-center items-start px-5 py-3 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-zinc-800 max-md:pr-5" placeholder="Email"></input>
          </div>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            What is the official name of your business?
          </div>
          <div className="flex flex-col justify-center mt-7 text-xl bg-white rounded-lg border border-solid shadow-sm border-zinc-800 text-neutral-400 max-md:max-w-full">
            <input className="justify-center items-start px-5 py-3 bg-white rounded-lg border border-solid border-zinc-800 max-md:pr-5 max-md:max-w-full" placeholder="Your business name"></input>
          </div>
          <div className="mt-14 mr-14 max-md:mt-10 max-md:mr-25 max-md:max-w-full">
            Which industry/sector does your business classify as? Please select
            the closest possible option.
          </div>
          <input className="flex gap-5 justify-end py-2.5 pr-2.5 pl-5 mt-7 max-w-full text-xl bg-white rounded-lg border border-solid border-zinc-800 w-[390px]" placeholder="Select industry/sector"></input>
          <div className="mt-20 italic max-md:mt-10 max-md:max-w-full">
            <span className="">
              Please describe your business. This will be visible as part of
              your business profile.
            </span>
            <br />
            <span className="text-xl italic">
              You may update this description anytime in the future.
            </span>
          </div>
          <input className="items-start px-5 pt-5 pb-52 mt-7 text-xl bg-white rounded-lg border border-solid border-zinc-800 max-md:pr-5 max-md:pb-10 max-md:max-w-full" placeholder="Enter your response here..."></input>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            Where is your business based?
          </div>
          <input className="justify-center items-start px-5 py-3 mt-7 text-xl bg-white rounded-lg border border-solid border-zinc-800 max-md:pr-5 max-md:max-w-full" placeholder="Enter city or ZIP code"></input>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            When did you start your business?
          </div>
          <div className="flex gap-5 justify-between self-start mt-7 text-xl whitespace-nowrap">
          <input className="justify-center items-start px-5 py-4 bg-white rounded-lg border border-solid shadow-sm border-zinc-800 max-md:pr-5" placeholder="Month"></input>
          <input className="justify-center items-start px-5 py-4 bg-white rounded-lg border border-solid shadow-sm border-zinc-800 max-md:pr-5" placeholder="Year"></input>
          </div>
          <button onClick={redirectToOtherPage} className="justify-center items-center self-center px-5 py-3 mt-28 max-w-full text-4xl bg-green-300 border border-solid border-zinc-800 rounded-[54px] max-md:px-5 max-md:mt-10">
            Create Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile