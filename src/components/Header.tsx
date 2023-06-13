import Button from './Button'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="w-full h-[40rem] lg:h-[45rem] bg-[url('../images/header.jpeg')] bg-cover">
      <Navbar />
      <div className="w-sm mx-auto md:w-md lg:w-lg mt-16 lg:mt-24 flex flex-col items-start gap-8 pt-0 lg:pt-12">
        <div className="w-full lg:w-[35rem] flex flex-col items-center lg:items-start gap-8">
          <h1 className="text-5xl lg:text-7xl font-orbitron font-bold first-letter:capitalize leading-relaxed">
            <span className="text-colorOrange">unleash</span> your inner athlete
          </h1>
        </div>

        <div className="w-full lg:w-[35rem] h-fit">
          <p className="text-lg">
            Get ready to sweat it out and achieve your fitness goals with our
            high-energy fitness classes! Our classes are designed to cater to
            all fitness levels and provide a fun and motivating environment to
            help you reach your peak performance.
          </p>
        </div>
        <div>
          <Button text="start your free trial" />
        </div>
      </div>
    </header>
  )
}
