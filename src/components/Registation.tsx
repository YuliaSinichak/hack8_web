"use client"
import React, { useState, useEffect } from 'react';
import { press_start } from '@/app/fonts';
import Image from 'next/image';


interface TimerProps {
    deadline: Date;
  }
  
  const Timer: React.FC<TimerProps> = ({ deadline }) => {
    const [remainingTime, setRemainingTime] = useState<number>(calculateRemainingTime(deadline));
  
    useEffect(() => {
      let intervalId: NodeJS.Timeout | null = null;
  
      if (remainingTime > 0) {
        intervalId = setInterval(() => {
          setRemainingTime(prevTime => Math.max(0, prevTime - 1000)); // Update every second
        }, 1000);
      }
  
      return () => {
        if (intervalId) {
          clearInterval(intervalId); // Cleanup function for the interval
        }
      };
    }, [remainingTime]); // Re-run useEffect only when remainingTime changes
  
    const displayTime: string = formatTime(remainingTime); // Format the remaining time
  
    return (
      <div>
        {remainingTime > 0 ? (
          <span>{displayTime}</span>
        ) : (
          <span>Deadline reached!</span>
        )}
      </div>
    );
  };
  
  function calculateRemainingTime(deadline: Date): number {
    // Ensure deadline is a valid Date object
    if (!(deadline instanceof Date)) {
      throw new Error('Invalid deadline: Must be a Date object.');
    }
  
    const now: number = Date.now();
    return Math.max(0, deadline.getTime() - now); // Ensure non-negative time
  }
  
  function formatTime(milliseconds: number): string {
    const seconds: number = Math.floor(milliseconds / 1000);
    const days: number = Math.floor(seconds / 86400); // 86400 seconds in a day
    const hours: number = Math.floor((seconds % 86400) / 3600); // Remaining seconds after removing days, divided by 3600 seconds in an hour
    const minutes: number = Math.floor((seconds % 3600) / 60);
    const secondsLeft: number = seconds % 60;
  
    return `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${secondsLeft.toString().padStart(2, '0')}s`;
  }

export default function Registration (){
    const deadline = new Date('2024-04-24T00:00:00');
    const redirectToSite = () => {
        window.location.href = 'https://t.me/Hackath0n8_bot';
      };
    return(
        <section className="relative min-h-screen w-full mt-40 mx-20">
            <h1 className={`${press_start.className} flex justify-center items-center text-white text-xl lg:text-4xl`}>
                BEST::HACKath0n 2024
            </h1>
            <Image
                src="/DualGradient.png"
                alt=" "
                height={700}
                width={700}
                className="hidden lg:flex absolute -left-40 xl:-left-12 top-0 z-0"
            />
            <div className="flex items-center lg:items-end justify-center flex-col mx-10 xl:mx-20 my-10 gap-16 lg:gap-20">
                <div className="relative border rounded-xl bg-black p-8 text-hack-green font-semibold texl-sm lg:text-xl z-10">
                    <li>
                        Хочеш на вчитися чогось нового та втілити свою ідею в життя?
                    </li>
                    <li>
                        Приєднуйся до крутої події - BEST::HACKath0n.
                    </li>
                    <li>
                        Переходь за посиланням та реєструйся.
                    </li>
                    <Image
                    src="/DrawArrow.svg"
                    width={70}
                    height={70}
                    alt=" "
                    className="hidden xl:flex absolute -rotate-90 -left-24 top-0"
                    />
                </div>
                <div className={`${press_start.className} relative flex border bg-black z-10 rounded-xl text-hack-green p-5 px-10 lg:px-20 text-sm lg:text-lg text-center lg:text-left items-center justify-center max-w-2xl`}>
                    Купа фану та емоцій,  а також незабутні спогади.
                    <span className='text-white font-semibold text-lg absolute xl:-left-32 -top-8 lg:-top-12  font-mono'>
                      Ви отримаєте:
                    </span>
                    <Image
                    src="/DrawArrow.svg"
                    width={60}
                    height={60}
                    alt=" "
                    className="hidden xl:flex absolute -rotate-90 -left-24"
                    />
                </div>
                <div className={`${press_start.className} relative flex flex-row-reverse justify-between w-full`}>
                <div className='flex flex-col lg:flex-row-reverse justify-between gap-5 w-full items-center'>
                <div className={`relative flex border rounded-xl bg-black z-10 text-hack-green p-5 mx-8 text-sm lg:text-lg items-center justify-center`}>
                    <Timer deadline={deadline} />
                    <span className='text-white font-semibold text-lg absolute xl:-left-48 -top-8 lg:-top-12 font-mono'>
                      До кінця реєстрації:
                    </span>
                    <Image
                    src="/DrawArrow.svg"
                    width={60}
                    height={60}
                    alt=" "
                    className="hidden xl:flex absolute -rotate-90 -left-24"
                />
                </div>
                    <Image
                        src="/Register.png"
                        alt=" "
                        height={250}
                        width={250}
                        className="flex lg:absolute left-0 xl:left-24 -top-96 self-center z-0"
                    />
                    <button className=' uppercase border p-5 px-20 rounded-xl text-xl hover:scale-105 duration-500 hover:animate-none text-white animate-pulse'  onClick={redirectToSite}>
                    Реєстрація_
                    </button>
                </div>
                </div>
            </div>

        </section>
    )
}