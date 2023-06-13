export default function Moves() {
  return (
    <section className="w-sm md:w-md lg:w-lg mx-auto h-fit py-8">
      <div className="flex flex-col items-center gap-8">
        <h4 className="text-3xl lg:text-4xl capitalize">find what moves you</h4>
        <div className="flex items-end gap-8">
          <div className="w-60 lg:w-80 h-72 rounded-tl-[3rem] bg-[url('../images/moves1.png')] bg-cover shadow-inner shadow-colorOrange flex justify-end items-end">
            <div className="w-full h-28 flex items-center justify-between bg-black p-1">
              <div className="w-20">
                <h6 className="text-lg uppercase">gym</h6>
              </div>
              <div className="w-[70%] h-[80%] grid place-items-center">
                <p className="text-xs lg:text-sm">
                  Expect a heart-pumping workout that will leave you feeling
                  energized and accomplished. Our supportive community of
                  like-minded individuals.
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="w-36 h-72 rounded-tr-[3rem] lg:rounded-tl-[3rem] bg-[url('../images/moves2.png')] bg-cover shadow-inner shadow-black flex justify-end items-end"></div>

          {/* 3 */}
          <div className="hidden lg:flex justify-end items-end w-36 h-72 rounded-tl-[3rem] bg-[url('../images/moves3.png')] bg-contain shadow-inner shadow-black "></div>

          {/* 4 */}
          <div className="hidden lg:flex justify-end items-end w-36 h-72 rounded-tr-[3rem] bg-[url('../images/moves4.png')] bg-cover shadow-inner shadow-black "></div>
        </div>
      </div>
    </section>
  )
}
