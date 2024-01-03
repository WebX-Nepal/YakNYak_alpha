import React from 'react'

import building from "../../assets/building.jpg";
import price from "../../assets/price.svg";
import tap from "../../assets/tap.svg";
import team from "../../assets/team.svg";
import people from "../../assets/people.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/ashish.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <>
            <div className="about-bg brightness-50 h-[40vh] w-full" style={{ backgroundImage: `url(${building})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            
            </div>
            <div className="flex mt-24 justify-between px-[140px]">
                <item className="w-[30%]">
                    <h2 className='text-[#252362] text-[3em] font-bold font-sans'>
                        <span className='text-[#FFBC00]'>Introduction</span> to best beer brewing company!
                    </h2>
                </item>
                <item className="w-[27%] tracking-wider leading-7 mt-4">
                    <p>Welcome to our Beer Section, a haven for beer enthusiasts. Explore a curated selection of craft brews, from crisp lagers to bold IPAs. Dive into tasting notes, brewery spotlights, and expert recommendations.</p>
                </item>
                <item className="w-[27%] tracking-wider leading-7 mt-4">
                    <p>Join us on this narrative journey, where each chapter is a celebration of our dedication to crafting moments that go beyond the pour. Cheers to the stories that make us who we are!</p>
                </item>
            </div>
            <div className="flex gap-10 px-[140px] mt-24">
                <div className="flex items-center gap-5 border-[2px] rounded-md p-3">
                    <div className="icon">
                        <img src={price} alt="" srcset="" />
                    </div>
                    <div className="details">
                        <h1 className="font-bold text-[1.3em]">Best Price Guaranteed</h1>
                        <p className="mt-1 text-[grey] leading-6">Shop with confidence! Our best price offer you unbeatable value for quality.</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 border-[2px] rounded-md p-3">
                    <div className="icon">
                        <img src={tap} alt="" srcset="" />
                    </div>
                    <div className="details">
                        <h1 className="font-bold text-[1.3em]">Best Price Guaranteed</h1>
                        <p className="mt-1 text-[grey] leading-6">Shop with confidence! Our best price offer you unbeatable value for quality.</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 border-[2px] rounded-md p-3">
                    <div className="icon">
                        <img src={team} alt="" srcset="" />
                    </div>
                    <div className="details">
                        <h1 className="font-bold text-[1.3em]">Best Price Guaranteed</h1>
                        <p className="mt-1 text-[grey] leading-6">Shop with confidence! Our best price offer you unbeatable value for quality.</p>
                    </div>
                </div>
            </div>

            <div className="img-container mt-24 flex justify-center h-[50vh]">
                <img src={people} alt="" srcset="" />
            </div>

            <div className="team-members mt-24 px-[140px]">
                <h2 className='font-bold text-[2.2em] text-center text-[#FFBC00]'>Team <span className='text-[#252362]'>Members</span></h2>
                <p className='w-[50%] m-auto mt-5 text-center text-[#272660]'>Our team is the backbone of our brewing journey—talented individuals driven by a shared passion for excellence. With diverse skills and unwavering dedication, we unite to craft the exceptional flavors that define our brand.</p>

                <div className="flex flex-wrap  gap-10 sm:gap-10 md:gap-5 lg:gap-10 xl:gap-5 justify-center md:justify-around max-[450px]:text-[.5em] sm:text-[1em] mt-24">
                    <div className=" relative h-[400px] w-96 sm:w-80 md:w-80 lg:w-72">
                        <img
                            src={one}
                            alt="cofounder"
                            className="rounded-2xl "
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <div className="absolute bottom-5 left-5 right-5 p-3  bg-[#252362] rounded-2xl">
                            <div className="flex items-center justify-between">
                                <div className="naming_flex_ceo text-white">
                                    <h1 className="font-semibold text-md ">Gehendra Yadav</h1>
                                    <h2>Co-founder & CEO</h2>
                                </div>
                                <div className="ceo_icon">
                                    <a href="https://linkedin.com" target="_black">
                                        <FontAwesomeIcon icon={faFacebook} className='h-7 text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-96 sm:w-80 md:w-80 lg:w-72">
                        <img
                            src={two}
                            alt="cofounder "
                            className="rounded-2xl "
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <div className="absolute bottom-5 left-5 right-5 p-3  bg-[#252362] rounded-2xl">
                            <div className="flex items-center justify-between">
                                <div className="naming_flex_ceo text-white">
                                    <h1 className="font-semibold text-md">Rojan G. Mul</h1>
                                    <h2>CTO</h2>
                                </div>

                                <div className="ceo_icon">
                                    <a href="https://linkedin.com" target="_black">
                                        <FontAwesomeIcon icon={faFacebook} className='h-7 text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-96 sm:w-80 md:w-80 lg:w-72">
                        <img
                            src={three}
                            alt="cofounder"
                            className="rounded-2xl "
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <div className="absolute bottom-5 left-5 right-5 p-3  bg-[#252362] rounded-2xl">
                            <div className="flex items-center justify-between">
                                <div className="naming_flex_ceo text-white">
                                    <h1 className="font-semibold text-md">Ankit Shrestha</h1>
                                    <h2>Frontend Developer</h2>
                                </div>
                                <div className="ceo_icon">
                                    <a href="https://linkedin.com" target="_black">
                                        <FontAwesomeIcon icon={faFacebook} className='h-7 text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-96 sm:w-80 md:w-80 lg:w-72">
                        <img
                            src={four}
                            alt="cofounder"
                            className="rounded-2xl "
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <div className="absolute bottom-5 left-5 right-5 p-3  bg-[#252362] rounded-2xl">
                            <div className="flex items-center justify-between">
                                <div className="naming_flex_ceo text-white">
                                    <h1 className="font-semibold text-md">Ashish Lawaju</h1>
                                    <h2>Backend Developer</h2>
                                </div>
                                <div className="ceo_icon">
                                    <a href="https://linkedin.com" target="_black">
                                        <FontAwesomeIcon icon={faFacebook} className='h-7 text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About
