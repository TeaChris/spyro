import Image from 'next/image'

import { instructors, Instructors } from '../../data'

export default function Instructors() {
  return (
    <section className="w-full h-fit lg:h-[35rem] py-8 mt-20">
      <div className="w-sm md:w-md lg:w-lg mx-auto h-full flex flex-col items-center gap-8 bg-transparent">
        <h4 className="text-3xl lg:text-4xl capitalize">Instructors</h4>
        <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 items-center gap-4">
          {instructors.map((instructor: Instructors) => {
            const { image, name, stack } = instructor
            return (
              <div key={name} className="flex flex-col items-center gap-1">
                <Image
                  src={image}
                  alt={name}
                  className="w-40 h-40 object-cover md:w-full md:h-full"
                />
                <h6 className="capitalize">{name}</h6>
                <span className="capitalize">{stack}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* background */}
      <div className="w-60 h-16 bg-colorOrangeDark opacity-10 bottom-32 left-0 absolute -z-10"></div>
      <div className="w-[25rem] lg:w-[40rem] h-16 bg-colorOrangeDark opacity-10 bottom-4 left-0 absolute -z-10"></div>
    </section>
  )
}
