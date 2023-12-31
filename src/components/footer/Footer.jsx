import React from 'react'
import { Link } from "react-router-dom";
import footer from "../../assets/footer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import navlogo from "../../assets/weisber.png"
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="footer-bg  bg-black/80 h-[70vh] w-full px-[120px] mt-14 " style={{ backgroundImage: `url(${footer})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                <div className="content h-full w-full">
                    <div className=" flex justify-center items-start pt-24 text-white gap-10">
                        <div className="item w-[30%]">
                            <div className="logo">
                                <img src={navlogo} alt="" className="mr-16" />
                            </div>
                            <p className='mt-10 text-gray-400 font-bold'>Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
                            <ul className="social-media flex gap-10 text-[#e6bf55] text-[1.5em] mt-10">
                                <li className="hover:text-[white] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faTwitter} /></Link>
                                </li>
                                <li className="hover:text-[white] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faFacebook} /></Link>
                                </li>

                                <li className="hover:text-[white] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faInstagram} /></Link>
                                </li>
                                <li className="hover:text-[white] transition-all duration-500">
                                    <Link to="/" ><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                                </li>
                            </ul>
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
                        <div className="item w-[30%] relative">
                            <h2 className='font-bold text-[2em] text-[#e6bf55]'>Subscribe</h2>
                            <input type="email" id='email' name='email' placeholder='Your email ...' className='h-16 rounded-full w-full px-6 text-black mt-9' />

                            <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full text-[1.2em] hover:bg-[#575757] transition-all duration-300  absolute top-[42px] right-0 text-black mt-9'>Subscribe</button>

                        </div>
                    </div>
                    <hr className='mt-24 border-[#454545]' />
                    <div className="copyright mt-6 px-[20px]">

                        <h5 className='font-bold text-white'><span className='text-[#e6bf55] font-normal'>Like-themes</span> © All Rights Reserved - 2019 - <span className='text-[#e6bf55] font-normal'>Purchase</span></h5>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Footer