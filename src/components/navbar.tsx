import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { ChevronDown, MenuIcon, SearchIcon } from 'lucide-react'
import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet"
  

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between sm:gap-16  max-w-7xl  mx-auto p-2'>
            {/* left side (Logo and Navigation links) */}
            <div className='md:flex justify-center hidden gap-8 md:gap-16'>
                <div >
                    <h3 className='text-[34px] font-bold '>Hekto</h3>
                </div>
                <div className='flex justify-between items-center gap-4 md:gap-8 text-[12px] md:text-[16px]'>
                    <div className='flex items-center hover:text-[#FB2E86]'><Link href='#'>Home</Link><ChevronDown  className="w-4 h-4" /></div>
                    <Link href='/pages' className='hover:text-[#FB2E86]'>Pages</Link>
                    <Link href='/products' className='hover:text-[#FB2E86]'>Products</Link>
                    <Link href='/blog' className='hover:text-[#FB2E86]'>Blog</Link>
                    <Link href='/shop' className='hover:text-[#FB2E86]'>Shop</Link>
                    <Link href='/contact' className='hover:text-[#FB2E86]'>Contact</Link>
                    <Link href='/faq' className='hover:text-[#FB2E86]'>FAQ</Link>
                </div>
            </div>
            {/* Right side (Search bar) */}
            <div className='hidden md:flex w-[190px]  md:w-[280px] md:h-[40px]  items-center'>
                <Input className='w-[180px] md:w-[270px] h-[40px] border-gray rounded-l-md'/>
                <div className="bg-[#FB2E86] text-white w-10 h-10 flex items-center justify-center">
                    <SearchIcon className="w-5 h-5" />
                </div>
            </div>




            <Sheet>
  <SheetTrigger className=' md:hidden'> <MenuIcon/> </SheetTrigger>
  <SheetContent className='flex flex-col mx-auto'>
    <SheetHeader>
      <SheetTitle className='text-[30px] text-white      font-semibold mb-5'>Hekto </SheetTitle>
      </SheetHeader>
      <SheetDescription className=' flex flex-col text-white gap-5 '>
                <div className='flex  items-center hover:text-[#FB2E86]'><Link href='#'>Home</Link><ChevronDown  className="w-4 h-4" /></div>
                    <Link href='/pages' className='hover:text-[#FB2E86]'>Pages</Link>
                    <Link href='/products' className='hover:text-[#FB2E86]'>Products</Link>
                    <Link href='/blog' className='hover:text-[#FB2E86]'>Blog</Link>
                    <Link href='/shop' className='hover:text-[#FB2E86]'>Shop</Link>
                    <Link href='/contact' className='hover:text-[#FB2E86]'>Contact</Link>
                    <Link href='/faq' className='hover:text-[#FB2E86]'>FAQ</Link>
      </SheetDescription>
    
  </SheetContent>
</Sheet>

        </nav>
    )
}

export default Navbar