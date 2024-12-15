import Link from "next/link";
import Image from "next/image";
import Shopex from "@/components/shopex";
import BrandLogos from "@/components/brands";


export default function about() {

    return (
        <div>
             <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto  py-24 text text-center sm:text-left md:px-6 lg:px-8">
          <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">About Us</h2>
          <Link href="/" className="px-2">Home.</Link>
          <Link href="">Pages.</Link>
          <Link href="/about" className="text-[#FB2E86] text-[16px] font-[500] px-2">About Us</Link>
        </div>
      </div>
            <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 py-12 gap-8">
                {/* Image Section */}
                <div className="relative">
                    <Image
                        src="/images/about/about.png"
                        alt="Business Meeting"
                        width="900"
                        height="900"
                        className="w-full max-w-md "
                    />
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left space-y-4 max-w-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                        Know About Our Ecommerce <br /> Business, History
                    </h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
                        ultrices tristique aliquam, malesuada diam est. Malesuada sem
                        tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae
                        lobortis quis bibendum quam.
                    </p>
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                        Contact us
                    </button>
                </div>
            </div>
            <Shopex />
            <BrandLogos />
        </div>
    );
};
