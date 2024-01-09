import React, { useState } from 'react';
import { Link } from "react-router-dom";
import App from '../App';



const AgeRestriction = () => {
    const [isOldEnough, setIsOldEnough] = useState(null);

    const handleYes = () => {
        setIsOldEnough(true);
    };

    const handleNo = () => {
        setIsOldEnough(false);
    };

    return (
        isOldEnough === null ?
            <div className='flex flex-col gap-10 justify-center items-center h-screen w-full'>
                <div className="title text-center font-bold md:text-[2.5em] md:w-[60%]">
                    <p>You must be of legal drinking age to enter this site.</p>
                    <p >Are you over the age of 21?</p>
                </div>
                <div className="button flex gap-5 md:gap-20">
                    <Link to="/home"><button className='bg-[#e6bf55] py-5 px-16 md:px-20 font-bold rounded-full  md:text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] mb-10 sm:mb-0' onClick={handleYes}>Yes</button></Link>
                    <button className='bg-[#e6bf55] py-5 px-16 md:px-20 font-bold rounded-full  md:text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] mb-10 sm:mb-0' onClick={handleNo}>No</button>
                </div>
            </div> :
            isOldEnough ?
                <App /> :
                <div className='flex justify-center items-center h-screen text-center font-bold md:text-[2.5em] md:w-[60%] m-auto'>
                    <p>Unfortunately, we are unable to proceed as the minimum age requirement is 21.</p>
                </div>
    );
};

export default AgeRestriction;