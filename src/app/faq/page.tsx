import BrandLogos from "@/components/brands";
import Link from "next/link";
import React from "react";

const FAQPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">

            {/* FAQ Section */}
            <div className="w-full h-[286px] bg-[#F6F5FF]">
                <div className="max-w-7xl mx-auto my-24 text-center sm:text-left md:px-6 lg:px-8">
                    <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">
                        FAQ
                    </h2>
                    <Link href="/" className="px-2">
                        Home.
                    </Link>
                    <Link href="">Pages.</Link>
                    <Link href="/faq" className="text-[#FB2E86] text-[16px] font-[500] px-2">
                        FAQ
                    </Link>
                </div>
            </div>

            {/* Content */}
            <main className="flex flex-col items-center py-12 px-4 w-full max-w-7xl">
                {/* General Info & Form */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-8">
                    {/* General Information */}
                    <div className="w-full md:w-1/2 mx-0 sm:mx-4 px-4 sm:px-6 md:px-12 mt-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D3178] mb-6 sm:mb-8 md:mb-14">
                            General Information
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item}>
                                    <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[19px] py-4 text-[#1D3178]">
                                        Eu dictumst cum at sed euismood condimentum?
                                    </h3>
                                    <p className="text-[#A1ABCC] text-sm sm:text-base py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ask a Question Form */}
                    <div className="w-full md:w-1/2 bg-[#F8F8FD] mx-0 sm:mx-4 px-4 sm:px-6 md:px-10 mt-8">
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#1D3178] mt-6 sm:mt-8 md:mt-16">
                            Ask a Question
                        </h2>
                        <form className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 sm:p-3 border rounded focus:outline-purple-600"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-2 sm:p-3 border rounded focus:outline-purple-600"
                            />
                            <textarea
                                placeholder="Type Your Message"
                                rows={4}
                                className="w-full p-2 sm:p-3 border rounded focus:outline-purple-600"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-3 rounded-lg bg-[#FB2E86] text-white py-2 hover:bg-purple-700"
                            >
                                Send Mail
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <BrandLogos />
        </div>
    );
};

export default FAQPage;
