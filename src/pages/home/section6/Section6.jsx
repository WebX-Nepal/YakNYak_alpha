import React from 'react'
import beerHouse from "../../../assets/location-1.png"
import starFish from "../../../assets/location-3.png"
import westBeer from "../../../assets/location-2.png"
import chefHouse from "../../../assets/location-4.png"

const Section6 = () => {
    return (
        <>
            <div className="container bg-white h-[120vh] px-[100px]">
                <div className="heading text-center">
                    <h2 className='w-[60%] m-auto font-bold text-[3em] pt-32'>Where to buy</h2>
                    <p className='w-[60%] m-auto mt-8'>Nulla imperdiet ultrices quam, et semper nibh fringilla in. Aenean a porttitor nisl, sed laoreet mauris. Pellentesque fermentum gravida massa, eu ultrices enim tincidunt id.</p>
                    <h1>hello</h1>
                </div>

                <div className="flex justify-center mt-10 gap-20">
                    <div className="item">
                        <div className="flex gap-7">
                            <img src={beerHouse} alt="" srcset="" style={{ height: "100px", width: "110px", objectFit: "contain" }} />
                            <div className="details flex flex-col justify-center">
                                <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                <p className="text-[grey]">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                            </div>

                        </div>
                        <div className="flex gap-7 mt-16">
                            <img src={starFish} alt="" srcset="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                            <div className="details flex flex-col justify-center">
                                <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                <p className="text-[grey]">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                            </div>

                        </div>
                    </div>

                    <div className="item">
                        <div className="flex gap-7">
                            <img src={westBeer} alt="" srcset="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                            <div className="details flex flex-col justify-center">
                                <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                <p className="text-[grey]">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                            </div>

                        </div>
                        <div className="flex gap-7 mt-16">
                            <img src={chefHouse} alt="" srcset="" style={{ height: "110px", width: "110px", objectFit: "contain" }} />
                            <div className="details flex flex-col justify-center">
                                <h4 className='text-[1.5em] font-bold whitespace-nowrap'>Beer House</h4>
                                <p className="text-[grey]">GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6
