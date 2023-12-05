import { ReactNode } from "react"
const Heading = ({children}:{
children:ReactNode
}) => {
  return (
    <div className="inline-block ">
        <p className=" text-fontPrimary text-2xl lg:text-4xl md:text-3xl font-medium  border-fontSecondary">
          {children}
        </p>
        <div className=" lg:h-[5px] h-[3px] bg-fontSecondary w-full rounded-full lg:mt-4  mt-2"></div>
      </div>
  )
}

export default Heading