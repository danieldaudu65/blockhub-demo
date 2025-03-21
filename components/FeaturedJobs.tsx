import { country, jobtype, tgfill } from '@/assets';
import { jobs, suggested_search } from '@/data';
import Image from 'next/image';
import React from 'react';
import { IoIosSearch } from "react-icons/io";


const FeaturedJobs = () => {
    return (
        <div className='bg-[#1F2227] p-8'>
            <h1 className="text-2xl font-semibold mb-6 heading-color">Featured Web3 Jobs & Projects</h1>
            <p className='text-[#ffffffa3]  text[10px] leading-8'>
                Discover 6,000+ Web3 jobs in 2025. Explore remote blockchain,
                crypto, DeFi, NFTs, and smart contracts opportunities.
                Kickstart your web3 career today!
            </p>
            <div className=' my-6 text-[#ffffffa3] border gap-2 rounded-lg p-3 flex  items-center'>
                <IoIosSearch />
                <input type="search" placeholder='Search for Jobs' className='::placeholder-text-red output-none border-none bg-transparent ' />
            </div>
            <div className='flex flex-wrap gap-3'>
                {
                    suggested_search.map((item, index) => (

                        <p key={index} className='border flex w-fit  border-[#3401CC] text-[12px] p-2 rounded-full px-4 my- text-[#ffffffb6]'>{item}</p>
                    ))
                }
            </div>


            <div className='my-8 grid gap-6'>
                {
                    jobs.map((job, index) => (
                        <div className=' flex gap-2' key={index}>
                            <Image src={job.image} alt='' className='w-10 h-10' />
                            <div className='flex flex-col gap-1 '>
                                <div className='flex gap-1 mx-1 text-[10px] text-[#A28AE8]'>
                                    <p> {job.app}</p>
                                    -
                                    <p>about {job.time}</p>
                                </div>

                                <p className='text-[#EBE6FA] text-[12px] mx-1'>{job.title}</p>
                                <div className='text-[#EBE6FA] flex items-center gap-2'>

                                    <div className='text-[#EBE6FA] gap-2 mx-1 flex items-center'>
                                        <Image src={jobtype} alt='' />
                                        <p className='text-[10px]'>{job.jobtype}</p>
                                    </div>
                                    <div className='flex gap-2 mx-1 items-center'>
                                        <Image src={country} alt=''/>
                                        <p className='text-[10px] text-[#EBE6FA]'>{job.locaation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-col items-center text-center  my-6 gap-2'>
                <Image src={tgfill} alt='' />
                <p className='text-[#C0B0EF]'> Get real time job alerts 🔔</p>
                <p className='text-[#e0d5ffbe] text-[12px]'>15 people connected today. 5000+ members.</p>
                <button className="bg-[#3401CC] cursor-pointer p-3 text-[12px] rounded-md text-white">Connect with Telegram</button>
            </div>
        </div>
    );
}

export default FeaturedJobs;
