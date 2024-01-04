// import React from 'react'
import product from "../../assets/product.png";
import beer from "../../assets/beer.png";
import beer_2 from "../../assets/beerShadow.png";
import icon1 from "../../assets/Vector1.svg";
import icon2 from "../../assets/Vector2.svg";
import icon3 from "../../assets/Vector3.svg";
import icon4 from "../../assets/Vector4.svg";
import icon5 from "../../assets/Vector5.svg";
import icon6 from "../../assets/Vector6.svg";
import party1 from "../../assets/party1.png";
import party2 from "../../assets/party2.png";
import moon from "../../assets/moon.svg";
import logo from "../../assets/logoYak.svg";

const Product = () => {
  return (
    <>
      <div className="about-bg brightness-75 h-[40vh] w-full" style={{ backgroundImage: `url(${product})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>

      </div>

      <div className="flex gap-20 px-[140px] items-center justify-center">
        <div className="image">
          <img src={beer} alt="" className='h-[800px] ' />
        </div>
        <div className="details">
          <strong className='text-[3em] text-[#252362] font-bold'>Yak ‘N’ Nak Beer </strong>
          <p className='font-bold text-[#252362] text-[1.3em]'>Crafted. Sippable. Enchanting</p>
          <button className='bg-[#e6bf55] py-5 px-20 font-bold rounded-full mt-10 text-[1.2em]  transition-all duration-300 hover:bg-[#272361] text-[#272361] hover:text-[#e6bf55] '>Get beer</button>
        </div>
      </div>

      <div className="divider bg-[#252362] flex justify-center items-center h-full w-full px-[140px] py-16">
        <div className="icon-container w-[50%]">
          <div className="item gap-20 flex">
            <div className="one">
              <img src={icon1} alt="" className="h-12 m-auto" />
              <h2 className="font-bold text-white mt-3">Unique Yeast</h2>
            </div>
            <div className="two">
              <img src={icon2} alt="" className="h-12 m-auto" />
              <h2 className="font-bold text-white mt-3">Perennial Recipes</h2>
            </div>
            <div className="three">
              <img src={icon3} alt="" className="h-12 m-auto" />
              <h2 className="font-bold text-white mt-3">Modern Equipment</h2>
            </div>

          </div>
          <div className="item flex gap-24 mt-10">
            <div className="one">
              <img src={icon4} alt="" className="h-12 m-auto" />
              <h2 className="font-bold text-white mt-3">Selected Malts</h2>
            </div>
            <div className="two">
              <img src={icon5} alt="" className="h-12 m-auto" />
              <h2 className="font-bold text-white mt-3">Quality Hops</h2>
            </div>
            <div className="three">
              <img src={icon6} alt="" className="h-12 m-auto" />
              <h2 className="font-bold text-white mt-3">Special Water</h2>
            </div>
          </div>
        </div>
        <div className="image w-[40%]">
          <img src={beer_2} alt="" />
        </div>
      </div>

      <div className="flex mt-[-.9em] justify-center w-full">
        <img src={party1} alt="imgerr" className='w-full h-[70vh] object-cover' />
        <img src={party2} alt="imgerr" className='w-full h-[70vh] object-cover' />
      </div>

      <div className="moon-divider px-[140px] py-28 bg-[#252362]">
        <img src={moon} alt="moonImgErr" className='' />
        <div className="text flex justify-end items-center gap-2 tracking-wider mt-28">
          <p className='font-bold text-white text-[1.4em]'>♩ ♪ ♫ ♬ Moon night healing...with </p>
          <img src={logo} alt="logoImgErr" className='h-20' />
        </div>
      </div>

    </>
  )
}

export default Product
