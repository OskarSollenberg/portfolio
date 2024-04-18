import React from 'react';
import StickyLink from '@/src/components/StickyLink';

import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function SiteHeader() {
  return (
    <div className=' absolute z-[10000] top-0 flex mt-10 justify-center sm:justify-end w-full text-[#F3691F] gap-[3rem] lg:gap-[6rem] sm:pr-[5rem] '>
      <div>
        <a href='https://www.instagram.com/oskar_sollenberg/'>
          <StickyLink
            icon={<FaInstagram />}
            color={'#f3691f'}
            type={'socials'}
            size={40}
          />
        </a>
      </div>

      <div>
        <a href='https://www.facebook.com/oskar.sollenberg/'>
          <StickyLink
            icon={<FaFacebookF />}
            color={'#f3691f'}
            type={'socials'}
            size={40}
          />
        </a>
      </div>

      <div>
        <a href='https://www.linkedin.com/in/oskar-sollenberg-12ab0b24b/'>
          <StickyLink
            icon={<FaLinkedinIn />}
            color={'#f3691f'}
            type={'socials'}
            size={40}
          />
        </a>
      </div>

      <div>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:oskar@sollenberg.se'
        >
          <StickyLink
            icon={<MdOutlineAlternateEmail />}
            color={'#f3691f'}
            type={'socials'}
            size={40}
          />
        </a>
      </div>
    </div>
  );
}

export default SiteHeader;
