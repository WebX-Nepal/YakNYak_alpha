import React, { useState } from 'react'
import { data, buttonNames } from "./staticContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Paperbg from '../../../assets/paper_BG.jpg';

const Histories = () => {
    const [displayYear, setDisplayYear] = useState("1832")
    // function handleSwitches(name) {
    //     switch (name) {
    //         case "1832":
    //             setDisplayYear("1832")
    //             break;
    //         case "1854":
    //             setDisplayYear("1854")
    //             break;
    //         case "1864":
    //             setDisplayYear("1864")
    //             break;
    //         case "1870":
    //             setDisplayYear("1870")
    //             break;
    //         case "1887":
    //             setDisplayYear("1887")
    //             break;
    //         case "1907":
    //             setDisplayYear("1907")
    //             break;

    //         case "1930s":
    //             setDisplayYear("1930s")
    //             break;
    //         default:
    //             setDisplayYear("2000")
    //     }
    // }

    return (
        <>
            <div className="article  w-full bg-white pb-20" >
                <div className="content">
                    <h1 className='text-center font-bold text-[2em] xl:w-[60%] m-auto pt-24 tracking-wider'>Carlton & United Breweries is the most iconic beer company in Australia, with a history dating back to 1832</h1>
                    <div className="history-year flex gap-10 font-bold justify-center mt-10">
                        {buttonNames.map((item, index) => {
                            return <div> <div key={index} className={`${displayYear == item.year ? "text-[#e6bf55] mt-[-15px] text-[2em]" : "text-black"} text-[1.5em] cursor-pointer`}>
                                <butoon
                                    onClick={() => setDisplayYear(item.year)} >{item.year}</butoon>

                            </div>
                                <FontAwesomeIcon icon={faCircle} className='h-2 w-full' />
                            </div>
                        })}
                    </div>
                    <div className="history-details mt-10">
                        {data.map((item, index) => {
                            if (displayYear == item.year)
                                return (<>
                                    <div key={index} className='history-container '>
                                        <div className="content w-[40%] p-10 m-auto relative bg-[white] left-24 z-10">
                                            <h4 className='font-bold text-[1.5em] '>{item.title}</h4>
                                            <p className='text-[grey] mt-5 text-[1.2em] tracking-wider'>{item.content}</p>
                                        </div>
                                    </div>
                                    <div className="image flex justify-center mt-[-60px] ">
                                        <img src={item.image} alt="img err" className='xl:h-[700px] xl:w-[1000px] object-cover' />
                                    </div>
                                </>)
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Histories
