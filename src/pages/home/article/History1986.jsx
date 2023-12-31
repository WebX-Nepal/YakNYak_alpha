import React from 'react'
import img1864 from "../../../assets/1864.jpg"

const History1986 = () => {
    return (
        <>
            <div className='history-container'>
                <div className="content w-[40%] p-10 m-auto relative bg-[#eee] left-24 z-10">
                    <h4 className='font-bold text-[1.5em] '>Immigrant Edward Latham buys a brewery in Carlton and founds an empire</h4>
                    <p className='text-[grey] mt-5 text-[1.2em] tracking-wider'>Latham didn't have any brewing experience but he knew a good opportunity when he saw one, so he bought the Bouverie St operation in 1864 and renamed it Carlton Brewery. For his head brewer, Latham hired Gisborne-born Alfred Terry who had the magic touch when it came to brewing palatable, bright and clear beer which preserved well. Terry's lighter colonial beers were much easier to drink in the Australian heat than the heavy European imports and soon barrels of freshly brewed Carlton Ale were being transported by Clydesdale to hotels throughout the city. </p>
                </div>

            </div>
            <div className="image flex justify-center mt-[-60px] ">
                <img src={img1864} alt="img err" className='w-' />
            </div>

        </>
    )
}

export default History1986
