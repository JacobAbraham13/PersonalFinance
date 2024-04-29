import './ManageLoans.css'
import * as React from "react";
import { useNavigate } from 'react-router-dom';

function LenderDisplay() {

  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate('/manageloans'); 
  };

  return (
    <div className="flex flex-col bg-gray-300">
      <div className="flex gap-5 justify-between px-14 py-7 w-full text-black whitespace-nowrap bg-zinc-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full header-color">
        <img src="/AngelConnectLogo.png" alt="Angel Connect Logo" className="logoWidth" />
        <div className="flex gap-5 justify-between items-center text-2xl max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto text-white">Browse</div>
          <button onClick={redirectToOtherPage}className="self-stretch my-auto text-white header-color no-border">Manage</button>
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
                      FinTech Inc.
                    </div>
                    <button className="justify-center py-0.5 text-xl font-semibold text-center text-black bg-emerald-300 rounded-[54px]">
                      Connect
                    </button>
                  </div>
                  <div className="mt-3 text-3xl italic font-black text-zinc-800 max-md:max-w-full">
                    Austin, TX
                  </div>
                  <div className="mt-14 text-xl text-black max-md:mt-10 max-md:max-w-full">
                    Mission Statement:
                    <br />
                    At FinTech Inc., our mission is to revolutionize the intersection of technology and finance, empowering individuals and businesses with innovative solutions that simplify financial processes, foster growth, and drive financial inclusion. We believe that by leveraging cutting-edge technology, we can democratize access to financial services, unlock new opportunities, and create a more equitable financial ecosystem for all.
                    <br /><br />
                    Description:
                    <br />
                    FinTech Inc. is a pioneering financial technology company based in Austin, Texas, dedicated to redefining the landscape of finance through technological innovation and visionary leadership. With a relentless focus on customer-centricity and a commitment to excellence, we strive to exceed expectations and deliver transformative solutions that address the evolving needs of our clients and partners.
                    <br /><br />
                    Driven by a passion for innovation and a deep understanding of both technology and finance, our team of experts combines technical prowess with industry expertise to develop and deploy groundbreaking financial products and services. From digital banking platforms and payment solutions to blockchain technology and artificial intelligence, we harness the power of technology to streamline processes, enhance efficiency, and drive value for our stakeholders.
                    <br /><br />
                    At FinTech Inc., we understand that financial services are not one-size-fits-all. That's why we take a personalized approach to every client relationship, tailoring our solutions to meet the unique needs and objectives of each individual and organization we serve. Whether you're a small business looking to optimize your cash flow or a multinational corporation seeking to innovate your financial infrastructure, we're here to help you navigate the complexities of finance with confidence and clarity.
                    <br /><br />
                    Our commitment to excellence extends beyond the products and services we offer. We are dedicated to fostering a culture of integrity, transparency, and trust, both within our organization and in our interactions with our clients, partners, and communities. By upholding the highest ethical standards and embracing diversity and inclusion, we strive to build enduring relationships built on mutual respect and shared values.
                    <br /><br />
                    At FinTech Inc., we believe that the future of finance is digital, decentralized, and democratized. Join us on our journey as we continue to push the boundaries of what's possible and shape the future of finance for generations to come.
                    <br />
                  </div>
                  <div className="mt-8 text-xl text-black max-md:max-w-full">
                    Sectors: Technology, Finance
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
                Exceptional Financial Solutions!
              </div>
            </div>
            <div className="mt-10 text-xl text-black max-md:max-w-full">
              I had the pleasure of working with FinTech Inc. recently, and I must say, they exceeded all my expectations! Their innovative financial solutions have truly transformed the way I manage my finances. The user-friendly interface of their digital banking platform made it incredibly easy for me to monitor my transactions, transfer funds, and even set up automated payments. Additionally, their customer service team was exceptional - always prompt, knowledgeable, and courteous in addressing any queries or concerns I had.
            </div>
            <div className="shrink-0 mt-14 h-px border border-solid bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-6 max-w-full text-xl text-black w-[335px]">
              <div className="shrink-0 bg-neutral-400 h-[47px] rounded-[142px] w-[47px]" />
              <div className="my-auto w-full">
                Emma K • May 13, 2023
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
                Great Service, Minor Improvements Needed"
              </div>
            </div>
            <div className="mt-10 text-xl text-black max-md:max-w-full">
            My experience with FinTech Inc. has been largely positive overall. The range of financial products and services they offer is impressive, and I've found their digital banking platform to be intuitive and easy to use. The ability to track my expenses, make transfers, and set savings goals all in one place has been incredibly convenient.
            <br/><br/>
            However, there are a few areas where I believe FinTech Inc. could improve. For instance, I've encountered occasional glitches in the mobile app, which can be frustrating at times. Additionally, while their customer service team is generally helpful, I've had a couple of instances where it took longer than expected to resolve an issue.
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
                Jane Doe • Jan 20, 2021
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
                Revolutionizing Finance!
              </div>
            </div>
            <div className="mt-10 text-xl text-black max-md:max-w-full">
              I've been a customer of FinTech Inc. for several years now, and I continue to be impressed by their commitment to innovation and excellence. Their suite of financial products and services has truly revolutionized the way I approach finance. From their intuitive mobile app that allows me to access my accounts on the go to their seamless integration with third-party financial tools, FinTech Inc. has made managing my finances easier and more convenient than ever before.
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