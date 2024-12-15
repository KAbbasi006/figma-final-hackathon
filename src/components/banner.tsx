import React from 'react';
import Image from 'next/image';

export default function Banner() {
    return (
        <div className="bg-[#F2F0FF] w-full h-auto flex flex-col-reverse gap-10 lg:flex-row items-center justify-around p-8 lg:px-32 xl:px-60  lg:p-10">
            <div className="relative mt-12 lg:mt-0">
                {/* Background Circles */}
                <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full absolute -top-8 right-5 lg:right-12"></div>
                <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full"></div>

                {/* Hero Image */}
                <Image
                    src="/banner.png"
                    alt="Hero"
                    width={900}
                    height={900}
                    className="absolute top-[25px] md:top-[30px] lg:top-[50px] right-12 lg:right-20 w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full"
                />
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="text-center lg:text-left">
                    <h2 className="text-[#151875] text-[24px] md:text-[36px] xl:text-[48px] font-bold font-[Josefin Sans] mt-2">
                        Unique Features Of leatest & Trending Poducts
                    </h2>
                    <ul className="text-[14px] md:text-[16px]  text-[#ACABC3] font-[lato] mt-4 list-outside ">
                        <li><span className='text-[30px] text-[#F52B70] '>&#8226;</span> All frames constructed with hardwood solids and laminates</li><br />
                        <li><span className='text-[30px] text-[#2B2BF5]'>&#8226;</span> Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li><br />
                        <li><span className='text-[30px] text-[#2BF5CC]'>&#8226;</span> Arms, backs and seats are structurally reinforced</li><br />
                    </ul>
                    <div className='flex items-end gap-6'>
                        <button className="w-[140px] md:w-[165px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
                            Add To Cart
                        </button>
                        <div className='text-[#151875]  text-[14px]'>B&B Italian Sofa <p className='font-[lato]'>$32.00 </p></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
