import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import yakLogo from "../../assets/logoYak.svg"


const navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeLink = " text-[#e6bf55] py-2 hover:text-gray-300";
    const normalLink = " text-white py-2 hover:text-gray-300";
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuRef]);

    // Close the menu when a navigation link is clicked
    const handleNavLinkClick = () => {
        closeMenu();
    };

    return (
        <>
            <div className="nav-container px-36 flex   font-mono tracking-wider absolute z-10 w-full bg-transparents text-[1.5em]">
                <div className="nav-menu flex w-full justify-between items-center mt-7">
                    <ul className="social-media flex gap-5 text-white text-[.8em]">
                        <li className="hover:text-[#e6bf55] transition-all duration-500">
                            <NavLink to="/" ><FontAwesomeIcon icon={faTwitter} /></NavLink>
                        </li>
                        <li className="hover:text-[#e6bf55] transition-all duration-500">
                            <NavLink to="/" ><FontAwesomeIcon icon={faFacebook} /></NavLink>
                        </li>

                        <li className="hover:text-[#e6bf55] transition-all duration-500">
                            <NavLink to="/" ><FontAwesomeIcon icon={faInstagram} /></NavLink>
                        </li>
                        <li className="hover:text-[#e6bf55] transition-all duration-500">
                            <NavLink to="/" ><FontAwesomeIcon icon={faGooglePlusG} /></NavLink>
                        </li>
                    </ul>
                    <div className="logo">
                        <img src={yakLogo} alt="imgerr" className="mr-16 h-[100px] w-[100px]" />
                    </div>

                    <div className="hamburger" ref={menuRef}>
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
                                        <div className=" absolute top-0 right-0 w-[30%] h-screen bg-[#262022] transition-opacity duration-300 ease-in-out opacity-100 p-10">
                                            <div className="flex justify-between p-4">
                                                <div className="logo">
                                                    <img src={yakLogo} alt="logoimgerr" className="h-20" />
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
                                                <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={handleNavLinkClick} href="#">
                                                    Home
                                                </NavLink>
                                                <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={handleNavLinkClick} href="#">
                                                    About Us
                                                </NavLink>
                                                <NavLink to="/products" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={handleNavLinkClick} href="#">
                                                    Products
                                                </NavLink>
                                                {/* <NavLink to="/blog" className={({ isActive }) => (isActive ? activeLink : normalLink)} href="#">
                                                    Blog
                                                </NavLink> */}
                                                {/* <NavLink to="/gallery" className={({ isActive }) => (isActive ? activeLink : normalLink)} href="#">
                                                    Gallery
                                                </NavLink> */}
                                                {/* <NavLink to="/page" className={({ isActive }) => (isActive ? activeLink : normalLink)} href="#">
                                                    Pages
                                                </NavLink> */}
                                                <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={handleNavLinkClick} href="#">
                                                    Contact
                                                </NavLink>
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
