import Image from "next/image"
import Heading from "./Heading"
const UpcomingEvent = () => {
  return (
    <div id="upcomingEvents" >
        <div className="mb-[200px]">
      <Heading heading="Our Upcoming Events"/>
      </div>

    <div className=" flex flex-col justify-center items-center border  pt-[360px] ">
        <Image
          src={"./event-image-sample.svg"}
          alt="event-image-sample"
          className="mt-[160px]"
          fill
          />
        <div className=" p-8 w-[958px] h-[220px] rounded-xl  shadow-[0px_0px_20px_10px_#00000024] absolute bg-white text-2xl font-bold text-fontPrimary">
          Event Name
        </div>
      </div>
          </div>
  )
}

export default UpcomingEvent