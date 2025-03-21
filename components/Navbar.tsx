import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logo, discord, times, lock, bar, twitter, telegram, youtube } from '@/assets/index';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent p-6 z-50">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="Logo" width={100} height={100} />
        <button onClick={() => setIsOpen(true)} className="block md:hidden">
          <Image src={bar} alt="Menu" width={30} height={30} />
        </button>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-full bg-[#181A1D] text-white flex flex-col items justify-"
          >
            <div className="absolute w-[90%] top-4 right-4">
              <div className='flex justify-between w-[98%]'>

                <Image src={logo} alt='' />
                <button onClick={() => setIsOpen(false)}>
                  <Image src={times} alt="Close" width={30} height={30} />
                </button>
              </div>
            </div>
            <div className="flex flex-col p-6 mt-30 items-start space-y-6 text-lg text-[#ffffff92]">
              <Link href="/jobs" onClick={() => setIsOpen(false)}>
                Jobs
              </Link>
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="https://t.me/BlockHubCommunity" target="_blank">
                Telegram Community
              </Link>
              <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded-md">
                <Image src={lock} alt="Lock" className='opacity-50' width={20} height={20} />
                <p>Connect Wallet (Soon)</p>
              </button>
            </div>
            <div className='flex    justify-center mb-10 gap-6 items-end h-full'>
              <div className='bg-[#9277FF26] p-4 rounded-2xl items-end h-'>
                <Image src={twitter} alt=' ' />
              </div>
              <div className='bg-[#9277FF26] p-4 rounded-2xl items-end h-'>
                <Image src={telegram} alt=' ' />
              </div>
              <div className='bg-[#9277FF26] p-4 rounded-2xl items-end h-'>
                <Image src={youtube} alt=' ' />
              </div>
              <div className='bg-[#9277FF26] p-4 rounded-2xl items-end h-'>
                <Image src={discord} alt=' ' />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
