import { Button } from "@/components/ui/button"
import Image from "next/image"
import OngoingEvents from "./_components/OngoingEvents"
import Statistics from "./_components/Statistics"
 const Home = () => {
  return (
    <div className=" px-11 py-12 ">
      <div className="flex px-20 justify-center items-start">
        <div className="pt-4">
         <div className="text-7xl text-fontPrimary font-bold leading-[100px]">
         Empowering Global Change
         </div>
         <p className=" text-3xl text-fontMutedColor my-5">Let’s make change together</p>
         <Button variant={"primary"} size={"primary"} className=" text-2xl mt-4 ">Explore SDGs</Button>
        </div>
        <Image src={"./dashboard-graphic.svg"} width={500} height={500} alt="dashboard-graphic" className="w-auto h-auto"/>
      </div>
      <div className="flex px-20 justify-center items-center mt-24">
        <OngoingEvents/>
      </div>
      <div className=" mt-52">
 <Statistics/>
      </div>
      </div>
  )
}

export default Home
