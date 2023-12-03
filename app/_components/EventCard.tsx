import Image, { StaticImageData } from "next/image"

type params = {
    name: String,
    image: StaticImageData
}

const EventCard = ({name, image}:params) => {
  return (
    <div  className=" cursor-pointer flex flex-col pt-[236px] drop-shadow-xl shadow-md  rounded-3xl lg:w-[280px] xl:w-[335px] md:w-[280px]  w-[280px] lg:h-[457px] h-[400px]" >
    <Image src={image} fill alt="image" />
    <div className="bg-white absolute z-10 w-full rounded-3xl border border-fontMutedColor p-9 font-medium lg:text-2xl text-xl h-[221px] ">{name}</div>
    </div>
  )
}

export default EventCard