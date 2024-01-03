import React from 'react'
import { Link } from "react-router-dom";
import footer from "../../assets/footer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logoYak.svg";
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import beerIcon from "../../assets/beerIcon.svg";

const Footer = () => {
    return (
        <>
            <div className="footer-bg  bg-black/80 h-full w-full px-[120px] mt-14 " style={{ backgroundImage: `url(${footer})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                <div className="content h-full w-full">
                    <div className=" flex justify-center items-start pt-24 text-white gap-10">
                        <div className="item w-[30%]">
                            <div className="logo">
                                <img src={logo} alt="" className="mr-16 w-[100px]" />
                            </div>
                            <p className='mt-10 text-gray-400 font-bold'>Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>

                        </div>
                        <div className="item w-[30%]">
                            <h2 className='font-bold text-[2em] text-[#e6bf55]'>Contact info</h2>
                            <div className="flex items-center gap-5 mt-8">
                                <FontAwesomeIcon icon={faLocationDot} className='text-[#e6bf55] text-[2em]' />
                                <div className="details">
                                    <h6 className='text-[#e6bf55] text-[1.2em]'>  Our Location:</h6>
                                    <p className='font-bold text-[1.2em]'>Goldschmidtstraße 13, 04103 Leipzig</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 mt-8">
                                <FontAwesomeIcon icon={faPhoneVolume} className='text-[#e6bf55] text-[2em]' />
                                <div className="details">
                                    <h6 className='text-[#e6bf55]'>Phones:</h6>
                                    <p className='font-bold tracking-wider'>+977 981234578</p>
                                    <p className='font-bold tracking-wider'>+977 981234578</p>
                                </div>
                            </div>

                        </div>
                        <div className="item w-[30%] ">
                            <h2 className='font-bold text-[2em] text-[#e6bf55]'>Connect with us</h2>
                            {/* <h2 className='font-bold text-[2em] text-[#e6bf55]'>Subscribe</h2> */}

                            {/* <input type="email" id='email' name='email' placeholder='Your email ...' className='h-16 rounded-full w-full px-6 text-black mt-9' />

                            <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full text-[1.2em] hover:bg-[#272361] transition-all duration-300  absolute top-[42px] right-[-2px] hover:text-yellow-500 text-[#272361] mt-9'>Subscribe</button> */}
                            <ul className="social-media flex gap-10  text-white text-[1.5em] mt-10">
                                <li className="hover:text-[#e6bf55] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faTwitter} /></Link>
                                </li>
                                <li className="hover:text-[#e6bf55] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faFacebook} /></Link>
                                </li>

                                <li className="hover:text-[#e6bf55] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faInstagram} /></Link>
                                </li>
                                <li className="hover:text-[#e6bf55] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <hr className='mt-24 border-[#454545]' />
                    <img src={beerIcon} alt="imgerr" srcset="" className='h-16 absolute right-10 mt-[-17px] animate-bounce' />


                    <div className="copyright mt-6 px-[20px] pb-7 flex justify-between items-center">
                        <h5 className='font-bold text-white '><span className='text-[#e6bf55] font-normal'>Like-themes</span> © All Rights Reserved - 2019 - <span className='text-[#e6bf55] font-normal'>Purchase</span></h5>

                    </div>
                </div>



            </div>
        </>
    )
}

export default Footer
