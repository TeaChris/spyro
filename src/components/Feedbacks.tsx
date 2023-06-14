'use client'

import Image from 'next/image'

import { AiOutlineStar } from 'react-icons/ai'

import { Feedbacks, feedbacks } from '../../data'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Feedbacks() {
  return (
    <section className="w-full h-fit lg:h-[35rem] py-8 mt-20">
      <div className="w-sm mx-auto h-fit lg:h-full md:w-md lg:w-lg flex flex-col items-center gap-8">
        <div>
          <h4 className="text-3xl lg:text-4xl">Client`s Feedbacks</h4>
        </div>

        {/*  */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="w-full h-fit"
        >
          {feedbacks.map((feedback: Feedbacks) => {
            const { name, words, image } = feedback
            return (
              <SwiperSlide
                key={name}
                className="w-40 lg:w-40 p-3 flex flex-col items-start gap-6 bg-black shadow-md shadow-colorOrange"
              >
                <div className="w-full h-28">
                  <p className="first-letter:capitalize text-lg">{words}</p>
                </div>

                {/* srars */}
                <div className="flex items-center gap-2">
                  <AiOutlineStar size={20} className="text-colorOrange" />
                  <AiOutlineStar size={20} className="text-colorOrange" />
                  <AiOutlineStar size={20} className="text-colorOrange" />
                  <AiOutlineStar size={20} className="text-colorOrange" />
                  <AiOutlineStar size={20} className="text-colorOrange" />
                </div>

                <div className="flex items-center w-full gap-4 mt-3">
                  <Image src={image} alt={name} className="" />
                  <h6 className="capitalize text-sm">{name}</h6>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className="hidden lg:flex items-center gap-1">
          <div className="w-1 h-3 skew-x-6 bg-colorOrange"></div>
          <div className="w-1 h-3 skew-x-6 bg-colorOrange"></div>
          <div className="w-2 h-4 skew-x-6 bg-colorOrange"></div>
          <div className="w-1 h-3 skew-x-6 bg-colorOrange"></div>
          <div className="w-1 h-3 skew-x-6 bg-colorOrange"></div>
        </div>
      </div>
    </section>
  )
}
