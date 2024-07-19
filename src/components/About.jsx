import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA69] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className='font-["Neue_Montreal"] text-[3.5vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full gap-5 flex border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2 '>
            <h1 className="text-6xl">Our approach :</h1>
            <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read More
                <div className='w-2 h-2  bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
        </div>
    </div>
  )
}

export default About