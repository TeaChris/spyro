'use client'

import Image from 'next/image'
import moves1 from '../images/moves1.png'
import moves2 from '../images/moves2.png'
import moves3 from '../images/moves3.png'
import moves4 from '../images/moves4.png'

export default function Moves() {
  return (
    <section className="w-sm md:w-md lg:w-lg mx-auto h-fit py-8">
      <div className="flex flex-col items-center gap-8">
        <h4 className="text-3xl lg:text-4xl capitalize">find what moves you</h4>
        <div className="h-80 p-4 flex items-end gap-8">
          <div className="w-60 lg:w-80 h-72 flex flex-col gap-0 items-start">
            <div className="w-60 lg:w-80 h-52 rounded-tl-[3rem] bg-cover shadow-inner shadow-colorOrange flex justify-end items-end">
              <Image src={moves1} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-full h-fit">
              <div className="w-full h-[80%] grid place-items-center">
                <p className="text-xs lg:text-sm">
                  Expect a heart-pumping workout that will leave you feeling
                  energized and accomplished. Our supportive community of
                  like-minded individuals.
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="w-36 h-72 rounded-tr-[3rem] lg:rounded-tr-none lg:rounded-tl-[3rem] bg-cover shadow-inner shadow-black flex justify-end items-end">
            <Image src={moves2} alt="" layout="fill" objectFit="cover" />
          </div>

          {/* 3 */}
          <div className="hidden lg:flex justify-end items-end w-36 h-72 rounded-tl-[3rem] bg-contain shadow-inner shadow-black">
            <Image src={moves3} alt="" layout="fill" objectFit="contain" />
          </div>

          {/* 4 */}
          <div className="hidden lg:flex justify-end items-end w-36 h-72 rounded-tr-[3rem] bg-cover shadow-inner shadow-black">
            <Image src={moves4} alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
