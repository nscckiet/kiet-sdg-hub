const Statistics = () => {
  return (
    <div className=" bg-fontSecondary h-52 rounded-2xl text-white flex justify-center space-x-56 py-16  px-4">
        <div className="flex justify-center items-center flex-col">
            <p className=" text-6xl font-semibold">75+</p>
            <p className="text-xl font-medium" >Team Members</p>
        </div>
        <div className="flex justify-center items-center flex-col">
            <p className=" text-6xl font-semibold">10+</p>
            <p className="text-xl font-medium" >Events Held</p>
        </div>
        <div className="flex justify-center items-center flex-col">
            <p className=" text-6xl font-semibold">15+</p>
            <p className="text-xl font-medium" >Goals Achieved</p>
        </div>
        <div className="flex justify-center items-center flex-col">
            <p className=" text-6xl font-semibold">5+</p>
            <p className="text-xl font-medium" >Ongoing Event</p>
        </div>
    </div>
  )
}

export default Statistics