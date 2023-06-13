import Image from 'next/image'
import fit from '../images/fit.png'

export default function Fit() {
  return (
    <section className="w-full h-[35rem] py-8 relative">
      <div className="w-sm md:w-md lg:w-lg mx-auto  flex flex-col items-center gap-8">
        <h4 className="text-3xl lg:text-4xl capitalize">
          fit for your lifestyle
        </h4>
        <div className="w-full lg:w-[60%] h-fit grid place-items-center">
          <p className="text-sm text-center lg:text-lg">
            Wake up with a sunrise meditation, sweat it out with lunchtime HIIT,
            or unwind with an evening flow. You’ll find movement for every mood
            with classes sorted by time, style, and skill level.
          </p>
        </div>

        {/* image */}
        <div className="w-96 h-28 bg-colorOrange rounded-t-lg px-2 py-2 relative">
          <Image src={fit} alt="bottom-1 left-1 absolute" />
        </div>
      </div>

      {/* background */}
      <div className="w-60 h-16 bg-colorOrangeDark opacity-10 bottom-32 right-0 absolute -z-10"></div>
      <div className="w-[40rem] h-16 bg-colorOrangeDark opacity-10 bottom-4 right-0 absolute -z-10"></div>
    </section>
  )
}
