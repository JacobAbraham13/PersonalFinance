import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import * as React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex gap-5 justify-center items-start self-stretch px-16 pt-20 w-full text-2xl text-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-1 gap-5 justify-between items-center max-md:flex-wrap">
          <div className="shrink-0 self-stretch rounded-3xl bg-zinc-300 h-[60px] w-[60px]" />
          <div className="self-stretch my-auto mr-auto ml-9">Your Matches</div>
          <div className="self-stretch my-auto mr-[1125px]">Search</div>
          <div className="mt-4">Profile</div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-20 mt-16 w-full rounded-3xl bg-zinc-300 max-w-[1593px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full text-base text-black bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col pt-20 w-full rounded-3xl min-h-[454px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-9 py-7 mt-36 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl">XYZ Company</div>
                    <div className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Lorem lacinia
                      volutpat facilisi ac. Pulvinar turpis malesuada blandit
                      porta curabitur odio. Varius eu ornare ipsum vitae non sed
                      nisi nulla. Viverra dictum mi phasellus vestibulum.
                    </div>
                    <div className="justify-center self-start px-8 py-2 mt-6 text-white whitespace-nowrap rounded-md bg-stone-700 max-md:px-5">
                      Connect
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full text-base text-black bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col pt-20 w-full rounded-3xl min-h-[454px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-9 py-7 mt-36 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl">XYZ Company</div>
                    <div className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Lorem lacinia
                      volutpat facilisi ac. Pulvinar turpis malesuada blandit
                      porta curabitur odio. Varius eu ornare ipsum vitae non sed
                      nisi nulla. Viverra dictum mi phasellus vestibulum.
                    </div>
                    <div className="justify-center self-start px-8 py-2 mt-6 text-white whitespace-nowrap rounded-md bg-stone-700 max-md:px-5">
                      Connect
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full text-base text-black bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col pt-20 w-full rounded-3xl min-h-[454px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-9 py-7 mt-36 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl">XYZ Company</div>
                    <div className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Lorem lacinia
                      volutpat facilisi ac. Pulvinar turpis malesuada blandit
                      porta curabitur odio. Varius eu ornare ipsum vitae non sed
                      nisi nulla. Viverra dictum mi phasellus vestibulum.
                    </div>
                    <div className="justify-center self-start px-8 py-2 mt-6 text-white whitespace-nowrap rounded-md bg-stone-700 max-md:px-5">
                      Connect
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-5 mt-16 max-w-full text-lg whitespace-nowrap bg-white border border-solid border-zinc-800 rounded-[40px] text-zinc-800 w-[894px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a1115286d354fc59f8fd7bd96400a72c295f1e3c43e6410c018f539cb3e5b96?"
            className="shrink-0 w-6 aspect-square"
          />
          <div>Search</div>
        </div>
      </div>
      <div className="px-5 mt-16 w-full max-w-[1467px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full text-base text-black bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full rounded-3xl min-h-[454px] max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col px-9 py-7 mt-36 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-2xl">XYZ Company</div>
                  <div className="mt-6">
                    Lorem ipsum dolor sit amet consectetur. Lorem lacinia
                    volutpat facilisi ac. Pulvinar turpis malesuada blandit
                    porta curabitur odio. Varius eu ornare ipsum vitae non sed
                    nisi nulla. Viverra dictum mi phasellus vestibulum.
                  </div>
                  <div className="justify-center self-start px-8 py-2 mt-6 text-white whitespace-nowrap rounded-md bg-stone-700 max-md:px-5">
                    Connect
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full text-base text-black bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full rounded-3xl min-h-[454px] max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col px-9 py-7 mt-36 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-2xl">XYZ Company</div>
                  <div className="mt-6">
                    Lorem ipsum dolor sit amet consectetur. Lorem lacinia
                    volutpat facilisi ac. Pulvinar turpis malesuada blandit
                    porta curabitur odio. Varius eu ornare ipsum vitae non sed
                    nisi nulla. Viverra dictum mi phasellus vestibulum.
                  </div>
                  <div className="justify-center self-start px-8 py-2 mt-6 text-white whitespace-nowrap rounded-md bg-stone-700 max-md:px-5">
                    Connect
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full text-base text-black bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full rounded-3xl min-h-[454px] max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col px-9 py-7 mt-36 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-2xl">XYZ Company</div>
                  <div className="mt-6">
                    Lorem ipsum dolor sit amet consectetur. Lorem lacinia
                    volutpat facilisi ac. Pulvinar turpis malesuada blandit
                    porta curabitur odio. Varius eu ornare ipsum vitae non sed
                    nisi nulla. Viverra dictum mi phasellus vestibulum.
                  </div>
                  <div className="justify-center self-start px-8 py-2 mt-6 text-white whitespace-nowrap rounded-md bg-stone-700 max-md:px-5">
                    Connect
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
