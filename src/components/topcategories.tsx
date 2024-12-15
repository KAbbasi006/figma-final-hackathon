import React from 'react';
import Image from 'next/image';

export default function TopCat() {
    // Array of product data
    const products = [
        { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair11.png' },
        { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair4.png' },
        { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair7.png' },
        { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair11.png' },
    ];

    return (
        <div>
            <div className="pt-10 px-10 md:px-20 lg:px-28 xl:px-40">
                <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-[700]">
                    Top Categories
                </h2>
                <div className="flex justify-around items-center flex-wrap gap-5 mt-10 md:mt-20">
                    {products.map((product, index) => (
                        <div
                            key={index}
                        >
                            <div className="w-[270px] h-[270px] bg-[#F6F7FB] flex items-center justify-center relative z-10 rounded-full hover:border-b-[10px] hover:border-l-[10px] hover:border-[#32208a8b]  ">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width="900"
                                    height="900"
                                    className="w-[178px] h-[178px] rounded-full"
                                />
                            </div>
                            <div className="relative z-10 transition-colors duration-300 text-center">
                                <h3 className="text-[#151875] text-[20px]  py-3 group-hover:text-white">
                                    {product.name}
                                </h3>
                                <p className="text-[#151875] text-[16px] font-[400] group-hover:text-white">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='pt-20'>
                <Image
                    src="/images/top/banner.png"
                    alt="footer"
                    width="990"
                    height="990"
                    className='w-full h-[400px] object-fit'
                />
                <div className='flex justify-center items-center flex-col relative bottom-[250px] md:w-[574px] h-auto m-auto'>
                    <h4 className='text-[#151875] text-center text-[20px] md:text-[35px] font-[700]'>Get Leatest Update By Subscribe 0ur Newslater</h4>
                    <button className="w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
}
