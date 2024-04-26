import ServiceImg from "../Assets/service3.png"
import ServiceImg2 from "../Assets/service4.webp"

import Image from "next/image"

const Service2 = () => {
  return (
    <div className={`bg-[url('./Assets//serviceback1.jpg')] bg-fixed  bg-blend-overlay bg-white bg-opacity-70 `} id="services" >
      <div className=" w-full flex flex-col-reverse items-center md:flex-row-reverse md:py-20 px-4 py-10 md:space-x-10 md:justify-around ">
        <div className=" h-full md:w-[35%] flex flex-col py-5 md:py-[6rem] justify-between    space-y-4 ">
          <h1 className=" text-3xl font-medium text-purple-500 ">
          Stressed About Car Insurance? We've Got Your Back!{" "}
          </h1>
          <p className=""> 
          {
` Stressed about car insurance? Relax, we've got you covered! Navigating the complex world of car insurance can be overwhelming, but our team is here to simplify the process for you. Whether you're a seasoned driver or a newcomer.`
          }
           
          </p>
          
        </div>
        <div className=" md:w-[40%]  h-auto rounded-md shadow-lg overflow-hidden ">
          <Image
            className="rounded w-full h-full"
            src={ServiceImg}
            width={600}
            alt="service image"
          />
        </div>
      </div>
      <div className=" w-full flex flex-col items-center md:flex-row md:py-20 px-4 py-10 md:space-x-10 md:justify-around ">
        <div className=" h-full md:w-[35%] flex flex-col py-5 md:py-[6rem] justify-between    space-y-4 ">
          <h1 className=" text-3xl font-medium text-purple-500 ">
            We Got You Covered.{" "}
          </h1>
          <p>
            {`  we'll help you understand your options and find the right coverage that fits your needs and budget. Say goodbye to insurance worries and hello to peace of mind on the road. Let us take the stress out of car insurance so you can focus on enjoying the ride!`}
          </p>
          
        </div>
        <div className=" md:w-[40%]  h-auto rounded-md shadow-lg overflow-hidden ">
          <Image
            className="rounded w-full h-full"
            src={ServiceImg2}
            width={600}
            alt="service image"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Service2
