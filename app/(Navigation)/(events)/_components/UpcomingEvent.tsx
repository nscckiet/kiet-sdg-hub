import Image from "next/image"
import Heading from "../../../_components/Heading"
const UpcomingEvent = () => {
  return (
    <div id="upcomingEvents" className=" w-full" >
        <div className=" lg:mb-[80px] md:mb-[50px] mb-[30px]  flex justify-center items-center">
      <Heading heading="Our Upcoming Events"/>
      </div>
    <div className=" flex flex-col justify-center items-center w-full  relative ">
     <div className="min-h-[497px] w-full relative">
        <Image
          src={"./event-image-sample.svg"}
          alt="event-image-sample" 
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          /> 
          </div>
        <div className="lg:p-8 md:p-6 p-4  max-w-[968px] lg:w-full md:w-[600px]  sm:w-[420px]  w-[310px] min-h-[220px] rounded-xl shadow-[0px_0px_20px_10px_#00000024] absolute lg:bottom-[-100px] md:bottom-[-50px] bottom-[-20px] bg-white  md:text-2xl text-xl font-bold text-fontPrimary ">
          Event Name
        </div>
      </div>
          </div>
  )
}

export default UpcomingEvent