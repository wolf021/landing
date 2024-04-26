import Image from "next/image";
import HeroImg from "../Assets/malehero.avif"
import Star from "../Assets/star.png"

const Testimonials = () => {
  return (
    <div className=" bg-gradient-to-r from-violet-800 via-violet-700 to-purple-500 py-10 px-10" id="testimonials">
    
    <div className=" grid grid-cols-1  py-10 md:py-0 md:grid-cols-2 items-center lg:space-x-[17rem]    " >
    <div className="space-y-4 text-white">
        <h3 className=" text-5xl text-white">
        Thousands of customers who bought their car insurance through us

        </h3>
        <p>
We're proud to share that our car insurance service is highly rated by our customers.</p>
    </div>
    <div className=" h-full md:w-1/2 md:mt-16 ">
        <Image src={HeroImg} width={300} height={300} />
        </div>
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 w-full  md:space-x-10 space-y-10 md:space-y-0">
            <div className=" border p-3 rounded-xl bg-white space-y-5 flex flex-col justify-between">
                <div className="flex  " >
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                </div>
                <h3> Made a car purchased from them. worth every dosh.</h3>
                <div className="border-t-2">Preeya</div>
            </div>
            <div className=" border p-3 rounded-xl flex flex-col justify-between bg-white space-y-5">
                <div className="flex  " >
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                </div>
                <h3>Kash got me best car insurance deal. highly recomanded </h3>
                <div className="border-t-2">Mark</div>
            </div>
            <div className=" border p-3 rounded-xl bg-white space-y-5 flex flex-col justify-between">
                <div className="flex  " >
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    <Image src={Star} height={30} />
                    
                </div>
                <h3>having hard time getting a new and inexpansive insurance . kash helped me to get insurance on great price. </h3>
                <div className="border-t-2">John</div>
            </div>
        </div>
</div>    
    


  )
}

export default Testimonials