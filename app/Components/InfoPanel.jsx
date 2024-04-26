import React from 'react'

const InfoPanel = () => {
  return (
    <div className='p-4 py-14 bg-purple-50'>
        <div className='text-center space-y-5'>
            <h1 className='text-4xl font-medium text-purple-500'>What do I need to get car insurance quotes?</h1>
            <p>{`Get unbeatable deals on car buying and insurance with our expert service. Whether you're purchasing a vehicle or insuring it, we offer tailored solutions, exclusive discounts, and personalized support for a seamless experience. Drive confidently knowing you've secured the best deal possible.`}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-14 px-6 md:px-14 '>
        <div className='space-y-3  '>
            <h3 className=' text-2xl font-medium text-purple-500' > <span className=' text-4xl font-medium ' >1.</span> Your details and your licence</h3>
            <p>{`Get unbeatable deals on car buying and insurance with our expert service. Whether you're purchasing a vehicle or insuring it, we offer tailored solutions, exclusive discounts, and personalized support for a seamless experience. Drive confidently knowing you've secured the best deal possible.`}</p>
        </div>
        <div className='space-y-3  '>
            <h3 className=' text-2xl font-medium text-purple-500' > <span className=' text-4xl font-medium' >2.</span> No-claims discount (NCD) history</h3>
            <p>{`Get unbeatable deals on car buying and insurance with our expert service. Whether you're purchasing a vehicle or insuring it, we offer tailored solutions, exclusive discounts, and personalized support for a seamless experience. Drive confidently knowing you've secured the best deal possible.`}</p>
        </div>
        <div className='  space-y-3 '>
            <h3 className=' text-2xl font-medium text-purple-500' > <span className=' text-4xl font-medium' >3.</span> Details of the car</h3>
            <p>{`The car’s registration number if you know it. If not, the make and model is fine. We’ll also need the car’s age and any modifications you’ve made`}</p>
        </div>
        <div className=' space-y-3  '>
            <h3 className=' text-2xl font-medium text-purple-500' > <span className=' text-4xl font-medium' >4.</span>{`What you'll use the car for`}</h3>
            <p>{`Social, commuting or business, and your expected annual mileage i.e. how many miles you think you'll drive in a year. You’ll also need to say where you’ll keep the car at night for security`}</p>
        </div>
        </div>
        <div className=' flex justify-around'>
        <a href='https://wa.me/+923214308481?text="I have a query about Car Insurance"'>

        <button className=" shadow-md  animate-bounce self-center bg-purple-500 border border-purple-500 md:w-full p-2 rounded-2xl hover:border-purple-500 hover:bg-transparent hover:text-purple-500 transition-all text-white  ">
              Get Insurance Quote
            </button>
        </a>
        </div>
       
       
    </div>
  )
}

export default InfoPanel