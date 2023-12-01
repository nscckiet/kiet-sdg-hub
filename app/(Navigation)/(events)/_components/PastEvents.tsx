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