import React from 'react';
import Image from 'next/image';
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Link from 'next/link';

const blogData = [
    {
        id: 1,
        image: '/images/blogs/blog3.png',
        author: 'SaberAli',
        date: '21 August, 2020',
        title: 'Top essential Trends in 2021',
        description: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    },
    {
        id: 2,
        image: '/images/blogs/blog2.png',
        author: 'Surfauxion',
        date: '21 August, 2020',
        title: 'Top essential Trends in 2021',
        description: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    },
    {
        id: 3,
        image: '/images/blogs/blog1.png',
        author: 'SaberAli',
        date: '21 August, 2020',
        title: 'Top essential Trends in 2021',
        description: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    },
];

export default function LatestBlog() {
    return (
        <div className="py-10 lg:px-20 xl:px-30">
            <h2 className="text-[24px] md:text-[34px] lg:text-[44px]  text-center text-[#1A0B5B] font-[700]">
                Latest Blog
            </h2>
            <div className="flex justify-center items-center my-10 gap-5 flex-wrap">
                {blogData.map((blog) => (
                    <div
                        key={blog.id}
                        className="w-[330px] h-[460px] shadow-md "
                    >
                        <Image
                            src={blog.image}
                            alt={`Blog ${blog.id}`}
                            width="900"
                            height="900"
                            className="rounded-t-lg"
                        />
                        <div className="relative left-[19px] top-5 py-3">
                            <div className="flex justify-start items-center gap-8">
                                <div className="flex justify-center items-center gap-1">
                                    <FaPenNib color="red" size="14px" />
                                    <p className='text-[14px] text-[#151875]'>{blog.author}</p>
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                    <SlCalender color="#FFA454" size="14px" />
                                    <p className='text-[14px] text-[#151875]'>{blog.date}</p>
                                </div>
                            </div>
                            <h3 className="text-[18px] text-[#151875] hover:text-[#FB2E86] font-bold py-3">
                                {blog.title}
                            </h3>
                            <p className="text-[#72718F] font-[lato] text-[16px] font-[400] pb-3">
                                {blog.description}
                            </p>
                            <p className="text-[#151875] font-[lato] hover:underline hover:text-[#FB2E86]  ">
                                <Link href='/blogPage'>Read More</Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
