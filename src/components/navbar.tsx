
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { ChevronDown, ChevronUp, MenuIcon, SearchIcon } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="flex items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full p-2">
            {/* Left Side (Logo and Navigation Links) */}
            <div className="flex items-center gap-4 md:gap-6 flex-1">
                <h3 className="text-[24px] font-bold whitespace-nowrap">Hekto</h3>
                <div className="hidden md:flex items-center gap-4 md:gap-4 lg:gap-6 text-[14px] relative">
                    {/* Home Link with Dropdown */}
                    <div
                        className="relative group flex items-center cursor-pointer hover:text-[#FB2E86]"
                        onClick={toggleDropdown}>
                        <Link href="/">Home</Link>
                        <ChevronDown className="w-4 h-4" />
                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div
                                className="absolute top-full left-0 bg-white shadow-md mt-2 rounded-lg w-40 z-50 text-gray-700"
                                onMouseLeave={() => setDropdownOpen(false)} // Close dropdown on mouse leave
                            >
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/grid">Grid Default</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/faq">FAQ</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/cart">Shopping Cart</Link>
                                    </li>
                                    {/* <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/order">Order</Link>
                                    </li> */}
                                     <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/notfound">404 Not Found</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <Link href="/pages" className="hover:text-[#FB2E86]">
                        Pages
                    </Link>
                    <Link href="/products" className="hover:text-[#FB2E86]">
                        Products
                    </Link>
                    <Link href="/blog" className="hover:text-[#FB2E86]">
                        Blog
                    </Link>
                    <Link href="/shop" className="hover:text-[#FB2E86]">
                        Shop
                    </Link>
                    <Link href="/contact" className="hover:text-[#FB2E86]">
                        Contact
                    </Link>
                </div>
            </div>

            {/* Right Side (Search Bar) */}
            <div className="hidden md:flex items-center justify-end flex-1">
                <div className="flex w-full max-w-[200px] lg:max-w-[300px] h-[40px] items-center">
                    <Input className="w-full h-full border-gray-300 rounded-l-md" />
                    <div className="bg-[#FB2E86] text-white w-10 h-full flex items-center justify-center rounded-r-md">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent className="flex flex-col mx-auto">
                    <SheetHeader>
                        <SheetTitle className="text-[30px] text-white font-semibold mb-5">Hekto</SheetTitle>
                    </SheetHeader>
                    <SheetDescription className="flex flex-col text-white gap-5">
                        {/* Dropdown for Home */}
                        <div className="flex flex-col">
                            <div
                                className="flex items-center gap-2 hover:text-[#FB2E86] cursor-pointer"
                                onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                            >
                                <span>Home</span>
                                {isMobileDropdownOpen ? (
                                    <ChevronUp className="w-4 h-4" />
                                ) : (
                                    <ChevronDown className="w-4 h-4" />
                                )}
                            </div>
                            {isMobileDropdownOpen && (
                                <div className="flex flex-col gap-2 ml-4 mt-2">
                                    <Link href="/grid" className="hover:text-[#FB2E86]">
                                        Grid Default
                                    </Link>
                                    <Link href="/faq" className="hover:text-[#FB2E86]">
                                        FAQ
                                    </Link>
                                    <Link href="/about" className="hover:text-[#FB2E86]">
                                        About
                                    </Link>
                                    <Link href="/cart" className="hover:text-[#FB2E86]">
                                        Shopping Cart
                                    </Link>
                                    {/* <Link href="/order" className="hover:text-[#FB2E86]">
                                        Order
                                    </Link> */}
                                    <Link href="/notfound" className="hover:text-[#FB2E86]">
                                       404 Not Found
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="/pages" className="hover:text-[#FB2E86]">
                            Pages
                        </Link>
                        <Link href="/products" className="hover:text-[#FB2E86]">
                            Products
                        </Link>
                        <Link href="/blog" className="hover:text-[#FB2E86]">
                            Blog
                        </Link>
                        <Link href="/shop" className="hover:text-[#FB2E86]">
                            Shop
                        </Link>
                        <Link href="/contact" className="hover:text-[#FB2E86]">
                            Contact
                        </Link>
                        <div className="flex w-full max-w-[200px] items-center">
                            <Input className="w-full h-[40px] border-gray-300 rounded-l-md" />
                            <div className="bg-[#FB2E86] text-white w-10 h-10 flex items-center justify-center">
                                <SearchIcon className="w-5 h-5" />
                            </div>
                        </div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default Navbar;
