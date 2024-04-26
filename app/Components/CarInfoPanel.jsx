
const CarInfoPanel = () => {
  return (
    <div className='p-4 py-14 bg-white'>
        <div className='text-center space-y-5'>
            <h1 className='text-4xl font-medium text-purple-500'>What do you buy Car from Us?</h1>
            <p>We are trusted by many and offer the prices reasonable from Markets.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-14 px-6 md:px-14 '>
        <div className='space-y-3  text-center  '>
            <h3 className=' text-2xl font-medium text-purple-500' >  Trusted</h3>
            <p>Including your job, age and your address, plus the same for named drivers. We'll also need to know the type of licence you have, how long you've had it, your claims history and driving history</p>
        </div>
        <div className='space-y-3 text-center  '>
            <h3 className=' text-2xl font-medium text-purple-500' >  Save Time & Money</h3>
            <p>Details of your no-claims discount and driving history could help lower the prices you receive. Use our no-claims discount tool to find out how many years’ no-claims discount your insurer will honour</p>
        </div>
       
        <div className=' space-y-3 text-center '>
            <h3 className=' text-2xl font-medium text-purple-500' > Exclusive Deals</h3>
            <p>Social, commuting or business, and your expected annual mileage i.e. how many miles you think you'll drive in a year. You’ll also need to say where you’ll keep the car at night for security</p>
        </div>
        </div>

        <div className=' flex justify-around'>
        <a href='https://wa.me/+923214308481?text="I have a query about Car Insurance or Car selling"'>

        <button className="  self-center bg-purple-500 border border-purple-500 md:w-full p-2 rounded-2xl hover:border-purple-500 hover:bg-transparent hover:text-purple-500 transition-all text-white  ">
              Get Insurance Quote
            </button>
        </a>
        </div>
       
       
    </div>
  )
}

export default CarInfoPanel