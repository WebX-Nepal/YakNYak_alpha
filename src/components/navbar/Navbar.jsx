import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import yakLogo from "../../assets/logoYak.svg"


const navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="nav-container px-36 flex   font-mono tracking-wider absolute z-10 w-full bg-transparents text-[1.5em]">
                <div className="nav-menu flex w-full justify-between mt-7">
                    <ul className="social-media flex gap-5 text-[#e6bf55] text-[.8em]">
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
                    <div className="logo">
                        <img src={yakLogo} alt="imgerr" className="mr-16 h-[100px] w-[100px]" />
                    </div>
                    <div className="hamburger">


                        <nav >
                            <div className="container mx-auto flex justify-between items-center">
                                {/* <div className="text-white">Logo</div> */}

                                {/* Hamburger icon and menu */}
                                <div>
                                    <button
                                        className=" text-white p-2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                                        onClick={toggleMenu}
                                    >
                                        {isOpen ? '✕' : '☰'}
                                    </button>

                                    {isOpen && (
                                        <div className=" absolute top-0 right-0 w-[50%] h-screen bg-[#262022] transition-opacity duration-300 ease-in-out opacity-100 p-10">
                                            <div className="flex justify-between p-4">
                                                <div className="logo">
                                                    <img src={navlogo} alt="" />
                                                </div>
                                                <button
                                                    className="text-white p-2 focus:outline-none"
                                                    onClick={toggleMenu}
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            <div className="flex flex-col items-start px-10 mt-16">
                                                {/* Your navigation items */}
                                                <Link to="" className="text-white py-2 hover:text-gray-300" href="#">
                                                    Home
                                                </Link>
                                                <a className="text-white py-2 hover:text-gray-300" href="#">
                                                    About Us
                                                </a>
                                                <Link to="" className="text-white py-2 hover:text-gray-300" href="#">
                                                    Products
                                                </Link>
                                                <Link to="" className="text-white py-2 hover:text-gray-300" href="#">
                                                    Blog
                                                </Link>
                                                <Link to="" className="text-white py-2 hover:text-gray-300" href="#">
                                                    Gallery
                                                </Link>
                                                <Link to="" className="text-white py-2 hover:text-gray-300" href="#">
                                                    Pages
                                                </Link>
                                                <Link to="" className="text-white py-2 hover:text-gray-300" href="#">
                                                    Contact
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


            </div >
        </>
    );
};

export default navbar;
