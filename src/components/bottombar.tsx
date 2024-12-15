import React from 'react'
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

const BottomBar = () => {
    return (
        <div className="p-4 bg-[#E7E4F8] ">
            <div className="flex  justify-between items-center  px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
                <p className="text-[#8A8FB9] font-lato  font-semibold text-sm">
                    ©Webecy - All Rights Reserved
                </p>
                <div className="flex justify-center items-center gap-2">
                    <RiFacebookCircleFill  className="text-[#151875] hover:text-[#FB2E86] transition" />
                    <RiInstagramFill  className="text-[#151875] hover:text-[#FB2E86] transition" />
                    <AiFillTwitterCircle className="text-[#151875] hover:text-[#FB2E86] transition" />

                </div>
            </div>
        </div>
    )
}

export default BottomBar