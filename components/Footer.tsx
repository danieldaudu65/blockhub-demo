import { discord, ftg, fx, logo } from '@/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#181A1D] p-8'>
            <div className='flex  justify-between'>

                <Image src={logo} alt='' />
                <div className='flex gap-4 text-white'>
                    <Image src={ftg} alt='' />
                    <Image src={fx} alt='' />
                    <Image src={discord} alt='' />
                </div>
            </div>

            <hr className='bg-[#FFFFFF] my-8' />

            <div className='text-[#FFFFFFBF] flex flex-col gap-4 text-[13px] my-8' >
                <p>  &copy; 2025 BlockHub. All right reserved. </p>
                <p>Privacy Policy.</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
            </div>
        </div>
    );
}

export default Footer;
