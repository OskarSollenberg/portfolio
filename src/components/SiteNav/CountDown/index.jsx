import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = '2024-09-01';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountDown = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className='translate-y-[.7rem] -translate-x-4'>
      <div className='sticky flex justify-center items-center left-0 right-0 z-50 w-full h-[2rem] text-black px-2'>
        <div className='absolute -top-[1.7rem] left-[.6rem] translate-y-2'>
          Internship starts in
        </div>

        <div className='mx-auto flex w-fit max-w-5xl flex-wrap items-center justify-center gap-x-4 text-xs md:text-sm'>
          <CountdownItem num={remaining.days} text='days' />
          <CountdownItem num={remaining.hours} text='hours' />
          <CountdownItem num={remaining.minutes} text='minutes' />
          <CountdownItem num={remaining.seconds} text='seconds' />
        </div>
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className='flex w-fit items-center justify-center gap-1.5 py-2'>
      <div className='relative w-full overflow-hidden text-center'>
        <AnimatePresence mode='popLayout'>
          <motion.span
            key={num}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ ease: 'backIn', duration: 0.75 }}
            className='block font-mono text-sm font-semibold md:text-base'
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default CountDown;
