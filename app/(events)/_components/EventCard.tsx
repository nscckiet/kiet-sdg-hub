import Image, { StaticImageData } from "next/image"

type params = {
    name: String,
    image: StaticImageData
}

const EventCard = ({name, image}:params) => {
  return (
    <div  className="flex flex-col pt-[236px] drop-shadow-xl shadow-md  rounded-3xl w-[335px] h-[457px]" >
    <Image src={image} fill alt="iamge"/>
    <div className="bg-white absolute z-10 w-full rounded-3xl border border-fontMutedColor p-9 font-medium text-2xl h-[221px] ">{name}</div>
    </div>
  )
}

export default EventCard