import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#EEEFFB] py-10 px-5 mx-auto md:px-20 lg:px-28 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-6 lg:px-8  max-w-7xl mx-auto py-10">
        {/* Logo and Newsletter */}
        <div className="flex flex-col">
          <h2 className="text-[24px] font-[Josefin Sans] font-bold text-[#151875]">Hekto</h2>
          <div className="flex mt-5 font-[lato]">
            <input
              type="email"
              placeholder="Enter Email Address"
              className=" border-[#C2C5E1] rounded-lg px-4 py-2 text-sm w-full" />
            <button className="bg-[#FB2E86] text-white rounded-lg px-6 py-2 text-sm font-[lato]">
              Sign Up
            </button>
          </div>
          <p className="text-[#8A8FB9] text-sm mt-5">
            Contact Info<br />17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-[18px] font-bold text-[#151875]">Categories</h3>
          <ul className="text-[#8A8FB9] mt-5 space-y-2">
            <li className="hover:text-[#FB2E86] pt-1">Laptops & Computers</li>
            <li className="hover:text-[#FB2E86] pt-1">Cameras & Photography</li>
            <li className="hover:text-[#FB2E86] pt-1">Smart Phones & Tablets</li>
            <li className="hover:text-[#FB2E86] pt-1">Video Games & Consoles</li>
            <li className="hover:text-[#FB2E86] pt-1">Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-[18px] font-bold text-[#151875]">Customer Care</h3>
          <ul className="text-[#8A8FB9] mt-5 space-y-2">
            <li className="hover:text-[#FB2E86] pt-1">My Account</li>
            <li className="hover:text-[#FB2E86] pt-1">Discount</li>
            <li className="hover:text-[#FB2E86] pt-1">Returns</li>
            <li className="hover:text-[#FB2E86] pt-1">Orders History</li>
            <li className="hover:text-[#FB2E86] pt-1">Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-[18px] font-bold text-[#151875]">Pages</h3>
          <ul className="text-[#8A8FB9] mt-5 space-y-2">
            <li className="hover:text-[#FB2E86] pt-1">Blog</li>
            <li className="hover:text-[#FB2E86] pt-1">Browse the Shop</li>
            <li className="hover:text-[#FB2E86] pt-1">Category</li>
            <li className="hover:text-[#FB2E86] pt-1">Pre-Built Pages</li>
            <li className="hover:text-[#FB2E86] pt-1">Visual Composer Elements</li>
            <li className="hover:text-[#FB2E86] pt-1">WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

