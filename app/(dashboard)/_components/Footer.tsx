import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <div className="flex items-start justify-between bg-fontSecondary px-28 py-10 text-white">
        <div className="flex  items-start gap-3">
          <Image src={"./sdg-logo-whitebg.svg"} alt="sdg-logo" width={36} height={36} className="w-auto h-auto mt-1"/>
          <div>
            <p className=" font-medium">Sustainable Developments Goals </p>
            <p className=" text-xs font-light">KIET SDG Hub</p>
            <p className="text-xs  font-extralight mt-2">Established on 30/05/2022</p>
          </div>
        </div>
        <div className="flex gap-24 justify-center items-center font-extralight text-xs">
            <div className="flex justify-start flex-col w-28  h-24 ">
                <p className="text-base font-normal mb-1">Quick Links</p>
                <Link href={"#"}>The 17 SDGs</Link>
                <Link href={"/events/#pastEvents"}>Past Events</Link>
                <Link href={"/events/#upcomingEvents"}>Upcoming Events</Link>
            </div>
            <div className="flex justify-start flex-col w-28  h-24 ">
                <p className="text-base font-normal mb-1">About Us</p>
                <Link href={"#"}>Objective</Link>
                <Link href={"#"}>Our Team</Link>
                <Link href={"#"}>Disclaimer</Link>
            </div>
            <div className="flex justify-start flex-col w-28  h-24 ">
                <p className="text-base font-normal mb-1">Others</p>
                <Link href={"#"}>Privacy Policy</Link>
                <Link href={"#"}>Upcoming Events</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer