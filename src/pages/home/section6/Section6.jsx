
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./styles.css";


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import beerHouse from "../../../assets/location-1.png"
import starFish from "../../../assets/location-3.png"
import westBeer from "../../../assets/location-2.png"
import chefHouse from "../../../assets/location-4.png"

const Section6 = () => {

    return (
        <>
            <div className="container bg-white xl:h-[120vh] xl:px-[100px] px-4 ">
                <div className="heading text-center">
                    <h2 className='xl:w-[60%] m-auto font-bold text-[3em] pt-10 sm:pt-32'>Where to buy</h2>
                    <p className='xl:w-[60%] m-auto mt-8'>Nulla imperdiet ultrices quam, et semper nibh fringilla in. Aenean a porttitor nisl, sed laoreet mauris. Pellentesque fermentum gravida massa, eu ultrices enim tincidunt id.</p>
                    <h1>hello</h1>
                </div>
                <div className="swiper-content">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiperSec6"
                    >
                        <SwiperSlide>
                            <div className="flex justify-center mt-10 gap-4 sm:gap-20">
                                <div className="item">
                                    <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-7 mt-3">
                                        <img src={beerHouse} alt="" style={{ height: "100px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col items-center sm:items-start justify-center">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-10 sm:mt-20 items-center">
                                        <img src={starFish} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col items-center sm:items-start justify-center">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="item">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center  ">
                                        <img src={westBeer} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col justify-center items-center sm:items-start ">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-10 sm:mt-20 items-center  ">
                                        <img src={chefHouse} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col justify-center items-center sm:items-start ">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center mt-10 gap-4 sm:gap-20">
                                <div className="item">
                                    <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-7 mt-3">
                                        <img src={beerHouse} alt="" style={{ height: "100px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col items-center sm:items-start justify-center">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-10 sm:mt-20 items-center">
                                        <img src={starFish} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col items-center sm:items-start justify-center">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="item">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center  ">
                                        <img src={westBeer} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col justify-center items-center sm:items-start ">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-10 sm:mt-20 items-center  ">
                                        <img src={chefHouse} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col justify-center items-center sm:items-start ">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center mt-10 gap-4 sm:gap-20">
                                <div className="item">
                                    <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-7 mt-3">
                                        <img src={beerHouse} alt="" style={{ height: "100px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col items-center sm:items-start justify-center">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-10 sm:mt-20 items-center">
                                        <img src={starFish} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col items-center sm:items-start justify-center">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="item">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center  ">
                                        <img src={westBeer} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col justify-center items-center sm:items-start ">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-10 sm:mt-20 items-center  ">
                                        <img src={chefHouse} alt="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                                        <div className="details flex flex-col justify-center items-center sm:items-start ">
                                            <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                            <p className="text-[grey] text-center sm:text-start">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Section6
