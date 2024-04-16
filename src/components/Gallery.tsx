'use client'

import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';

import { press_start } from '@/app/fonts';

import 'swiper/css/effect-coverflow';
import { useState, useEffect } from 'react';
import CodeRun from './CodeRunEffect';
import CodeRunReverse from './CodeRunEffectReverse';
import Image from 'next/image';

export default function Gallery() {
    const [curr, setCurr] = useState(1);

    return (
        <div className="min-h-screen relative w-full lg:my-20 py-20" id='team'>
            <h2 className={`${press_start.className} relative text-hack-green  text-4xl lg:text-5xl z-10 text-center lg:text-end my-20 lg:my-32 lg:mr-40`}>Галерея:</h2>
            <div className='relative border-2 border-hack-green border-l-0 border-r-0 py-5'>
            <Image
                src="/BubbleDraw.png"
                width={50}
                height={50}
                alt=" "
                className="absolute levitate-bubbles2 left-96 -top-32"
            />
            <Image
                src="/BubbleDraw.png"
                width={40}
                height={40}
                alt=" " 
                className="absolute levitate-bubbles2 left-80 -top-40"
            />
            <Image
                src="/BubbleDraw.png"
                width={50}
                height={50}
                alt=" "
                className="absolute levitate-bubbles2 right-24 -top-32"
            />
            <Image
                src="/BubbleDraw.png"
                width={40}
                height={40}
                alt=" " 
                className="absolute levitate-bubbles2 right-80 -top-20"
            />
                
            <Swiper
                className='w-full flex items-center relative z-10'
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
                        slidesPerView: 2,
                        spaceBetween: -10
                    },
                    1260: {
                        slidesPerView: 3,
                        spaceBetween: -5
                    },
                    1800: {
                        slidesPerView: 4,
                        spaceBetween: -5
                    }
                }}
            >

                <SwiperSlide className=" ">
                    <div className=' rounded-xl mx-5 flex flex-col justify-center items-center h-full'>
                        <img src="Gallery1.png" alt="hack" className=' '/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className=' rounded-xl mx-5 flex flex-col justify-between items-center h-full'>
                        <img src="Gallery2.png" alt="hack" className=' '/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className=' rounded-xl mx-5 flex flex-col justify-between items-center h-full'>
                        <img src="Gallery3.png" alt="hack" className=' '/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className=' rounded-xl mx-5 flex flex-col justify-between items-center h-full'>
                        <img src="Gallery4.png" alt="hack" className=' '/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className=' rounded-xl mx-5 flex flex-col justify-between items-center h-full'>
                        <img src="Gallery5.png" alt="hack" className=' '/>
                    </div>
                </SwiperSlide>
               
                
                
            </Swiper>
            </div>
        </div >
    )
}
