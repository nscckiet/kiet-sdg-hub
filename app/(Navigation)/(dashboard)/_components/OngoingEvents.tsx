const OngoingEvents = () => {
  return (
    <div className="flex xl:flex-row lg:flex-col md:flex-col flex-col xl:px-[60px] xl:py-[95px] lg:px-[50px] lg:py-[85px] md:px-[40px] md:py-[75px] py-[50px] px-[30px]  shadow-[0px_0px_20px_10px_#00000024] rounded-xl">
        <div className="flex flex-col  justify-center w-full mr-4">
            <p className=" text-fontSecondary font-semibold xl:text-3xl text-2xl">Innotech</p>
            <p className="text-[#3FB181]">2nd Nov,2023</p>
            <p className="text-fontMutedColor font-semibold xl:text-xl md:text-lg text-lg my-[5px]">Kiet Group Of Institutions</p>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-fontSecondary font-semibold xl:text-3xl text-2xl">Ongoing Event</p>
            <p className="xl:leading-7 lg:leading-[24px] md:leading-[20px] text-fontMutedColor">Join us for an insightful Info Session for GDSC KIET 2023! We{`'`}re excited to have our previous GDSC leads, Aakash Goel and Mayank Shakya, as guest speakers. Aakash Goel, the founder of GDSC KIET, and Mayank Shakya, GDSC lead 2020 will share their valuable experiences and insights. Don{`'`}t miss out on this opportunity to learn from the best in the field. Register now to secure your spot and gain valuable knowledge about the world of technology and development. See you there!</p>
        </div>
    </div>
  )
}

export default OngoingEvents
