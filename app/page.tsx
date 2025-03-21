'use client'

import { homedot, home_eclipse } from "@/assets";
import Footer from "@/components/Footer";
import HIW from "@/components/HIW";
import Navbar from "@/components/Navbar";
import MembershipTier from "@/components/MembershipTier";
import Image from "next/image";
import FeaturedJobs from "@/components/FeaturedJobs";


export default function Home() {
  return (
    <>


      <div className="bg-[#201254] min-h-[80vh] flex flex-col">
        <Navbar />
        <Image src={home_eclipse} alt="" className="absolute rounded top-0   opacity-50 w-[150%]" />
        {/* <Image src={home_eclipse} alt="" className="absolute rounded bottom-0 rotate-180   opacity-50 w-full" /> */}
        <div className="relative flex flex-col  m-auto  items-center text-center text-white h-[80vh] w-full px-4">
        <Image src={homedot} className="absolute -z-0 left-4 md:left-12 w-12 md:w-20 top-0" alt="" />
        <Image src={homedot} className="absolute right-4 md:right-12 top-0 w-12 md:w-20" alt="" />
          <div className="w-[90%] flex flex-col mt-28 z-10  gap-4 items-center h-full ">

            <h2 className="text-[42px]  heading-color font-bold self-center  ">Find Web3 jobs and Projects easily.</h2>
            <p className="text-[14px]">Discover exciting Web3 opportunities, apply for jobs, and grow your network  in one place.</p>
            <button className="bg-[#3401CC] cursor-pointer p-4 rounded-md">Connect with Telegram</button>
          </div>
        </div>
      </div>
      <HIW />
      <MembershipTier />
      <FeaturedJobs />
      <Footer />
    </>
  );
}


