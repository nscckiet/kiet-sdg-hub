import Image from "next/image"
import Link from "next/link"
import{AiFillInstagram as Instagram} from "react-icons/ai"
import {FaFacebookF as Facebook , FaLinkedinIn as Linkedin , FaYoutube as Youtube} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between bg-fontSecondary lg:px-28 md:px-24 sm:px-20 px-10 py-10 text-white">
        <div className="flex items-start gap-3">
          <Image src={"./sdg-logo-whitebg.svg"} alt="sdg-logo" width={36} height={36} className="w-auto h-auto mt-1"/>
          <div>
            <p className=" font-medium">Sustainable Developments Goals </p>
            <p className=" text-xs font-light mt-1">KIET SDG Hub</p>
            <p className="text-xs  font-extralight mt-2">Established on 30/05/2022</p>
            <div className="flex gap-2  sm:gap-3 mt-4">
              <Link href={"#"}><Instagram size={20}/></Link>
              <Link href={"#"}><Facebook size={18}/></Link>
              <Link href={"#"}><Linkedin size={20}/></Link>
              <Link href={"#"}><Youtube size={20}/></Link>
            </div>
          </div>
        </div>
        <div className="grid mt-4 md:ml-0 md:mt-0  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-7 gap-4 justify-center items-center font-extralight text-xs">
            <div className="flex justify-start flex-col md:h-24 gap-y-1 sm:gap-y-2">
                <p className="text-base font-normal mb-1">Quick Links</p>
                <Link href={"#"}>The 17 SDGs</Link>
                <Link href={"/events/#pastEvents"}>Past Events</Link>
                <Link href={"/events/#upcomingEvents"}>Upcoming Events</Link>
            </div>
            <div className="flex justify-start flex-col md:h-24 gap-y-1 sm:gap-y-2">
                <p className="text-base font-normal mb-1">About Us</p>
                <Link href={"/about/#objective"}>Objective</Link>
                <Link href={"/about/#team"}>Our Team</Link>
            </div>
            <div className="flex justify-start flex-col md:h-24 gap-y-1 sm:gap-y-2">
                <p className="text-base font-normal mb-1">Others</p>
                <Link href={"/extras/#privacyPolicy"}>Privacy Policy</Link>
                <Link href={"/extras/#disclaimer"}>Disclaimer</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer