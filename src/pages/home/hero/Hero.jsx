import React, { useRef, useState } from 'react';
import arrow from "../../../assets/arrows.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import {
    Autoplay,
    EffectFade, Navigation, Pagination,
    Parallax,
} from 'swiper/modules';

const Hero = () => {


    return (
        <>

            <Swiper
                spaceBetween={30}
                effect={'fade'}
                parallax={true}
                speed={1500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Parallax, Pagination]}
                className="mySwiperHero"
            >
                <SwiperSlide className='slide1-bg'>
                    <div className="content-slide2 flex flex-col items-center justify-center  h-full w-full bg-black/60 px-4">
                        <h1 className='text-white text-center text-[3em] md:text-[5em] font-bold mt-20'>Private <span className='text-[#e6bf55]'>CraftBrewery</span></h1>
                        <span className='text-white sm:text-[1.2em] text-center mt-10 sm:mt-0'>Nulla imperdiet ultrices quam, et semper nibh fringilla in.Aenean a porttitor nisl,sed laoreet mauris.</span>
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full mt-20 text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] '>Get beer</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2-bg  '>
                    <div className="content-slide2 flex flex-col items-center justify-center  h-full w-full bg-black/60 px-4">
                        <h1 className='text-white text-center text-[3em] md:text-[5em] font-bold mt-20 '>Traditions <span className='text-[#e6bf55]'>of Brewing</span></h1>
                        <span className='text-white text-[1.2em] mt-10 sm:mt-0'>Nulla imperdiet ultrices quam, et semper nibh fringilla in.Aenean a porttitor nisl,sed laoreet mauris.</span>
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full mt-20 text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] '>Get beer</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='slide3-bg'>
                    <div className="content-slide2 flex flex-col items-center justify-center  h-full w-full bg-black/60 px-4">
                        <h1 className='text-white text-center text-[3em] md:text-[5em] font-bold mt-20'>Beer Culture <span className='text-[#e6bf55]'>Leader</span></h1>
                        <span className='text-white text-[1.2em] mt-10 sm:mt-0'>Nulla imperdiet ultrices quam, et semper nibh fringilla in.Aenean a porttitor nisl,sed laoreet mauris.</span>
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full mt-20 text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] '>Get beer</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide4-bg'>
                    <div className="content-slide2 flex flex-col items-center justify-center  h-full w-full bg-black/60 px-4">
                        <h1 className='text-white text-center text-[3em] md:text-[5em] font-bold mt-20'>Handcrafted <span className='text-[#e6bf55]'>with Soul</span></h1>
                        <span className='text-white text-[1.2em] mt-10 sm:mt-0'>Nulla imperdiet ultrices quam, et semper nibh fringilla in.Aenean a porttitor nisl,sed laoreet mauris.</span>
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full mt-20 text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] '>Get beer</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide5-bg'>
                    <div className="content-slide2 flex flex-col items-center justify-center  h-full w-full bg-black/60 px-4">
                        <h1 className='text-white text-center text-[3em] md:text-[5em] font-bold mt-20'>Freedom <span className='text-[#e6bf55]'>of Taste</span></h1>
                        <span className='text-white text-[1.2em] mt-10 sm:mt-0'>Nulla imperdiet ultrices quam, et semper nibh fringilla in.Aenean a porttitor nisl,sed laoreet mauris.</span>
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full mt-20 text-[1.2em] transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] '>Get beer</button>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>

    )
}

export default Hero
