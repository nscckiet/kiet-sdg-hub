import Heading from "../../../_components/Heading"
import { aboutDescription, objectiveDescription, teamData } from "@/constants/constant"
import EventCard from "../../../_components/EventCard"
import Info from "@/app/_components/Info"
const AboutUsPage = () => {
  const displayTeamNameCards= teamData.map((item,i)=>{
    return (
        <div key={i}>
        <EventCard  name={item.name}  image={item.image}/>
        </div>
    )
})
  return (
    <div className="flex flex-col px-[124px] py-20">
      <div>
    <p  className=" text-5xl font-medium text-fontMutedColor ">About SDG</p>
    <p className=" text-5xl font-semibold  text-fontPrimary mt-4">Empowering Progress, Embracing Unity</p>
    <Info info={aboutDescription.info} image={aboutDescription.image} direction="rtl"/>
      </div>
    <div id="objective" className="flex flex-col items-center mt-20">
    <Heading heading="Our Objective"/>
    </div>
    <div className="mt-4">
    <Info info={objectiveDescription.info} image={objectiveDescription.image} direction="ltr"/>
    </div>
    <div id="team" className=" mt-52">
      <p className=" text-5xl font-semibold text-fontPrimary  mb-24">Our Team</p>
      <div className="grid grid-cols-3 gap-24">{displayTeamNameCards}</div>
    </div>
    </div>
  )
}

export default AboutUsPage