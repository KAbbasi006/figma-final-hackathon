import React from 'react'
import Image from 'next/image'

export default function Shopex() {
  return (
    <div className="py-10 md:px-20 lg:px-28 xl:px-40">
    <h2 className="text-[24px] md:text-[34px] lg:text-[44px] text-center text-[#1A0B5B] font-bold">
        What Shopex Offer!
    </h2>
    <div className='flex justify-around items-center flex-wrap mt-10'>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/2.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/3.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/4.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/1.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
