import React from 'react'
import article1 from "../../../assets/article1.jpg"
import article2 from "../../../assets/article2.jpg"
import article3 from "../../../assets/article3.jpg"

const Articles = () => {
    return (
        <>
            <div className="article h-[120vh] w-full">
                <div className="content pt-24">
                    <h1 className='text-[3.5em] font-bold text-center' >Recent Articles</h1>
                    <div className="card  flex justify-center gap-20 mt-10">
                        <div className="item rounded-xl w-[23%] bg-[#f6f3ee] ">
                            <div className="overflow-hidden rounded-t-xl">
                                <img src={article1}
                                    alt="articleimgerr" className='hover:scale-105 transition-all duration-300  ' />
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
                        <div className="item rounded-xl w-[23%] bg-[#f6f3ee]">
                            <div className="overflow-hidden rounded-t-xl">
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
                        <div className="item rounded-xl w-[23%] bg-[#f6f3ee] ">
                            <div className="overflow-hidden rounded-t-xl">
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
                        <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full text-[1.2em] transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] mt-10'>Read More</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Articles