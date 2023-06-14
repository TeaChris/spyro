'use client'

import { useState } from 'react'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { Faqs, faqs } from '../../data'

type FaqItem = Faqs & { isOpen: boolean }

export default function Faq() {
  const [faqItems, setFaqItems] = useState<FaqItem[]>(
    faqs.map((item) => ({ ...item, isOpen: false }))
  )

  const toggleAnswer = (id: number) => {
    setFaqItems((prevFaqItems) =>
      prevFaqItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isOpen: !item.isOpen,
          }
        }
        return item
      })
    )
  }

  return (
    <section className="w-full h-fit py-8 mt-4">
      <div className="w-sm mx-auto h-fit md:w-md lg:w-lg flex-col items-start gap-8">
        {faqItems.map((item: FaqItem) => {
          const { id, question, answer, isOpen } = item
          return (
            <div key={id} className="w-full h-fit flex flex-col items-start">
              <div className="w-full flex items-center justify-between mt-5">
                <h6 className="">{question}</h6>
                <button
                  className="w-fit h-fit p-2 bg-transparent"
                  onClick={() => toggleAnswer(id)}
                >
                  {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </div>
              <div className="w-full h-1 bg-gray-800"></div>
              {isOpen && (
                <div className="w-full h-fit p-4 bg-orange-800 skew-x-6 transition ease-in duration-300">
                  <p className="opacity-100">{answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
