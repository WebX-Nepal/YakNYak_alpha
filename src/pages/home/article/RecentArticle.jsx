import React, { useState } from 'react'
// import article1 from "../../../assets/article1.jpg"
// import article2 from "../../../assets/article2.jpg"
// import article3 from "../../../assets/article3.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import History1986 from './history1986';



const RecentArticle = () => {
    const [initial, setInitial] = useState(false);


    return (
        <>
            <div className="article  w-full">
                {/* <div className="content pt-24">
                    <h1 className='text-[3.5em] font-bold text-center' >Recent Articles</h1>
                    <div className="card flex justify-center gap-20 mt-10">
                        <div className="item w-[23%] bg-[#f6f3ee] ">
                            <div className="overflow-hidden ">
                                <img src={article1}
                                    alt="articleimgerr" className='hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="details p-6">
                                <h6 className="text-center">Brewery</h6>
                                <h4 className="text-[1.5em] font-bold mt-4 text-center">Beer production in China will be the largest in the world in 2023</h4>
                                <div className="date flex gap-3 mt-4 justify-center text-[grey]">
                                    <span>January 12,2019</span>
                                    <hr />
                                    <span>1 comment</span>
                                </div>
                            </div>


                        </div>
                        <div className="item w-[23%] bg-[#f6f3ee]">
                            <div className="overflow-hidden ">
                                <img src={article2}
                                    alt="articleimgerr" className='hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="details p-6">
                                <h6 className="text-center">Brewery</h6>
                                <h4 className="text-[1.5em] font-bold mt-4 text-center">Beer production in China will be the largest in the world in 2023</h4>
                                <div className="date flex gap-3 mt-4 justify-center text-[grey]">
                                    <span>January 12,2019</span>
                                    <hr />
                                    <span>1 comment</span>
                                </div>
                            </div>
                        </div>
                        <div className="item w-[23%] bg-[#f6f3ee] ">
                            <div className="overflow-hidden ">
                                <img src={article3}
                                    alt="articleimgerr" className='hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="details p-6">
                                <h6 className="text-center">Brewery</h6>
                                <h4 className="text-[1.5em] font-bold mt-4 text-center">Beer production in China will be the largest in the world in 2023</h4>
                                <div className="date flex gap-3 mt-4 justify-center text-[grey]">
                                    <span>January 12,2019</span>
                                    <hr />
                                    <span>1 comment</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="button w-full flex justify-center xl:mt-7">
                        <button className='bg-[#e6bf55] hover:bg-[#272361] py-5 px-20 font-bold rounded-full text-[1.2em] transition-all duration-300 mt-10 hover:text-yellow-500 text-[#272361]'>Read More</button>
                    </div>
                </div> */}
                <div className="content">
                    <h1 className='text-center font-bold text-[2em] xl:w-[60%] m-auto pt-24 tracking-wider'>Carlton & United Breweries is the most iconic beer company in Australia, with a history dating back to 1832</h1>
                    <div className="history-year flex gap-5 justify-center mt-10">
                        <div className="year">
                            <h5 onClick={() => setInitial(!initial)} className='cursor-pointer  '>1864</h5>
                            <FontAwesomeIcon icon={faCircle} className='h-2' />
                        </div>
                        <div className="year">
                            <h5>1986</h5>
                            <FontAwesomeIcon icon={faCircle} className='h-2' />
                        </div>
                        <div className="year">
                            <h5>1986</h5>
                            <FontAwesomeIcon icon={faCircle} className='h-2' />
                        </div>
                        <div className="year">
                            <h5>1986</h5>
                            <FontAwesomeIcon icon={faCircle} className='h-2' />
                        </div>
                        <div className="year">
                            <h5>1986</h5>
                            <FontAwesomeIcon icon={faCircle} className='h-2' />
                        </div>
                    </div>
                    <div className="history-details mt-10">
                        <h1>
                            {
                                initial && <History1986 />
                            }

                        </h1>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RecentArticle
