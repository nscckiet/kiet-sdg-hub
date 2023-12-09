const Statistics = () => {
  return (
    <div className=" bg-fontSecondary xl:h-52 lg:h-52 md:h-30 rounded-2xl text-white grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 justify-center items-center gap-y-6 lg:py-16 lg:px-4 md:py-8 md:px-2 px-1 py-8">
        <div className="flex justify-center items-center flex-col">
            <p className=" xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold">75+</p>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm font-medium" >Team Members</p>
        </div>
        <div className="flex justify-center items-center flex-col">
            <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold">10+</p>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm font-medium" >Events Held</p>
        </div>
        <div className="flex justify-center items-center flex-col">
            <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold">15+</p>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm font-medium" >Goals Achieved</p>
        </div>
        <div className="flex justify-center items-center flex-col">
            <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold">5+</p>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm font-medium" >Ongoing Event</p>
        </div>
    </div>
  )
}

export default Statistics