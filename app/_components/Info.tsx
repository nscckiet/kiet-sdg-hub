import Image from "next/image"
import { InfoType } from "@/constants/constant"


interface InfoDirection extends InfoType{
    direction:"rtl"|"ltr"
}

const Info = ({info , image ,direction}:InfoDirection) => {
  return (
    <div className={`flex ${direction==="ltr" ? "md:flex-row-reverse flex-col-reverse": "flex-col-reverse md:flex-row" } justify-between md:mt-12 sm:mt-6 mt-4`}>
    <p className=" text-fontMutedColor max-w-[630px]   xl:leading-[40px] lg:leading-[30px] xl:text-[28px] lg:text-[20px] md:text-[16px] text-base ">{
        info
    }</p>
    <Image src={image} width={450} height={200}  className=" xl:w-auto xl:h-auto lg:w-[300px] lg:h-[200px] md:w-[200px] md:h-[150px]  w-[170px] h-[150px]"  alt="about-image"/>
  </div>
  )
}

export default Info  