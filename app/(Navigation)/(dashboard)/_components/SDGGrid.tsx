import Heading from "@/app/_components/Heading"
import { sdgGridData } from "@/constants/constant"
import SDGDialog from "./SDGDialog"
const SDGGrid = () => {
  const displayGrid= sdgGridData.map((item,i)=>{
     return <SDGDialog image={item.image} info={item.info} title={item.title} key={i} index={i+1}/>;
  })
  return (
    <div className="flex flex-col items-center">

        <Heading className={'xl:mb-28 lg:mb-20 md:mb-16 mb-12'}>The 16 SDGs</Heading>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-10 xl:gap-20 lg:gap-8">{displayGrid
        }</div>
    </div>
  )
}

export default SDGGrid