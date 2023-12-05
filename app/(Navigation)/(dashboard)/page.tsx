import { Button } from "@/components/ui/button";
import Image from "next/image";
import OngoingEvents from "./_components/OngoingEvents";
import Statistics from "./_components/Statistics";
const Home = () => {
  return (
    <div className=" xl:px-11 lg:px-8 md:px-6 sm:px-4 px-[20px] lg:py-12 md:py-10 py-8  flex flex-col ">
      <div className="flex lg:px-20 md:px-12 sm:px-6 px-0 justify-center items-start">
        <div className="xl:pt-4 md:pt-3 sm:pt-2">
          <div className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-fontPrimary font-bold  xl:leading-[100px] lg:leading-[70px] md:leading-[60px] leading-[40px]">
            Empowering Global Change
          </div>
          <p className=" lg:text-3xl md:text-2xl text-xl  text-fontMutedColor xl:my-5 lg:my-3 my-2">
            Let’s make change together
          </p>
          <Button
            variant={"primary"}
            size={"primary"}
            className=" text-2xl xl:mt-4 lg:mt-3 md:mt-2 mt-1 lg:text-[24px] md:text-[20px] text-[16px] "
          >
            Explore SDGs
          </Button>
        </div>
        <Image
          src={"./dashboard-graphic.svg"}
          width={500}
          height={500}
          alt="dashboard-graphic"
          className="hidden w-auto h-auto xl:w-[500px] lg:w-[400px] md:w-[300px] sm:block"
        />
      </div>
      <div className="flex lg:px-20 md:px-12 sm:px-6 px-0 justify-center items-center xl:mt-24 lg:mt-20 md:mt-16 mt-12">
        <OngoingEvents />
      </div>
      <div className=" xl:mt-32 lg:mt-28 md:mt-24 mt-20">
        <Statistics />
      </div>
    </div>
  );
};

export default Home;
