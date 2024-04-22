import './ManageLoans.css'
import * as React from "react";
import { useState } from 'react'

function ManageLoans() {
  return (
    <div className="flex flex-col bg-gray-300">
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
      <div className="w-full bg-teal-600 min-h-[220px] max-md:max-w-full" />
      <div className="flex z-10 justify-center items-center self-center px-16 py-20 mt-0 w-full rounded-3xl bg-zinc-100 max-w-[1530px] max-md:px-5 max-md:mt-0 max-md:max-w-full">
        <div className="flex flex-col mb-14 w-full max-w-[1325px] max-md:mb-10 max-md:max-w-full">
          <div className="text-6xl font-black text-zinc-800 max-md:max-w-full max-md:text-4xl">
            My Business Dashboard
          </div>
          <div className="self-center mt-9 text-4xl font-medium text-center text-zinc-800">
            My Loans
          </div>
          <div className="flex flex-col px-14 py-16 mt-9 bg-white rounded-lg shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto text-3xl font-medium text-zinc-800">
                Lender Name
              </div>
              <button className="justify-center py-0.5 text-xl font-semibold text-center text-black bg-emerald-300 rounded-[54px]">
                Manage Loan
              </button>
            </div>
            <div className="mt-11 max-w-full w-[597px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow font-medium max-md:mt-10">
                    <div className="text-6xl text-zinc-800 max-md:text-4xl">
                      $10,563
                    </div>
                    <div className="mt-5 text-2xl text-zinc-500">
                      Current Balance
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-2 font-medium max-md:mt-10">
                    <div className="text-6xl text-zinc-800 max-md:text-4xl">
                      17.31%
                    </div>
                    <div className="mt-8 text-2xl text-zinc-500">
                      Interest Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-xl text-black max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
            </div>
          </div>
          <div className="self-center mt-28 text-4xl font-medium text-center text-zinc-800 max-md:mt-10">
            My Payment Plan
          </div>
          <div className="flex flex-col px-14 py-16 mt-9 bg-white rounded-lg shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto self-start text-3xl font-medium text-zinc-800">
                Next Payment
              </div>
              <button className="justify-center px-7 py-0.5 text-xl font-semibold text-center text-black bg-emerald-300 rounded-[54px] max-md:px-5">
                Change Payment Schedule
              </button>
            </div>
            <div className="mt-10 max-w-full w-[661px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow font-medium max-md:mt-10">
                    <div className="text-6xl text-zinc-800 max-md:text-4xl">
                      $950
                    </div>
                    <div className="mt-6 text-2xl text-zinc-500">
                      Payment Amount
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-1.5 font-medium max-md:mt-10">
                    <div className="text-6xl text-zinc-800 max-md:text-4xl">
                      Jan 25th
                    </div>
                    <div className="mt-8 text-2xl text-zinc-500">
                      Payment Scheduled Date
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-xl text-black max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
            </div>
          </div>
        </div>
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

export default ManageLoans