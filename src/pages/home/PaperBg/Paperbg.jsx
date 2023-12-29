import React from 'react'
import "./styles.css"
import bottling from "../../../assets/bottling.png"
import mashing from "../../../assets/mashing.png"
import boiling from "../../../assets/boiling.png"
import cooling from "../../../assets/cooling.png"

const Paperbg = () => {
    return (
        <>
            <div className="paper-bg h-[115vh] w-full">
                <h2 className='text-[2.5em] w-[65%] m-auto font-bold pt-24 text-center'>«Our brewery uses classical <span className='text-[#e6bf55]'>individual beer technology</span> , taking into account the desires of our consumers. We practice innovation and experimentation.»</h2>

                <div className="flex justify-center items-center text-center gap-20 w-[80%] m-auto pt-20">

                    <div className="flex flex-col gap-4">
                        <img src={mashing} alt="" srcset="" style={{ height: "200px", margin: "auto" }} />
                        <h3 className='font-bold text-[1.4em]'>Malt mashing</h3>
                        <p className='tracking-wider'>Aenean a porttitor nisl, sed laoreet mauris. Pellentesque fermentum gravida massa, eu ultrices enim .</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={boiling} alt="" srcset="" style={{ height: "200px", margin: "auto" }} />
                        <h3 className='font-bold text-[1.4em]'>Filtration and boiling</h3>
                        <p className='tracking-wider'>Aenean a porttitor nisl, sed laoreet mauris. Pellentesque fermentum gravida massa, eu ultrices enim .</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={cooling} alt="" srcset="" style={{ height: "200px", margin: "auto" }} />
                        <h3 className='font-bold text-[1.4em]'>Fermentation and cooling</h3>
                        <p className='tracking-wider'>Aenean a porttitor nisl, sed laoreet mauris. Pellentesque fermentum gravida massa, eu ultrices enim .</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={bottling} alt="" srcset="" style={{ height: "200px", margin: "auto" }} />
                        <h3 className='font-bold text-[1.4em]'>Filtration and bottling</h3>
                        <p className='tracking-wider'>Aenean a porttitor nisl, sed laoreet mauris. Pellentesque fermentum gravida massa, eu ultrices enim .</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Paperbg
