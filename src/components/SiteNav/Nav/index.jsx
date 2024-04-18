import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import NavLink from './NavLink';
import Curve from './Curve';
import Link from 'next/link';
import { navItems } from '@/src/data/navItems';
// import NavFooter from "./NavFooter";

export const menuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial='initial'
        animate='enter'
        exit='exit'
        className='w-screen h-screen bg-[#292929ee] fixed right-0 top-0 z-[4000] '
      >
        <div className=' h-full flex flex-col items-center justify-start sm:justify-center py-[8rem] sm:py-0 '>
          <div
            style={{
              fontFamily: 'Montreal',
            }}
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className=' flex items-center sm:items-start leading-[6rem] flex-col text-[3.8rem] sm:text-[8rem] sm:leading-[9rem] md:text-[9rem] lg:text-[11rem] lg:leading-[12rem]'
          >
            <div className='text-[#f3691f] border-[#FEFCE1] border-b uppercase text-[3rem] sm:text-xs '>
              <p>Navigation</p>
            </div>
            {navItems.map((navItem, index) => {
              return (
                <Link href={navItem.href} key={index}>
                  <NavLink
                    data={{ ...navItem }}
                    isActive={selectedIndicator == navItem.href}
                    setSelectedIndicator={setSelectedIndicator}
                  ></NavLink>
                </Link>
              );
            })}
            {/* <NavFooter /> */}
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}
