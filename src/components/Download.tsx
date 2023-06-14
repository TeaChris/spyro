import Image from 'next/image'
import mobile from '../images/mobile.png'
import app from '../images/app.png'
import play from '../images/play.png'

export default function Download() {
  return (
    <section className="w-full h-fit lg:h-[30rem] py-8 bg-colorOrange mt-16">
      <div className="w-sm mx-auto h-fit lg:h-full md:w-md lg:w-lg flex flex-col items-center gap-12 lg:flex lg:flex-row">
        {/* left */}
        <div className="w-full lg:w-1/2 h-fit flex flex-col items-start gap-5">
          <h3 className="first-letter:capitalize text-4xl lg:text-5xl leading-normal lg:leading-normal">
            download the most loved fitness app
          </h3>

          <p className="text-lg font-bold">
            Start your fitness journey with us. Join the cult!
          </p>

          {/* image */}
          <div className="w-full flex items-center justify-between">
            <Image src={play} alt="" className="" />
            <Image src={app} alt="" className="" />
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2">
          <Image src={mobile} alt="" className="" />
        </div>
      </div>
    </section>
  )
}
