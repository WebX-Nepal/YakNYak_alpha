import React from 'react'
import contact from "../../assets/contact.png";
import map from "../../assets/map.png";
import mapIcon from "../../assets/mapIcon.svg";
import mailIcon from "../../assets/mailIcon.svg";
import mingcuteIcon from "../../assets/mingcuteIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";

const Contact = () => {
    return (
        <>
            <div className="about-bg brightness-90 h-[40vh] w-full" style={{ backgroundImage: `url(${contact})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className='flex items-end h-full justify-center text-white text-[3em] font-bold tracking-wider xl:ml-[30px]'>Contact</h1>
            </div>


            <div className="flex px-[140px] gap-10 mt-24 justify-center">
                <div className="item w-[50%]">
                    <h2 className='font-bold text-[1.2em]'>GET IN TOUCH</h2>
                    <h2 className='font-bold text-[2em] mt-4'>Visit one of our agency locations or contact us today</h2>
                    <h3 className='font-bold mt-4 text-[1.2em]'>Head Office</h3>
                    <div className="contact-details mt-5">
                        <div className="flex gap-5 items-center">
                            <img src={mapIcon} alt="" srcset="" />
                            <h3 className='text-[1.2em] text-[grey]'>GoldschmidtstraBe 13,04103 leipzig</h3>
                        </div>
                        <div className="flex gap-5 items-center mt-4">
                            <img src={mailIcon} alt="" srcset="" />
                            <h3 className='text-[1.2em] text-[grey]'>yakcorps@gmail.com</h3>
                        </div>
                        <div className="flex gap-5 items-center mt-4">
                            <img src={mingcuteIcon} alt="" srcset="" />
                            <h3 className='text-[1.2em] text-[grey]'>Monday to Saturday, 9:00am to 16:00 pm</h3>
                        </div>
                        <div className="flex gap-5 items-center mt-4">
                            <img src={phoneIcon} alt="" srcset="" />
                            <h3 className='text-[1.2em] text-[grey]'>+977 987654322 , +01 123453</h3>
                        </div>
                    </div>
                </div>
                <div className="item w-[50%]">
                    <img src={map} alt="maperr" className='h-[90%]' />
                </div>
            </div>

            <div className="message px-[140px] mt-24">
                <h2 className='text-[grey] text-[1.2em]'>LEAVE A MESSAGE</h2>

                <div className="flex justify-between">
                    <div className="item w-[50%]">
                        <h2 className='text-[2.6em] font-bold text-[#252362] mt-4'>We love to hear from you</h2>
                        <div className="input-field flex flex-col gap-10 mt-10">
                            <input type="text" id='name' placeholder='Your Name' className='border-2 p-3' />
                            <input type="email" id='email' placeholder='E - mail' className='border-2 p-3' />
                            <input type="text" id='subject' placeholder='Subject' className='border-2 p-3' />
                            <textarea name="" id="" cols="30" rows="10" placeholder='Your message' className='border-2 p-3' />
                        </div>
                    </div>
                    <hr />
                    <div className="item w-[30%]">
                        <div className="contact-details mt-10 flex flex-col gap-8">
                            <div className="flex gap-7 items-center">
                                <img src={user1} alt="" srcset="" className="rounded-full" />
                                <div className="flex flex-col">
                                    <h3 className='text-[1.3em] font-bold'>John Doe</h3>
                                    <h5 className='text-[grey]'>Marketing manager</h5>
                                    <h5 className='text-[grey]'>Phone: +01 1`23456</h5>
                                    <h5 className='text-[grey]'>Email: sachitgh2@gmail.com</h5>
                                </div>
                            </div>
                            <hr />
                            <div className="flex gap-7 items-center mt-4">
                                <img src={user2} alt="" srcset="" className="rounded-full" />
                                <div className="flex flex-col">
                                    <h3 className='text-[1.3em] font-bold'>John Doe</h3>
                                    <h5 className='text-[grey]'>CEO</h5>
                                    <h5 className='text-[grey]'>Phone: +01 1`23456</h5>
                                    <h5 className='text-[grey]'>Email: sachitgh2@gmail.com</h5>
                                </div>
                            </div>
                            <hr />
                            <div className="flex gap-7 items-center mt-4">
                                <img src={user3} alt="" srcset="" className="rounded-full" />
                                <div className="flex flex-col">
                                    <h3 className='text-[1.3em] font-bold'>John Doe</h3>
                                    <h5 className='text-[grey]'>Manager</h5>
                                    <h5 className='text-[grey]'>Phone: +01 1`23456</h5>
                                    <h5 className='text-[grey]'>Email: sachitgh2@gmail.com</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full mt-10 text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] mb-24'>Send</button>
            </div>
        </>
    )
}

export default Contact
