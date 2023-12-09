"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";
import {Menu,X} from "lucide-react";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Navbar = () => {
    const path  = usePathname();
   
   
  

  return (
    <div className="flex fixed top-0 left-0 z-20 bg-white w-full lg:px-28 md:px-12 px-8 py-3  items-center justify-between shadow ">
        <Link href={"/"}>
      <div className="flex  justify-center items-center ">
        <Image src={"./kiet-logo.svg"} width={45} height={45} className=" w-auto h-auto" alt="kiet-logo" />
        <div className="h-[30px] mx-1 w-[1px] bg-[#9F9F9F] "></div>
        <Image src={"./sdg-logo.svg"} width={45} height={45} className="w-auto  h-auto" alt="sdg-logo" />
      </div>
        </Link>
      {/* Desktop Navigation */}
      <div className="xl:gap-32 lg:gap-16 md:gap-12 gap-8  lg:text-base md:text-sm text-sm sm:flex hidden text-fontMutedColor">
        <Link href={"/"} className={path==='/' ? "text-fontPrimary" : ""}>Home</Link>
        <Link href={"/events"} className={path==='/events' ? "text-fontPrimary" : ""}>Events</Link>
        <Link href={"/activities"} className={path==='/activities' ? "text-fontPrimary" : ""}>Activities</Link>
        <Link href={"/about"} className={path==='/about' ? "text-fontPrimary" : ""}>About Us</Link>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden ">
        <DropdownMenu>
          <DropdownMenuTrigger  >    
    <Menu size={40}/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/events"}>Events</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities"}>Activities</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/about"}>About Us</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
