'use client';
import { useRef, useEffect, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function AboutText() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      type: 'lines,words,chars',
    });
    const chars = split.chars;

    gsap.from(chars, {
      opacity: 0,
      y: 30,
      stagger: 0.005,
      ease: 'back.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center',
      },
    });
  }, []);
  return (
    <div
      ref={textRef}
      style={{ fontFamily: 'Montreal' }}
      className='flex flex-col gap-10 text-center mx-auto sm:max-w-[85vw] lg:max-w-[75vw] max-w-[90vw] xl:text-[1.6rem] leading-[1.8rem] md:leading-9 lg:leading-10 xl:leading-[3rem] sm:text-[1.2rem] lg:text-[1.4rem]'
    >
      <p className='text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] text-[#F3691F]'>
        Who am I?
      </p>
      <p>{`Hi there! I'm Oskar Sollenberg.`}</p>
      <p>
        {`My journey started in the creative world at the Royal College of
        Music in Stockholm, where I immersed myself in a program all about
        Music and Media Production. During my time at KMH I got to improve
        in a variety of activities, from filming and creating sound/music
        for pictures, to learning about marketing and being introduced to
        coding for the first time.`}
      </p>
      <p>
        {`Programming and web development have been in the back of my mind
        ever since my time at KMH, and I have now spent a little over half a
        year learning everything I possibly can about web development at
        Hyper Island. I love working with visually appealing content, but
        I've also set a clear goal of achieving the skill set of a
        full-stack engineer. In a perfect world, I would be able to combine
        my creativity with my technical skills in coding to bring to life
        visually stunning and functional websites.`}
      </p>
    </div>
  );
}
