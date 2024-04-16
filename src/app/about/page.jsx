import SceneAbout from '@/src/components/SceneAbout';
import Arrow from '@/src/components/Arrow';
import AboutText from './AboutText';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className='absolute inset-0 flex items-center justify-center text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] text-[#F3691F] translate-y-[7rem] sm:translate-y-[8rem] md:translate-y-[9rem] lg:translate-y-[10rem] xl:translate-y-[11rem] text-center '>
        <Arrow />
      </div>
      <div className='translate z-50'>
        <SceneAbout />
      </div>
      <main className='absolute w-screen h-screen top-0 text-black'>
        <div className='h-screen lg:hidden'></div>
        <div className='relative w-screen h-screen hidden lg:block mb-[10rem]'>
          <Image
            className='w-screen h-screen'
            src='/medias/studio-dark.webp'
            alt='About Image'
            layout='fill'
            objectFit='cover'
            objectPosition='left'
            quality={100}
            priority={true}
          />
        </div>
        {/* <div className=' w-screen'></div> */}
        <div className='w-[80vw] h-auto mx-auto rounded-lg overflow-hidden lg:hidden mb-[5rem]'>
          <Image width={1920} height={1080} src='/medias/studio.webp' />
        </div>
        <AboutText />
        <div className='w-screen h-[20rem]'></div>
      </main>
    </>
  );
}
