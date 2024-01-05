// import React from 'react'
import "./styles.css"
import coffee from "../../../assets/coffee.png"
import wheatLeft from "../../../assets/wheat_left.svg"
import wheatRight from "../../../assets/wheat_right.svg"
import wheat from "../../../assets/wheat_3.svg"
import hops from "../../../assets/hops.svg"
import drops from "../../../assets/waterdrops.svg"
import recipes from "../../../assets/waterdrops.svg"

const Wood = () => {
    return (
        <>
            <div className="wood-bg xl:h-[140vh] w-full relative">
                <div className="wood-content flex flex-col gap-2 items-center h-full bg-black/40 sm:pb-0 pb-20">
                    <div className="wheat flex mt-28">
                        <img src={wheatLeft} alt="" srcset="" className='h-16' />
                        <img src={wheatRight} alt="" srcset="" className='h-16' />
                    </div>
                    <h5 className='text-white text-[2em] sm:text-[3.5em] font-bold text-center '>Why our beer is so good</h5>
                    <div className="ingridents w-full text-white flex flex-wrap sm:flex-nowrap justify-around sm:justify-between gap-5 xl:gap-10 px-4 xl:px-32 mt-10">
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start w-[40%] sm:w-full">
                            <img src={wheat} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.4em] sm:text-[1.6em]'>Selected Malts</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start w-[40%] sm:w-full">
                            <img src={hops} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.4em] sm:text-[1.6em]'>Quality Hops</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start w-[40%] sm:w-full">
                            <img src={drops} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.4em] sm:text-[1.6em]'>Special Water</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start w-[40%] sm:w-full">
                            <img src={wheat} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.4em] sm:text-[1.6em]'>Unique Yeast</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start w-[40%] sm:w-full">
                            <img src={recipes} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.4em] sm:text-[1.6em]'>Perennial Recipes</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start w-[40%] sm:w-full">
                            <img src={wheat} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.3em] sm:text-[1.6em] white'>Modern Equipment</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                    </div>
                    <div className="wheat-bg overflow-hidden absolute top-[65%] bottom-0 sm:inline-block hidden">
                        <img src={coffee} alt="" srcset="" className='xl:ml-36 relative mt-20' />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Wood
