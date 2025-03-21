import { membership_tier } from '@/data';
import React from 'react';

const MembershipTier = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(31, 0, 125, 1) 0%, rgb(16, 0, 64) 100%)',
      }}
      className="flex z-20   flex-col items-center p-6 py-8 text-white h-fit pb-24"
    >
      <h1  className="text-2xl font-semibold mb-6 heading-color">Membership Tiers</h1>
      <div className='flex flex-col mt-10 justify-center gap-6 items-center'>
        {
          membership_tier.map((item, index) => (
            <div className='min-h-[100px] :hover-bg-white transition-all' key={index}>
              <p className='border text-center p-12 border-[#565656] rounded-2xl'>{item.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MembershipTier;
