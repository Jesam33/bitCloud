import React from 'react'
import Card from './Card'

const CryptoTags = () => {
  return (
    <div className='w-[90%] mt-0 md:mt-10 lg:mt-4 mx-auto rounded-[30px] p-4 sm:p-6 bg-[#F4F5F6] flex'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-2 lg:gap-6'>
        <Card
          imgSrc="/yellowCoin.png"
          percentClass="text-white font-semibold"
          percentDivClass="px-3 py-1 rounded-full bg-[#FF6838]"
          divClass="bg-white rounded-[30px] shadow-lg"
        />
        <Card
          divClass="bg-white rounded-[30px] shadow-lg"
          imgSrc="/deepBlueCoin.png"
          percentClass="text-white font-semibold"
          percentDivClass="px-3 py-1 rounded-full bg-[#58BD7D]"
        />
        <Card
          imgSrc="/blueCoin.png"
          percentClass="text-white font-semibold"
          percentDivClass="px-3 py-1 rounded-full bg-[#58BD7D]"
          divClass="bg-white rounded-[30px] shadow-lg"
        />
        <Card
          imgSrc="/blackCoin.png"
          percentClass="text-white font-semibold"
          percentDivClass="px-3 py-1 rounded-full bg-[#58BD7D]"
          divClass="bg-white md:hidden lg:flex lg:flex-col rounded-[30px] shadow-lg"
        />
      </div>
    </div>
  )
}

export default CryptoTags
