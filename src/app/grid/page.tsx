import Link from 'next/link'
import Image from 'next/image'


export default function grids() {
  const products = [
    { name: 'Modern Lamp', price: '$30.00', image: '/images/shopGridDefault/gds1.png' },
    { name: 'Wooden Table', price: '$120.00', image: '/images/shopGridDefault/gds2.png' },
    { name: 'Cantilever Chair', price: '$42.00', image: '/images/shopGridDefault/gds3.png' },
    { name: 'Stylish Sofa', price: '$75.00',  image: '/images/shopGridDefault/gds4.png' },
    { name: 'Modern Lamp', price: '$30.00', image: '/images/shopGridDefault/gds5.png'},
    { name: 'Cantilever Chair', price: '$42.00', image: '/images/shopGridDefault/gds6.png' },
    { name: 'Stylish Sofa', price: '$75.00', image: '/images/shopGridDefault/gds7.png' },
    { name: 'Modern Lamp', price: '$30.00', image: '/images/shopGridDefault/gds8.png' },
    { name: 'Wooden Table', price: '$120.00', image: '/images/shopGridDefault/gds9.png' },
    { name: 'Cantilever Chair', price: '$42.00', image: '/images/shopGridDefault/gds10.png' },
    { name: 'Stylish Sofa', price: '$75.00', image: '/images/shopGridDefault/gds11.png' },
    { name: 'Wooden Table', price: '$120.00', image: '/images/shopGridDefault/gds4.png' },
  ];
  return (
    <div>

      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto  py-24 text text-center sm:text-left md:px-6 lg:px-8">
          <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">Shop Grid Default</h2>
          <Link href="/" className="px-2">Home.</Link>
          <Link href="">Pages.</Link>
          <Link href="/grid" className="text-[#FB2E86] text-[16px] font-[500] px-2">Shop Grid Default</Link>
        </div>
      </div>


      <div className="max-w-7xl mx-5 md:mx-auto flex flex-wrap items-center justify-around gap-4 my-28 bg-white">
        <div>
        <h1 className="text-[22px] font-bold text-[#151875]">
          Ecommerce Accessories & Fashion Item
        </h1>
        <p className='text-[12px] text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-sm font-medium text-gray-700">
              Per Page:
            </label>
            <input
              id="perPage"
              type="number"
              className="w-16 px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="10"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium text-gray-700">
              View:
            </label>
            <div className="flex gap-1">
              <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <span className="grid grid-cols-2 gap-1 w-4 h-4 bg-gray-200" />
              </button>
              <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <span className="w-4 h-4 bg-gray-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* product */}
      <div className='flex justify-center items-center pb-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5 mt-10 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-[270px] h-[360px] shadow-lg text-center group relative transition-transform duration-300 hover:scale-105">

              <div className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center relative z-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  width="900"
                  height="900"
                  className="w-[178px] h-[178px]"
                />
              </div>
              <div className="relative z-10 transition-colors duration-300">
                <h3 className="text-[#FB2E86] text-[18px] font-[lato] font-[700] py-3 group-hover:text-white">
                  {product.name}
                </h3>
                <div className="flex justify-center items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#05E6B7] rounded-[10px]"></div>
                  <div className="w-[10px] h-[10px] bg-[#F701A8] rounded-[10px]"></div>
                  <div className="w-[10px] h-[10px] bg-[#00009D] rounded-[10px]"></div>
                </div>
                <p className="text-[#151875] text-[14px] font-[400] group-hover:text-white">
                  {product.price}
                </p>
              </div>
              <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-6 py-2  text-white text-[14px] font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                View Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
