import React, { useState } from 'react'
import "./styles.css"
import arrow from "../../../assets/arrows.svg";


// content js
import { data } from "./content";

const Paperbg = () => {

    const [isHovered, setIsHovered] = useState(0);
    const handleHover = (id) => {
        setIsHovered(id);
    };
    const handleMouseLeave = () => {
        setIsHovered(0);
    };
    console.log("isHovered is", isHovered)
    return (
        <>
            <div className="paper-bg h-[115vh] w-full">
                <h2 className='text-[2.5em] w-[65%] m-auto font-bold pt-24 text-center'>« Our brewery uses classical <span className='text-[#e6bf55]'>individual beer technology</span> , we practice innovation and experimentation. »</h2>

                <div className="flex justify-center items-center text-center gap-10 w-[80%] m-auto pt-20">


                    {data.map((item, index) => {
                        return <>
                            <div className="main-divider flex flex-nowrap items-center justify-center w-full">
                                <div className="flex flex-col gap-4 relative mt-20">
                                    <div className={`rounded-full m-auto h-[150px] w-[150px] transition-all duration-300 ${isHovered == item.id ? "bg-wrapper bg-[#e6bf55] scale-[1.2] " : "bg-[#e6bf55]"}
                            `} onMouseOver={() => handleHover(item.id)}
                                        onMouseOut={handleMouseLeave}>

                                    </div>
                                    <img key={index} src={item.image} alt=""
                                        onMouseOver={() => handleHover(item.id)}
                                        onMouseOut={handleMouseLeave}
                                        style={{ height: "220px", margin: "auto" }} className='absolute top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
                            hover:cursor-pointer
                            ' />

                                    <h3 className='font-bold text-[1.4em] mt-10 text-[#272361] whitespace-nowrap'>{item.title}</h3>
                                    <p className='tracking-wider'>{item.content}</p>

                                </div >

                                {/* <div className="image w-full h-full">
                                    {index == 3 || 1 && (
                                        <img src={arrow} alt="" height={200} width={50} />
                                    )}
                                </div> */}

                            </div>

                        </>
                    })}
                </div>

            </div >
        </>
    )
}

export default Paperbg
