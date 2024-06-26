import ServiceImg from "../Assets/service1.png"
import ServiceImg2 from "../Assets/service1.webp"

import Image from "next/image"

const Service = () => {
  return (
    <div className={`bg-[url('./Assets//back2.jpg')] bg-fixed  bg-blend-overlay bg-white bg-opacity-70 `} id="services" >
      <div className=" w-full flex flex-col-reverse items-center md:flex-row-reverse md:py-20 px-4 py-10 md:space-x-10 md:justify-around ">
        <div className=" h-full md:w-[35%] flex flex-col py-5 md:py-[6rem] justify-between    space-y-4 ">
          <h1 className=" text-3xl font-medium text-purple-500 ">
            Are You Confused Buying your Next Car.{" "}
          </h1>
          <p className=""> 
          {
` Feeling lost amidst a sea of car options? Don't worry, we're here to guide you through the maze of choices! Let our expertise simplify your car-buying journey, from understanding your needs and budget to comparing features and financing options. Together, we'll navigate the process and find the perfect car that fits your lifestyle and preferences.`
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
            Buy your Car with Us.{" "}
          </h1>
          <p>
            {` Buy your car hassle-free with us! Our expert team is here to streamline your car-buying experience, ensuring you find the perfect vehicle to suit your needs and preferences. From browsing our extensive inventory to securing financing, we'll guide you every step of the way. Say goodbye to stress and hello to your dream car with our seamless buying process..`}
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

export default Service
