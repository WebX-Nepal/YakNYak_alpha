import React from 'react'
import "./styles.css"
import drink from "../../../assets/drink.jpg"
import handBeer from "../../../assets/hand_beer.png"

const Section5 = () => {
    return (
        <>
            <div className="flex w-full h-full">
                <div className="img w-[50%] ">
                    <img src={drink} alt="" srcset="" />
                </div>
                <div className="content-bg w-[50%] flex items-center pl-[80px]">
                    <div className="content">
                        <h3 className='font-bold text-[2em] w-[70%]'>  Start selling beer
                            Offer for bars and
                            restaurants</h3>
                        <p className='mt-5 w-[80%]'>Nulla imperdiet ultrices quam, et semper nibh fringilla in. Aenean a porttitor nisl, sed laoreet mauris eu ultrices enim tincidunt id.</p>
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full text-[1.2em] hover:bg-white transition-all duration-300 mt-10'>Read More</button>
                    </div>
                    <div className="image">
                        <img src={handBeer} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5
