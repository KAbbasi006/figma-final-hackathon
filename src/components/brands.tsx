import React from 'react'
import Image from 'next/image'

export default function BrandLogos() {
  return (
      <div className='mb-16 text-center'>
      <Image
        src="/images/brands/brandlogos.png"
        alt="footer"
        width="990"
        height="990"
        className='w-[800px] h-[90px] object-fit m-auto'
        />
    </div>
  )
}
