import React from 'react'
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
            <div className="wood-bg h-[140vh] w-full relative">
                <div className="wood-content flex flex-col gap-2 items-center h-full bg-black/40">
                    <div className="wheat flex mt-28">
                        <img src={wheatLeft} alt="" srcset="" className='h-16' />
                        <img src={wheatRight} alt="" srcset="" className='h-16' />
                    </div>
                    <h5 className='text-white text-[3.5em] font-bold text-center '>Why our beer is so good</h5>
                    <div className="ingridents w-full text-white flex justify-between gap-10 px-32 mt-10">
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start">
                            <img src={wheat} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.6em]'>Selected Malts</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start">
                            <img src={hops} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.6em]'>Quality Hops</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start">
                            <img src={drops} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.6em]'>Special Water</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start">
                            <img src={wheat} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.6em]'>Unique Yeast</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start">
                            <img src={recipes} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.6em]'>Perennial Recipes</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                        <div className="transition-all duration-300 hover:mt-[-20px] flex flex-col  gap-2 justify-center items-start">
                            <img src={wheat} alt="wheat" srcset="" className='h-28 ' />
                            <h5 className='font-bold text-[1.6em]'>Modern Equipment</h5>
                            <p>Nulla imperdiet ultrices quam,et semper nibh fringilla porttitor nisl.</p>
                        </div>
                    </div>
                    <div className="wheat-bg overflow-hidden absolute top-[65%] bottom-0">
                        <img src={coffee} alt="" srcset="" className='xl:ml-36 relative mt-20' />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Wood
