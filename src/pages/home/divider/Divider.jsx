import React from 'react'
import "./styles.css"

const Divider = () => {
    return (
        <>
            <div className="divider-bg xl:h-[50vh] w-full">
                <div className="flex flex-wrap sm:flex-nowrap justify-center items-center h-full w-full m-auto gap-10 bg-black/40 px-5 xl:px-[130px] py-10 sm:py-0">
                    <div className="item leading-none">
                        <h5 className='text-white text-[1.4em] sm:text-[5em] font-bold'>690</h5>
                        <h5 className='text-[#e6bf55] font-bold text-[1.4em] sm:text-[3em]'>litres/day</h5>
                    </div>
                    <div className="item">
                        <h2 className='text-white text-[1.2em] sm:text-[1.6em] sm:w-[50%] m-auto font-bold text-center sm:text-start'>«Since 1987 our brewers have developed and improved the best recipes for <span className='text-[#e6bf55]'>craft beer</span>, which have won many prestigious awards»</h2>
                    </div>
                    <div className="item">
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full  text-[1.2em] hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] transition-all duration-300 whitespace-nowrap'>Get beer</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Divider
