import './ManageLoans.css'
import * as React from "react";

function LenderDisplay() {
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
      <div className="flex z-10 flex-col justify-center self-center py-20 mt-0 w-full bg-zinc-100 max-w-[1530px] rounded-[33px] max-md:mt-0 max-md:max-w-full">
      <div className="flex flex-col items-center px-16 pb-20 mt-5 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mb-14 w-full max-w-[1304px] max-md:mb-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl text-center text-black max-md:mt-10">
                  <div className="shrink-0 aspect-square bg-neutral-400 h-[232px] rounded-[142px]" />
                  <div className="mt-16 max-md:mt-10">
                    lendername@abc.org
                    <br />
                    (123) 456-7890
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto my-auto text-5xl font-black text-zinc-800 max-md:text-4xl">
                      Lender Name
                    </div>
                    <button className="justify-center py-0.5 text-xl font-semibold text-center text-black bg-emerald-300 rounded-[54px]">
                      Connect
                    </button>
                  </div>
                  <div className="mt-3 text-3xl italic font-black text-zinc-800 max-md:max-w-full">
                    Austin, TX
                  </div>
                  <div className="mt-14 text-xl text-black max-md:mt-10 max-md:max-w-full">
                    Mission Statement or Description: Lorem ipsum dolor sit amet
                    consectetur. Lorem lacinia volutpat facilisi ac. Pulvinar
                    turpis malesuada blandit porta curabitur odio. Varius eu
                    ornare ipsum vitae non sed nisi nulla. Viverra dictum mi
                    phasellus vestibulum.
                    <br />
                    Mission Statement or Description: Lorem ipsum dolor sit amet
                    consectetur. Lorem lacinia volutpat facilisi ac. Pulvinar
                    turpis malesuada blandit porta curabitur odio. Varius eu
                    ornare ipsum vitae non sed nisi nulla. Viverra dictum mi
                    phasellus vestibulum.
                  </div>
                  <div className="mt-8 text-xl text-black max-md:max-w-full">
                    Sectors: Lorem Ipsum
                    <br />
                    Location: Austin, TX
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 self-center mt-14 max-w-full h-px border border-solid bg-zinc-500 border-zinc-500 w-[1080px] max-md:mt-10" />
          <div className="mt-14 text-4xl font-black text-zinc-800 max-md:mt-10 max-md:max-w-full">
            Testimonies from businesses
          </div>
          <div className="flex flex-col self-center mt-8 max-w-full w-[1080px]">
            <div className="flex gap-5 self-center max-md:flex-wrap">
              <div className="flex flex-1 gap-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[43px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 w-11 aspect-[0.81]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.78] w-[42px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[43px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.48] w-[26px]"
                />
              </div>
              <div className="flex-auto my-auto text-4xl font-medium text-zinc-800">
              <img src="/lender_display_4.7.png" alt="4.7 out of 5" class="picture" />
                4.7 out of 5
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-16 max-w-full text-xl text-black w-[335px] max-md:mt-10">
              <div className="shrink-0 bg-neutral-400 h-[47px] rounded-[142px] w-[47px]" />
              <div className="my-auto w-full">
                John Doe • Dec 1, 2022
                <br />
              </div>
            </div>
            <div className="flex gap-5 mt-6 max-md:flex-wrap">
              <div className="flex gap-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.81] w-[34px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
              </div>
              <div className="flex-auto my-auto text-2xl font-bold text-black max-md:max-w-full">
              <img src="/lender_display_5.png" alt="5 out of 5" class="picture" />
                Review Title: Lorem ipsum dolor sit amet consectetur!
              </div>
            </div>
            <div className="mt-10 text-xl text-black max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
              <br />
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
            </div>
            <div className="shrink-0 mt-14 h-px border border-solid bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-6 max-w-full text-xl text-black w-[335px]">
              <div className="shrink-0 bg-neutral-400 h-[47px] rounded-[142px] w-[47px]" />
              <div className="my-auto w-full">
                John Doe • Dec 1, 2022
                <br />
              </div>
            </div>
            <div className="flex gap-5 mt-6 max-md:flex-wrap">
              <div className="flex gap-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.81] w-[34px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
              </div>
              <div className="flex-auto my-auto text-2xl font-bold text-black max-md:max-w-full">
              <img src="/lender_display_4.7.png" alt="4.7 out of 5" class="picture" />
                Review Title: Lorem ipsum dolor sit amet consectetur!
              </div>
            </div>
            <div className="mt-10 text-xl text-black max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
              <br />
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
            </div>
            <div className="mt-7 ml-3.5 max-w-full w-[482px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 mx-auto rounded-xl bg-neutral-400 h-[110px] w-[110px] max-md:mt-3.5" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 mx-auto rounded-xl bg-neutral-400 h-[110px] w-[110px] max-md:mt-3.5" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 mx-auto rounded-xl bg-neutral-400 h-[110px] w-[110px] max-md:mt-3.5" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 mx-auto rounded-xl bg-neutral-400 h-[110px] w-[110px] max-md:mt-3.5" />
                </div>
              </div>
            </div>
            <div className="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-7 max-w-full text-xl text-black w-[335px]">
              <div className="shrink-0 bg-neutral-400 h-[47px] rounded-[142px] w-[47px]" />
              <div className="my-auto w-full">
                John Doe • Dec 1, 2022
                <br />
              </div>
            </div>
            <div className="flex gap-5 mt-6 max-md:flex-wrap">
              <div className="flex gap-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.81] w-[34px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[0.79] w-[33px]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 w-5 aspect-[0.48]"
                />
              </div>
              <div className="flex-auto my-auto text-2xl font-bold text-black max-md:max-w-full">
              <img src="/lender_display_5.png" alt="5 out of 5" class="picture" />
                Review Title: Lorem ipsum dolor sit amet consectetur!
              </div>
            </div>
            <div className="mt-10 text-xl text-black max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
              <br />
              Lorem ipsum dolor sit amet consectetur. Lorem lacinia volutpat
              facilisi ac. Pulvinar turpis malesuada blandit porta curabitur
              odio. Varius eu ornare ipsum vitae non sed nisi nulla. Viverra
              dictum mi phasellus vestibulum.
            </div>
          </div>
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

export default LenderDisplay