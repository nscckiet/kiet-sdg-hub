const Heading = ({heading}:{
heading:string
}) => {
  return (
    <div className="inline-block">
        <p className=" text-fontPrimary text-4xl font-medium  border-fontSecondary">
          {heading}
        </p>
        <div className=" h-[5px] bg-fontSecondary w-full rounded-full mt-4 "></div>
      </div>
  )
}

export default Heading