import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const BottomBar = () => {
    return (
        <div className="flex justify-between items-center  p-4 bg-[#E7E4F8] border-[#E3E3E3] ">
            <div className="flex  justify-between items-center gap-10 mx-auto max-w-7xl">
                <p className="text-[#8A8FB9] text-sm">
                    ©Webecy - All Rights Reserved
                </p>
                <div className="flex justify-center items-center gap-6    p">
                    <FaFacebookF className="text-[#151875] hover:text-[#FB2E86] transition" />
                    <FaTwitter className="text-[#151875] hover:text-[#FB2E86] transition" />
                    <FaInstagram className="text-[#151875] hover:text-[#FB2E86] transition" />
                </div>
            </div>
        </div>
    )
}

export default BottomBar