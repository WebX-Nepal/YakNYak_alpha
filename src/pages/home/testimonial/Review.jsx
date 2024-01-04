import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import user1 from "../../../assets/group6.png";

const Review = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className="review-bg h-[100vh]">
                <div className="content h-full bg-black/50">
                    <h1 className='text-center text-white text-[3.5em] font-bold pt-32'>What our clients say</h1>
                    <div className="testimonial h-[60vh] text-white xl:mt-[-50px]">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiperTestimonial"
                        >
                            <SwiperSlide className='flex flex-col'>
                                <img src={user1} alt="" style={{ height: "70px", width: "70px" }} className='mt-20' />
                                <span className='font-bold text-[#e6bf55]'>Anatisia Stone</span>
                                <h6 className='w-[50%] m-auto text-center'>
                                    "Exceptional beer with a perfect balance of flavors! From the first sip to the last, it delivers a rich and satisfying experience. The aroma is inviting, the taste is smooth, and the finish is crisp. A true delight for beer enthusiasts – this brew combines craftsmanship and quality ingredients seamlessly. Whether enjoyed alone or with friends, it's a go-to choice that never disappoints. Cheers to a fantastic beer that deserves every bit of praise!"</h6>


                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <img src={user1} alt="" style={{ height: "70px", width: "70px" }} className='mt-20' />
                                <span className='font-bold text-[#e6bf55]'>Anatisia Stone</span>
                                <p className='w-[50%] m-auto text-center'>
                                    "Exceptional beer with a perfect balance of flavors! From the first sip to the last, it delivers a rich and satisfying experience. The aroma is inviting, the taste is smooth, and the finish is crisp. A true delight for beer enthusiasts – this brew combines craftsmanship and quality ingredients seamlessly. Whether enjoyed alone or with friends, it's a go-to choice that never disappoints. Cheers to a fantastic beer that deserves every bit of praise!"</p>

                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <img src={user1} alt="" style={{ height: "70px", width: "70px" }} className='mt-20' />
                                <span className='font-bold text-[#e6bf55]'>Anatisia Stone</span>
                                <p className='w-[50%] m-auto text-center'>
                                    "Exceptional beer with a perfect balance of flavors! From the first sip to the last, it delivers a rich and satisfying experience. The aroma is inviting, the taste is smooth, and the finish is crisp. A true delight for beer enthusiasts – this brew combines craftsmanship and quality ingredients seamlessly. Whether enjoyed alone or with friends, it's a go-to choice that never disappoints. Cheers to a fantastic beer that deserves every bit of praise!"</p>

                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <img src={user1} alt="" style={{ height: "70px", width: "70px" }} className='mt-20' />
                                <span className='font-bold text-[#e6bf55]'>Anatisia Stone</span>
                                <p className='w-[50%] m-auto text-center'>
                                    "Exceptional beer with a perfect balance of flavors! From the first sip to the last, it delivers a rich and satisfying experience. The aroma is inviting, the taste is smooth, and the finish is crisp. A true delight for beer enthusiasts – this brew combines craftsmanship and quality ingredients seamlessly. Whether enjoyed alone or with friends, it's a go-to choice that never disappoints. Cheers to a fantastic beer that deserves every bit of praise!"</p>

                            </SwiperSlide>

                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
