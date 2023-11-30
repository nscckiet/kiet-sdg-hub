import Heading from "./Heading"
import bg from "@/public/upcoming.svg"
import EventCard from "./EventCard"
import { StaticImageData } from "next/image"

type ConstantType={
    name:String,
    image:StaticImageData
}[]

const constant:ConstantType = [
    {
        name:"Event Name",
        image:bg
    },
    {
        name:"Event Name",
        image:bg
    },
    {
        name:"Event Name",
        image:bg
    }
]


const PastEvents = () => {
    const displayUpcomingEventCards= constant.map((item,i)=>{
        return (
            <div key={i}>
            <EventCard  name={item.name}  image={item.image}/>
            </div>
        )
    })
  return (
    <div  id="pastEvents" className=" flex flex-col justify-center items-center">
        <div className=" mb-20"> 
        <Heading heading="Past Events"/>
        </div>
        <div className=" grid grid-cols-3 gap-24 "> 
        {displayUpcomingEventCards}
        </div>
    </div>
  )
}

export default PastEvents