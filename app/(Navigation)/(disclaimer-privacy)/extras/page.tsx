import Heading from "../../../_components/Heading"
import Info from "@/app/_components/Info"
import {disclaimerDescription, privacyPolicyDescription} from "../../../../constants/constant"
const page = () => {
  return (
    <div className="flex flex-col px-[124px] py-20">
        <div id="disclaimer" className=" flex justify-center">
            <Heading heading="Disclaimer"/>
        </div>
        <div className="mt-4">
        <Info info={disclaimerDescription.info} image={disclaimerDescription.image} direction="rtl"/>
        </div>
        <div  id="privacyPolicy" className="flex justify-center mt-20">
            <Heading heading="Privacy Policy"/>
        </div>
        <div className="mt-4">
            <Info info={privacyPolicyDescription.info} image={privacyPolicyDescription.image} direction="ltr"/>
        </div>
    </div>
  )
}

export default page