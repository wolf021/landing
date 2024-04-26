import ServiceImg from "../Assets/service1.jpg"

import Image from "next/image"

const Service = () => {
  return (
    <div className={`bg-[url('./Assets//serviceback.jpg')] bg-fixed  bg-blend-overlay bg-white bg-opacity-70 `} id="services" >
      <div className=" w-full flex flex-col-reverse items-center md:flex-row-reverse md:py-20 px-4 py-10 md:space-x-10 md:justify-around ">
        <div className=" h-full md:w-[35%] flex flex-col py-5 md:py-[6rem] justify-between    space-y-4 ">
          <h1 className=" text-3xl font-medium text-purple-500 ">
            Find the best deals on car insurance.{" "}
          </h1>
          <p className="">
            Get unbeatable deals on car buying and insurance with our expert
            service. Whether you're purchasing a vehicle or insuring it, we
            offer tailored solutions, exclusive discounts, and personalized
            support for a seamless experience. Drive confidently knowing you've
            secured the best deal possible.{" "}
          </p>
          
        </div>
        <div className=" md:w-[40%]  h-auto rounded ">
          <Image
            className="rounded w-full h-full"
            src={ServiceImg}
            width={600}
          />
        </div>
      </div>
      <div className=" w-full flex flex-col items-center md:flex-row md:py-20 px-4 py-10 md:space-x-10 md:justify-around ">
        <div className=" h-full md:w-[35%] flex flex-col py-5 md:py-[6rem] justify-between    space-y-4 ">
          <h1 className=" text-3xl font-medium text-purple-500 ">
            Buy your Car with Us.{" "}
          </h1>
          <p>
            Get unbeatable deals on car buying and insurance with our expert
            service. Whether you're purchasing a vehicle or insuring it, we
            offer tailored solutions, exclusive discounts, and personalized
            support for a seamless experience. Drive confidently knowing you've
            secured the best deal possible.{" "}
          </p>
          
        </div>
        <div className=" md:w-[40%]  h-auto rounded ">
          <Image
            className="rounded w-full h-full"
            src={ServiceImg}
            width={600}
          />
        </div>
      </div>
      
    </div>
  )
}

export default Service
