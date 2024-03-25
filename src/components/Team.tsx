'use client'

import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';

import { press_start } from '@/app/fonts';

import 'swiper/css/effect-coverflow';
import { useState, useEffect } from 'react';
import CodeRun from './CodeRunEffect';
import CodeRunReverse from './CodeRunEffectReverse';

export default function Team() {
    const team = ['tanya', 'vanya', 'rostik', 'roma', 'yulik', 'illia', 'maria', 'vika', 'sasha', 'bodya', 'zakhar'];

    const [curr, setCurr] = useState(1);

    return (
        <div className="min-h-screen w-full py-20">
            <div className='absolute'>
                <CodeRun />
            </div>
            <h2 className={`${press_start.className} relative text-hack-green text-3xl z-10 text-center lg:text-end my-20 mr-10`}>Команда організаторів:</h2>
            <div className='border-2 border-hack-green border-l-0 border-r-0 py-5'>
            <Swiper
                className='w-full flex items-center relative z-10 h-64'
                autoHeight={true}
                slidesPerView={1}
                resizeObserver={true}
                centerInsufficientSlides={true}
                initialSlide={1}
                autoplay={true}
                mousewheel={false}
                keyboard={{
                    enabled: true,
                }}
                grabCursor={true}
                speed={500}
                loop={true}
                centeredSlides={true}
                watchSlidesProgress={true}
                modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    550: {
                        slidesPerView: 2,
                        spaceBetween: -10
                    },
                    780: {
                        slidesPerView: 2,
                        spaceBetween: -10
                    },
                    890: {
                        slidesPerView: 3,
                        spaceBetween: -10
                    },
                    1260: {
                        slidesPerView: 4,
                        spaceBetween: -5
                    },
                    1800: {
                        slidesPerView: 5,
                        spaceBetween: -5
                    }
                }}
            >

                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Tetiana.png" alt="tania" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Main Organizer</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Таня Boss</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Vanya.png" alt="vanya" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Human Resourses</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Чарка ейчарка</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Rostik.png" alt="rostik" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Logist</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Ростик Чорний Гриб</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Roman.png" alt="roma" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-lg lg:text-xl text-center `}>Content Responsible</h1>
                        <h1 className={`${press_start.className} text-hack-green text-md lg:text-lg text-center `}>Роман Фігель</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Yulik.png" alt="yulik" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>IT Responsible</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Роман Фігель</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Illia.png" alt="illia" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Found Raising</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Ілля Вода</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Maria.png" alt="maria" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Found Raising</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Зарванська Марія</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Sasha.png" alt="sasha" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Public Relations</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Оленчук Олександра</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Vika.png" alt="vika" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Design</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Бодоряк Вікторія</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Zakhar.png" alt="zakhar" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Father</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Зохан</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                        <img src="/team/Bodya.png" alt="bodya" className='rounded-xl'/>
                        <h1 className={`${press_start.className} text-xl lg:text-2xl text-center `}>Father</h1>
                        <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Одя Аран</h1>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
            </div>
        </div >
    )
}
