import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Logo from "../Assets/ami.png"

const Footer = () => {
  return (
    <>
    
    <div className=' bg-gradient-to-r from-violet-800 via-violet-700 to-purple-500  text-white flex flex-col md:flex-row space-y-6 justify-around  py-10' id='contactus'>
    
    <div className='md:w-1/3  text-center space-y-3 items-center flex flex-col'>
    <Image width={150} src={Logo} />
    <p>We are Car Buying/Selling and Insurance Brokers Company. since 2015 </p>
    </div>
    
    <div className='text-center list-none space-y-5 '>
        <h3>
        Services
        </h3>
        
        <ul className='space-y-3 my-6'>

       <li>Car Insurancce</li>
       <li>Car Buying</li>
       <li>Car Purchasing</li>
        </ul>
    </div>
    <div className=' flex text-center items-center justify-center flex-col  '>
        
    <h3>
        Social
        </h3>
        <ul className='flex space-x-6  justify-center size-32 items-center '>
            <a href='https://wa.me/+923214308481?text="I have a query about Car Insurance or Car selling"
' >

        <FontAwesomeIcon  icon={faWhatsapp} className=' hover:text-purple-300 cursor-pointer  size-8  ' />
            </a>
        <FontAwesomeIcon icon={faInstagram}  className=' hover:text-purple-300 cursor-pointer  size-8 ' />
        <FontAwesomeIcon  icon={faFacebook} className=' hover:text-purple-300 cursor-pointer  size-8  ' />
        </ul>

</div>  
    </div>
    <div className='text-center bg-gray-200 py-2 flex  justify-between px-10 '>
        <p className='' >AmiAutos®. 2024</p>
        <p className=' cursor-pointer hover:text-purple-500 ' >Privacy-Policy</p>
    </div>
    </>
  )
}

export default Footer