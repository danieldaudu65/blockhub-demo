import { how_it_works } from '@/data'; 
import Image from 'next/image';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Define TypeScript type for each item
type HIWItem = {
  title: string;
  image: string;
  desc: string;
  iconBg: string;
  date: string;
};

const HIWCard: React.FC<{ how_it_works: HIWItem }> = ({ how_it_works }) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'transparent', color: 'heading-color' }}
    contentArrowStyle={{ border: 'unset' }}
    date={how_it_works.date}
    iconStyle={{
        background: how_it_works.iconBg,
        width: '25px', // Reduce icon size (hole size)
        height: '25px',
        padding: '0.5rem 0.7rem', // Adjust padding to avoid overlap
        border: '1px solid white', // Reduce border thickness
        display: 'flex',
        borderRadius: '10px !important',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '8px', // Adjust font size for better fit
        color: '', // Ensure text is visible
      }}    icon={
        <p>{how_it_works.date}</p>
    }
  >
    <Image src={how_it_works.image} alt='' className=' w-36 mb-10' />
    <h3 className='text-white text-[16px] '>{how_it_works.title}</h3>
    <p className='text-[#ffffffa7] text-[12px] font-light leading-relaxed  mt-2'>{how_it_works.desc}</p>
  </VerticalTimelineElement>
);

const HIW: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(31, 0, 125, 1) 0%, rgba(22, 0, 87, 1) 100%)',
      }}
      className="flex z-20 -mt-14 rounded-t-[60px] flex-col items-center p-6 py-8 text-white"
    >
      <h3 className="text-2xl font-semibold mb-6 heading-color">How It Works?</h3>

      <VerticalTimeline lineColor=""> {/* White vertical line */}
        {how_it_works.map((item, index) => (
          <HIWCard key={index} how_it_works={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HIW;
