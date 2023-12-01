import Image from "next/image"
import { InfoType } from "@/constants/constant"


interface InfoDirection extends InfoType{
    direction:"rtl"|"ltr"
}

const Info = ({info , image ,direction}:InfoDirection) => {
  return (
    <div className={`flex ${direction==="ltr" ? "flex-row-reverse": "" } justify-between mt-12  max-h-[280px] `}>
    <p className=" text-fontMutedColor max-w-[630px] leading-[40px] text-[28px] ">{
        info
    }</p>
    <Image src={image} width={450} height={200} className="w-auto h-auto "  alt="about-image"/>
  </div>
  )
}

export default Info