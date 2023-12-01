"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    <div className="flex  lg:px-28 md:px-16 px-8 py-3  items-center justify-between  shadow ">
      <div className="flex  justify-center items-center ">
        <Image src={"./kiet-logo.svg"} width={45} height={45} className=" w-auto h-auto" alt="kiet-logo" />
        <div className="h-[30px] mx-1 w-[1px] bg-[#9F9F9F] "></div>
        <Image src={"./sdg-logo.svg"} width={45} height={45} className="w-auto  h-auto" alt="sdg-logo" />
      </div>
      {/* Desktop Navigation */}
      <div className="lg:gap-32 md:gap-12 gap-8  lg:text-base md:text-sm text-sm sm:flex hidden text-fontMutedColor">
        <Link href={"/"} className={path==='/' ? "text-fontPrimary" : ""}>Home</Link>
        <Link href={"/events"} className={path==='/events' ? "text-fontPrimary" : ""}>Events</Link>
        <Link href={"/activities"} className={path==='/activities' ? "text-fontPrimary" : ""}>Activities</Link>
        <Link href={"/about"} className={path==='/about' ? "text-fontPrimary" : ""}>About Us</Link>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <DropdownMenu >
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
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
