import Image from "next/image";
import HeroImg from "../Assets/malehero.avif"
import HeroBack from "../Assets/serviceback.jpg"

const Hero = () => {
  return (
    <div className="h-max flex bg-black  md:space-x-20 flex-col  md:flex-row pt-10   bg-gradient-to-r from-violet-800 via-violet-700 to-purple-500 " id="hero"  >
        <div className=" h-full md:w-[70%] mx-4 md:text-start flex flex-col  md:py-24  space-y-5 my-10 md:ml-10">
            <h1 className=" text-7xl  text-white " >Find the best deals on car insurance & Cars. </h1>
            <p className="text-white">Get unbeatable deals on car buying and insurance with our expert service. Whether you're purchasing a vehicle or insuring it, we offer tailored solutions, exclusive discounts, and personalized support for a seamless experience. Drive confidently knowing you've secured the best deal possible. </p>
                
            <div className=" space-x-5">
                <a href='https://wa.me/+923214308481?text="I have a query about Car Insurance or Car selling"'>

            <button className="  bg-purple-500 border border-purple-500  p-2 rounded-2xl hover:border-white hover:bg-transparent hover:text-white transition-all text-white  ">
              Get Quote
            </button>
                </a>
                <a href="tel:+923214308481">
                    
            <button className=" border border-white text-white  p-2 rounded-2xl hover:bg-purple-500 transition-all hover:border-purple-500  ">
              Call us
            </button>
                </a>
          </div>
            
        </div>
        <div className=" h-full md:w-1/2 md:mt-16 ">
        <Image src={HeroImg} width={400} height={300} />
        </div>
    </div>
  )
}

export default Hero