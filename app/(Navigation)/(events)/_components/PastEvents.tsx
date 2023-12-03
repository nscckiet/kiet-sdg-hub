import Heading from "../../../_components/Heading"

import EventCard from "../../../_components/EventCard"
import {eventData} from "../../../../constants/constant"

const PastEvents = () => {
    const displayUpcomingEventCards= eventData.map((item,i)=>{
        return (
            <div key={i}>
            <EventCard  name={item.name}  image={item.image}/>
            </div>
        )
    })
  return (
    <div  id="pastEvents" className="flex flex-col justify-center items-center">
        <div className=" lg:mb-[80px] md:mb-[40px] mb-[10px] "> 
        <Heading heading="Past Events"/>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-22 xl:gap-24  gap-20"> 
        {displayUpcomingEventCards}
        </div>  
    </div>
  )
}

export default PastEvents