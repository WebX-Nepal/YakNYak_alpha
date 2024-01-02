import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./discover.css";

import yaknNak from "../../../assets/beer1.png";
import yaknNak2 from "../../../assets/beer2.png";


const Discover = () => {
    return (
        <>
            <div className="discover h-[150vh] w-full">
                <div className="heading w-[50%] m-auto pt-20">
                    <h1 className='text-center font-bold text-[3em]'>Discover our beer</h1>
                    <p className='text-center text-[grey] pt-5 text-[1.2em]'>The YakNYak is a delightful fusion of toasted grains and floral notes, inviting you to experience a taste journey reminiscent of a crisp mountain breeze. With a medium body and a smooth finish, 'Yak N Yak' is the perfect companion for those seeking a flavorful and refreshing escape. Raise your glass and savor the taste of nature in every sip.</p>
                </div>
                <div className="swiper-beer pt-10 ">
                    <Swiper watchSlidesProgress={true} slidesPerView={3} className="swipper">
                        <SwiperSlide>

                            <img src={yaknNak} alt="" className="hover:scale-105 transition-all duration-300" style={{ objectFit: "cover", height: "80%" }} />
                            <h2 className="font-bold text-[1.5em] text-center pt-5">Mild Lager Beer</h2>
                            <p className="text-center tracking-wider mt-3">ABV 6.5% | IBU 60 | OG 1.104</p>

                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={yaknNak} alt="" className="hover:scale-105 transition-all duration-300" style={{ objectFit: "cover", height: "80%" }} />
                            <h2 className="font-bold text-[1.5em] text-center pt-5">Mild Lager Beer</h2>
                            <p className="text-center tracking-wider mt-3">ABV 6.5% | IBU 60 | OG 1.104</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={yaknNak2} alt="" className="hover:scale-105 transition-all duration-300" style={{ objectFit: "cover", height: "80%" }} />
                            <h2 className="font-bold text-[1.5em] text-center pt-5">Mild Lager Beer</h2>
                            <p className="text-center tracking-wider mt-3">ABV 6.5% | IBU 60 | OG 1.104</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={yaknNak2} alt="" className="hover:scale-105 transition-all duration-300" style={{ objectFit: "cover", height: "80%" }} />
                            <h2 className="font-bold text-[1.5em] text-center pt-5">Mild Lager Beer</h2>
                            <p className="text-center tracking-wider mt-3">ABV 6.5% | IBU 60 | OG 1.104</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={yaknNak} alt="" className="hover:scale-105 transition-all duration-300" style={{ objectFit: "cover", height: "80%" }} />
                            <h2 className="font-bold text-[1.5em] text-center pt-5">Mild Lager Beer</h2>
                            <p className="text-center tracking-wider mt-3">ABV 6.5% | IBU 60 | OG 1.104</p>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Discover
