import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { SDGGridType } from "@/constants/constant"
import Image from "next/image"


const SDGDialog = ({image,title,info, index}:SDGGridType & {index:number}) => {
  return (
    <Dialog>
    <DialogTrigger>
        <Image src={image} alt={`${title} image`} width={300} height={300} className=" hover:scale-[1.015] ease-in-out duration-200 xl:w-[300px]
        lg:w-[350px] w-[160px] " />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl md:text-2xl lg:text-4xl font-medium lg:mb-8 mb-2 text-fontPrimary tracking-[0.015em] w-full lg:max-w-[600px] md:max-w-[550px] max-w-[270px] text-start self-start" >{`SDG ${index}: ${title}`}</DialogTitle>
        <DialogDescription>
            <span className="flex flex-col">
              <span className="flex  md:flex-row flex-col lg:gap-10 md:gap-7 gap-3">
            <Image src={image} alt={`${title} image`} width={210} height={210} className="lg:w-[200px] lg:h-[200px]  md:w-[150px] md:h-[150px] w-[100px] h-[100px] max-w-[210px] max-h-[210px]" />
            <span className="text-sm md:text-base text-start lg:text-xl font-medium text-fontMutedColor ">{info}</span>
                </span>
                <Button
            variant={"primary"}
            size={"primary"}
            className=" self-end text-2xl xl:mt-6 lg:mt-3 md:mt-2 mt-2 lg:text-[24px] md:text-[20px] text-[16px] "
          >
            Explore More
          </Button> 
            </span>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default SDGDialog