import React from 'react'
import {assets} from '../assets/assets.js'
const Hero=()=>{
  return(
    <div className='flex flex-col border border-gray-400 sm:flex-row'>
        {/* Hero Left Side*/}
        <div className='w-full sm:w-1/2 items-center flex justify-center py-10 sm:py-0'>
            <div className='text: #414141'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg: [#414141]'></p>
                    <p className='font-semibold text-sm md:text-base'>Our BestSellers</p>

                </div>
                <h1 class="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
                <div class="flex items-center gap-2">
                    <p class="font-semibold text-sm md:text-base">Shop Now</p>
                    <p class="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
        </div>
    </div>
    {/*Hero right side*/}
    <img class="w-full sm:w-1/2" src={assets.hero_img}></img>
    </div>

  )
}

export default Hero;