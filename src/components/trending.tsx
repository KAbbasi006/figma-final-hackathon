




// import React from 'react';
// import Image from 'next/image';

// export default function Trending() {
//     const products = [
//         {
//             id: 1,
//             image: "/images/trending/chair7.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 2,
//             image: "/images/trending/chair6.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 3,
//             image: "/images/trending/chair9.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 4,
//             image: "/images/trending/chair8.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         }
//     ];

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//             {/* Trending Products Section */}
//             <h2 className="text-[24px] md:text-[34px] lg:text-[44px] mb-10 text-center text-[#1A0B5B] font-bold">Trending Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {/* Product Card */}
//                 {products.map((product) => (
//                     <div key={product.id} className="shadow-md p-4 text-center">
//                         <div className="mx-auto h-48 w-auto py-5 bg-[#F5F6F8] relative">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 layout="fill"
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <h3 className="text-[16px] font-bold mt-4 text-[#151875] font-[lato]">{product.name}</h3>
//                         <div className="mt-2">
//                             <span className="text-[#151875] text-[14px]">{product.price}</span>
//                             <span className="text-gray-400 line-through text-[12px] ml-2">{product.originalPrice}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Single Row with Discount and Executive Chair Sections */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//                 {/* Discount Card 1 */}
//                 <div className="bg-[#FFF6FB] rounded-lg p-6 flex items-center justify-between">
//                     <div className='text-[#151875]'>
//                         <h3 className="text-[26px] font-semibold">23% off in all products</h3>
//                         <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16] hover:underline mt-2 block">
//                             Shop Now
//                         </a>
//                     </div>
//                     <div className="h-20 w-auto relative">
//                         <Image
//                             src="/images/trending/discount1.png"
//                             alt="Discount"
//                             layout="fill"
//                             objectFit="contain"
//                         />
//                     </div>
//                 </div>
//                 {/* Discount Card 2 */}
//                 <div className="bg-[#EEEFFB] rounded-lg p-6 flex items-center justify-between">
//                     <div className='text-[#151875]'>
//                         <h3 className="text-[26px] font-semibold">23% off in all products</h3>
//                         <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16] hover:underline mt-2 block">
//                             View Collection
//                         </a>
//                     </div>
//                     <div className="h-20 w-auto relative">
//                         <Image
//                             src="/images/trending/discount2.png"
//                             alt="Discount"
//                             layout="fill"
//                             objectFit="contain"
//                         />
//                     </div>
//                 </div>
//                 {/* Executive Chair Section */}
//                 <div className="bg-white flex flex-col gap-2 items-center shadow-md">
//                     {/* 1  */}
//                     <div className='flex items-center gap-10'>
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc1.png"
//                                 alt="Executive Chair"
//                                 layout="fill"
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <div className='text-[#151875]'>
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>

//                     {/* 2  */}
//                     <div className='flex items-center gap-10 justify-end'>
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc2.png"
//                                 alt="Executive Chair"
//                                 layout="fill"
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <div className='text-[#151875]'>
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>

//                     {/* 3  */}
//                     <div className='flex items-center gap-10'>
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc3.png"
//                                 alt="Executive Chair"
//                                 layout="fill"
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <div className='text-[#151875]'>
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }







// import React from 'react';
// import Image from 'next/image';

// export default function Trending() {
//     const products = [
//         {
//             id: 1,
//             image: "/images/trending/chair7.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 2,
//             image: "/images/trending/chair6.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 3,
//             image: "/images/trending/chair9.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 4,
//             image: "/images/trending/chair8.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//     ];

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//             <h2 className="text-[24px] md:text-[34px] lg:text-[44px] mb-10 text-center text-[#1A0B5B] font-bold">Trending Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div key={product.id} className="shadow-md p-4 text-center">
//                         <div className="mx-auto h-48 w-auto py-5 bg-[#F5F6F8] relative">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 layout="fill"
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <h3 className="text-[16px] font-bold mt-4 text-[#151875] font-[lato]">{product.name}</h3>
//                         <div className="mt-2">
//                             <span className="text-[#151875] text-[14px]">{product.price}</span>
//                             <span className="text-gray-400 line-through text-[12px] ml-2">{product.originalPrice}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//                 <div className="bg-[#FFF6FB] rounded-lg p-6 flex items-center justify-between">
//                     <div className="text-[#151875]">
//                         <h3 className="text-[26px] font-semibold">23% off in all products</h3>
//                         <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16] hover:underline mt-2 block">
//                             Shop Now
//                         </a>
//                     </div>
//                     <div className="h-20 w-auto relative">
//                         <Image
//                             src="/images/trending/discount1.png"
//                             alt="Discount"
//                             layout="fill"
//                                  objectFit="contain"
//                         />
//                     </div>
//                 </div>
//                 <div className="bg-[#EEEFFB] rounded-lg p-6 flex items-center justify-between">
//                     <div className="text-[#151875]">
//                         <h3 className="text-[26px] font-semibold">23% off in all products</h3>
//                         <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16] hover:underline mt-2 block">
//                             View Collection
//                         </a>
//                     </div>
//                     <div className="h-20 w-auto relative">
//                         <Image
//                             src="/images/trending/discount2.png"
//                             alt="Discount"
//                             fill
//                             style={{ objectFit: 'contain' }}
//                         />
//                     </div>
//                 </div>
//                 <div className="bg-white flex flex-col gap-2 items-center shadow-md">
//                     <div className="flex items-center gap-10">
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc1.png"
//                                 alt="Executive Chair"
//                                 fill
//                                 style={{ objectFit: 'contain' }}
//                             />
//                         </div>
//                         <div className="text-[#151875]">
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-10 justify-end">
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc2.png"
//                                 alt="Executive Chair"
//                                 fill
//                                 style={{ objectFit: 'contain' }}
//                             />
//                         </div>
//                         <div className="text-[#151875]">
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-10">
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc3.png"
//                                 alt="Executive Chair"
//                                 fill
//                                 style={{ objectFit: 'contain' }}
//                             />
//                         </div>
//                         <div className="text-[#151875]">
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




















// import React from 'react';
// import Image from 'next/image';

// export default function Trending() {
//     const products = [
//         {
//             id: 1,
//             image: "/images/trending/chair7.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 2,
//             image: "/images/trending/chair6.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 3,
//             image: "/images/trending/chair9.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 4,
//             image: "/images/trending/chair8.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//     ];

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//             <h2 className="text-[24px] md:text-[34px] lg:text-[44px] mb-10 text-center text-[#1A0B5B] font-bold">Trending Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div key={product.id} className="shadow-md p-4 text-center">
//                         <div className="mx-auto h-48 w-auto py-5 bg-[#F5F6F8] relative">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 width={250}
//                                 height={250}
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <h3 className="text-[16px] font-bold mt-4 text-[#151875] font-[lato]">{product.name}</h3>
//                         <div className="mt-2">
//                             <span className="text-[#151875] text-[14px]">{product.price}</span>
//                             <span className="text-gray-400 line-through text-[12px] ml-2">{product.originalPrice}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//                 <div className="bg-[#FFF6FB] rounded-lg p-6 flex items-center justify-between">
//                     <div className="text-[#151875]">
//                         <h3 className="text-[26px] font-semibold">23% off in all products</h3>
//                         <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16] hover:underline mt-2 block">
//                             Shop Now
//                         </a>
//                     </div>
//                     <div className="h-20 w-auto relative">
//                         <Image
//                             src="/images/trending/discount1.png"
//                             alt="Discount"
//                             width={100}
//                             height={100}
//                             objectFit="contain"
//                         />
//                     </div>
//                 </div>
//                 <div className="bg-[#EEEFFB] rounded-lg p-6 flex items-center justify-between">
//                     <div className="text-[#151875]">
//                         <h3 className="text-[26px] font-semibold">23% off in all products</h3>
//                         <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16] hover:underline mt-2 block">
//                             View Collection
//                         </a>
//                     </div>
//                     <div className="h-20 w-auto relative">
//                         <Image
//                             src="/images/trending/discount2.png"
//                             alt="Discount"
//                             width={100}
//                             height={100}
//                             objectFit="contain"
//                         />
//                     </div>
//                 </div>
//                 <div className="bg-white flex flex-col gap-2 items-center shadow-md">
//                     <div className="flex items-center gap-10">
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc1.png"
//                                 alt="Executive Chair"
//                                 width={80}
//                                 height={80}
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <div className="text-[#151875]">
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-10 justify-end">
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc2.png"
//                                 alt="Executive Chair"
//                                 width={80}
//                                 height={80}
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <div className="text-[#151875]">
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-10">
//                         <div className="h-20 w-auto relative bg-[#F5F6F8]">
//                             <Image
//                                 src="/images/trending/esc3.png"
//                                 alt="Executive Chair"
//                                 width={80}
//                                 height={80}
//                                 objectFit="contain"
//                             />
//                         </div>
//                         <div className="text-[#151875]">
//                             <h4 className="text-lg font-medium">Executive Seat Chair</h4>
//                             <span className="line-through text-sm">$32.00</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }















// import React from 'react';
// import Image from 'next/image';

// export default function Trending() {
//     const products = [
//         {
//             id: 1,
//             image: "/images/trending/chair7.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 2,
//             image: "/images/trending/chair6.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 3,
//             image: "/images/trending/chair9.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//         {
//             id: 4,
//             image: "/images/trending/chair8.png",
//             name: "Cantilever Chair",
//             price: "$26.00",
//             originalPrice: "$42.00",
//         },
//     ];

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//             <h2 className="text-[24px] md:text-[34px] lg:text-[44px] mb-10 text-center text-[#1A0B5B] font-bold">
//                 Trending Products
//             </h2>
//             {/* Product Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div key={product.id} className="shadow-md p-4 text-center">
//                         <div className="h-48 w-full bg-[#F5F6F8] relative overflow-hidden flex justify-center items-center">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 width={250}
//                                 height={250}
//                                 className="object-contain w-auto h-full"
//                             />
//                         </div>
//                         <h3 className="text-[16px] font-bold mt-4 text-[#151875] font-[lato]">
//                             {product.name}
//                         </h3>
//                         <div className="mt-2">
//                             <span className="text-[#151875] text-[14px]">{product.price}</span>
//                             <span className="text-gray-400 line-through text-[12px] ml-2">
//                                 {product.originalPrice}
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }









import React from 'react';
import Image from 'next/image';

export default function Trending() {
    const products = [
        {
            id: 1,
            image: "/images/trending/chair7.png",
            name: "Cantilever Chair",
            price: "$26.00",
            originalPrice: "$42.00",
        },
        {
            id: 2,
            image: "/images/trending/chair6.png",
            name: "Cantilever Chair",
            price: "$26.00",
            originalPrice: "$42.00",
        },
        {
            id: 3,
            image: "/images/trending/chair9.png",
            name: "Cantilever Chair",
            price: "$26.00",
            originalPrice: "$42.00",
        },
        {
            id: 4,
            image: "/images/trending/chair8.png",
            name: "Cantilever Chair",
            price: "$26.00",
            originalPrice: "$42.00",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Section Heading */}
            <h2 className="text-[24px] md:text-[34px] lg:text-[44px] mb-10 text-center text-[#1A0B5B] font-bold">
                Trending Products
            </h2>

            {/* Trending Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="shadow-md p-4 text-center">
                        <div className="relative h-48 w-full py-5 bg-[#F5F6F8] overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-[16px] font-bold mt-4 text-[#151875] font-[lato]">{product.name}</h3>
                        <div className="mt-2">
                            <span className="text-[#151875] text-[14px]">{product.price}</span>
                            <span className="text-gray-400 line-through text-[12px] ml-2">{product.originalPrice}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Discount Banners */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* First Discount Card */}
                <div className="bg-[#FFF6FB] rounded-lg p-6 flex items-center justify-between">
                    <div className="text-[#151875]">
                        <h3 className="text-[26px] font-semibold">23% off in all products</h3>
                        <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16px] hover:underline mt-2 block">
                            Shop Now
                        </a>
                    </div>
                    <div className="relative h-20 w-20">
                        <Image
                            src="/images/trending/discount1.png"
                            alt="Discount"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Second Discount Card */}
                <div className="bg-[#EEEFFB] rounded-lg p-6 flex items-center justify-between">
                    <div className="text-[#151875]">
                        <h3 className="text-[26px] font-semibold">23% off in all products</h3>
                        <a href="#" className="hover:text-[#FB2E86] font-[lato] text-[16px] hover:underline mt-2 block">
                            View Collection
                        </a>
                    </div>
                    <div className="relative h-20 w-20">
                        <Image
                            src="/images/trending/discount2.png"
                            alt="Discount"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Executive Chair Grid */}
                <div className="bg-white flex flex-col gap-2 items-center shadow-md p-4">
                    <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 bg-[#F5F6F8]">
                            <Image
                                src="/images/trending/esc1.png"
                                alt="Executive Chair"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-[#151875]">
                            <h4 className="text-lg font-medium">Executive Seat Chair</h4>
                            <span className="line-through text-sm">$32.00</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 bg-[#F5F6F8]">
                            <Image
                                src="/images/trending/esc2.png"
                                alt="Executive Chair"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-[#151875]">
                            <h4 className="text-lg font-medium">Executive Seat Chair</h4>
                            <span className="line-through text-sm">$32.00</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 bg-[#F5F6F8]">
                            <Image
                                src="/images/trending/esc3.png"
                                alt="Executive Chair"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-[#151875]">
                            <h4 className="text-lg font-medium">Executive Seat Chair</h4>
                            <span className="line-through text-sm">$32.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
