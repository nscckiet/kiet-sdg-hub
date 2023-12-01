import UpcomingEvent from "../_components/UpcomingEvent";
import PastEvents from "../_components/PastEvents";
const EventsPage = () => {
  return (
    <div className=" py-20 flex flex-col justify-center items-center  ">
      
      <UpcomingEvent/>
      <div className="mt-[200px]">
        <div className=" mb-24">
      <PastEvents/>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
