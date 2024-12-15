import { ChevronDown, Heart, Mail, PhoneCall, ShoppingCart, User2Icon } from 'lucide-react';
import React from 'react';

const Topbar = () => {
    return (
        <div className="bg-purple-600  text-sm py-2 px-4 hidden sm:flex ">
            {/* Container for centering the layout */}
            <div className="flex-grow mx-auto text-white   px-4 md:px-6 lg:px-8  max-w-7xl ">
            {/* <div className="flex justify-center items-center  w-full max-w-7xl"> */}
                <nav className="w-full flex  justify-between items-center flex-wrap">
                    {/* Left Section */}
                    <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <p>example@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneCall className="w-4 h-4" />
                            <p>021-52147890</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center ">
                        <div className="flex items-center">
                            <p>English</p>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="flex items-center">
                            <p>USD</p>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="flex items-center">
                            <p>Login</p>
                            <User2Icon className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-1">
                            <p>Wishlist</p>
                            <Heart className="w-4 h-4" />
                        </div>
                        <div className="flex items-center">
                            <ShoppingCart className="w-4 h-4" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Topbar;
