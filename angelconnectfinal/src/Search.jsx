import './Search.css'
import * as React from "react";
import { useState } from 'react'
import SearchProfile from './SearchProfile';

function Search() {
  return (
    <div className="flex flex-col bg-gray-300">
      <div className="flex gap-5 justify-between px-14 py-7 w-full text-black whitespace-nowrap bg-zinc-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto text-2xl max-md:flex-wrap">
          <div className="shrink-0 bg-black h-[60px] rounded-[64px] w-[60px]" />
          <div className="my-auto">Logo</div>
        </div>
        <div className="flex gap-5 justify-between items-center text-2xl max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto">Browse</div>
          <div className="self-stretch my-auto">Manage</div>
          <div className="flex gap-5 justify-end self-stretch px-8 py-3.5 my-auto bg-zinc-100 rounded-[51px] text-neutral-400 max-md:px-5">
            <input className="my-auto no-border bg-zinc-100" placeholder="Search..."></input>
            <img
              loading="lazy"
              src=""
              className="shrink-0 aspect-[0.92] fill-white w-[22px]"
            />
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 self-stretch aspect-square w-[82px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full text-6xl font-black text-center text-white bg-teal-600 max-md:max-w-full max-md:text-4xl">
        <div className="overflow-hidden relative flex-col justify-center items-center px-16 pt-20 w-full max-md:px-5 max-md:pb-10 max-md:max-w-full max-md:text-4xl">
          <img
            loading="lazy"
            srcSet="..."
            className="object-cover absolute inset-0 size-full"
          />
          Search for Lenders
        </div>
      </div>
      <div className="flex z-10 flex-col self-center py-14 pl-20 mt-0 w-full rounded-3xl bg-zinc-100 max-w-[1347px] max-md:pl-5 max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-5 self-center px-6 py-3 max-w-full text-xl text-black bg-white border border-solid border-zinc-800 rounded-[45px] w-[744px] max-md:flex-wrap max-md:pr-5">
          <input className="flex-auto no-border" placeholder="Search..."></input>
          <img
            loading="lazy"
            src=""
            className="shrink-0 aspect-[0.92] fill-black w-[22px]"
          />
        </div>
        <div className="flex gap-5 self-center mt-11 max-w-full w-[922px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-auto gap-5 justify-between self-start text-base text-neutral-600 max-md:flex-wrap">
            <div className="flex gap-5 justify-end py-2.5 pr-2.5 pl-5 whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-800">
              <input className="no-border" placeholder="Sector"></input>
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 self-start aspect-square w-[11px]"
              />
            </div>
            <div className="flex gap-5 justify-end py-2.5 pr-2 pl-5 whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-800">
              <input className="no-border" placeholder="Location"></input>
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 self-start aspect-square w-[11px]"
              />
            </div>
            <div className="flex gap-5 justify-end py-2 pr-2 pl-5 bg-white rounded-lg border border-solid border-zinc-800">
              <input className="no-border" placeholder="Year founded"></input>
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 self-start aspect-square w-[11px]"
              />
            </div>
            <div className="justify-center px-12 py-2 text-center bg-white rounded-lg border border-solid border-zinc-800 max-md:px-5">
              All filters
            </div>
          </div>
          <div className="flex gap-2.5 text-xl text-center text-black">
            <div className="grow my-auto">Sort By</div>
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 w-8 aspect-square"
            />
          </div>
        </div>

        {/* <div className="flex gap-5 mt-20 ml-9 max-w-full w-[1046px] max-md:flex-wrap max-md:mt-10">
          <div className="shrink-0 my-auto bg-neutral-400 h-[91px] rounded-[72px] w-[91px]" />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto text-3xl font-extrabold text-zinc-800">
                XYZ Lender Inc.{" "}
              </div>
              <button className="justify-center px-10 py-0.5 text-xl font-semibold text-center text-black whitespace-nowrap bg-teal-400 rounded-[54px] max-md:px-5">
                Connect
              </button>
            </div>
            <div className="mt-5 text-xl text-black max-md:max-w-full">
              Sectors: Lorem Ipsum
              <br />
              Location: Austin, TX
            </div>
          </div>
        </div>
        <div className="self-center mt-11 text-xl text-black w-[888px] max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
          facilisi ac. Pulvinar turpis malesuada blandit porta curabitur odio.
          Varius eu ornare ipsum vitae non sed nisi nulla. Viverra dictum mi
          phasellus vestibulum.
        </div> */}


        <div className="shrink-0 mt-8 ml-4 w-full h-px border border-solid bg-zinc-500 border-zinc-500" />
        <SearchProfile></SearchProfile>
        <SearchProfile></SearchProfile>

        {/* <div className="shrink-0 mt-8 ml-4 w-full h-px border border-solid bg-zinc-500 border-zinc-500" />

        <div className="flex gap-5 mt-20 ml-9 max-w-full w-[1046px] max-md:flex-wrap max-md:mt-10">
          <div className="shrink-0 my-auto bg-neutral-400 h-[91px] rounded-[72px] w-[91px]" />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto text-3xl font-extrabold text-zinc-800">
                XYZ Lender Inc.{" "}
              </div>
              <button className="justify-center px-10 py-0.5 text-xl font-semibold text-center text-black whitespace-nowrap bg-teal-400 rounded-[54px] max-md:px-5">
                Connect
              </button>
            </div>
            <div className="mt-5 text-xl text-black max-md:max-w-full">
              Sectors: Lorem Ipsum
              <br />
              Location: Austin, TX
            </div>
          </div>
        </div>
        <div className="self-center mt-11 text-xl text-black w-[888px] max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
          facilisi ac. Pulvinar turpis malesuada blandit porta curabitur odio.
          Varius eu ornare ipsum vitae non sed nisi nulla. Viverra dictum mi
          phasellus vestibulum.
        </div>

        <div className="shrink-0 mt-8 ml-4 w-full h-px border border-solid bg-zinc-500 border-zinc-500" />
        
        <div className="flex gap-5 mt-20 ml-9 max-w-full w-[1046px] max-md:flex-wrap max-md:mt-10">
          <div className="shrink-0 my-auto bg-neutral-400 h-[91px] rounded-[72px] w-[91px]" />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto text-3xl font-extrabold text-zinc-800">
                XYZ Lender Inc.{" "}
              </div>
              <button className="justify-center px-10 py-0.5 text-xl font-semibold text-center text-black whitespace-nowrap bg-teal-400 rounded-[54px] max-md:px-5">
                Connect
              </button>
            </div>
            <div className="mt-5 text-xl text-black max-md:max-w-full">
              Sectors: Lorem Ipsum
              <br />
              Location: Austin, TX
            </div>
          </div>
        </div>
        <div className="self-center mt-11 text-xl text-black w-[888px] max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
          facilisi ac. Pulvinar turpis malesuada blandit porta curabitur odio.
          Varius eu ornare ipsum vitae non sed nisi nulla. Viverra dictum mi
          phasellus vestibulum.
        </div> */}
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

export default Search
