import React from 'react'
import "./styles.css"

const Divider = () => {
    return (
        <>
            <div className="divider-bg h-[50vh] w-full">
                <div className="flex justify-center items-center h-full w-full m-auto gap-10 bg-black/40 px-[130px]">
                    <div className="item leading-none">
                        <h5 className='text-white text-[5em] font-bold'>690</h5>
                        <h5 className='text-[#e6bf55] font-bold text-[3em]'>litres/day</h5>
                    </div>
                    <div className="item">
                        <h2 className='text-white text-[1.6em] w-[50%] m-auto font-bold'>«Since 1987 our brewers have developed and improved the best recipes for <span className='text-[#e6bf55]'>craft beer</span>, which have won many prestigious awards»</h2>
                    </div>
                    <div className="item">
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full  text-[1.2em] hover:bg-white transition-all duration-300 whitespace-nowrap'>Get beer</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Divider