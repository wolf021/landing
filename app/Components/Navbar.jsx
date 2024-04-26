'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../Assets/ami.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

  return (
      
    <div className={`w-full text-white h-[3rem] align-middle flex items-center md:justify-around justify-between   border-b fixed ${scrolled? "bg-black bg-opacity-80 " : "bg-transparent"} z-100 transition-all  `} >

        <div className="text-white px-5 ">
            <Image width={50} src={Logo} />
        </div>
        <div className="  max-sm:hidden md:flex  list-none  space-x-10   ">
            <li className=" hover:text-purple-500 cursor-pointer "> <a href="/">Home</a> </li>
            <li className=" hover:text-purple-500 cursor-pointer "> <a href="/#services">Services</a></li>
            <li className=" hover:text-purple-500 cursor-pointer "> <a href="/#testimonials">Testimonials</a></li>
            <li className=" hover:text-purple-500 cursor-pointer "> <a href="/#contactus">Contact Us</a></li>
        </div>
        <div className="md:hidden  relative px-5">
            <button onClick={()=> setMenuOpen(!menuOpen)}>
                {
                    menuOpen ?<FontAwesomeIcon icon={faX} style={{color: "#ffffff", fontSize:30 }} /> :
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff", fontSize:30 }} />
                }

        
            </button>
       
        </div>
        <div className={`  flex-col text-purple-500 py-4 fixed mt-[57%] mx-0 space-y-5 text-center md:hidden bg-white w-full list-none  px-[-10rem] transition-all ${menuOpen ? "   " : "   translate-x-[40rem] invisible"} `}>
            <li className="  h-[100%] cursor-pointer hover:bg-purple-500 hover:text-white "> <a href="/">Home</a> </li>
            <li className="  h-[100%] cursor-pointer hover:bg-purple-500 hover:text-white "> <a href="/#services">Services</a></li>
            <li className="  h-[100%] cursor-pointer hover:bg-purple-500 hover:text-white "><a href="/#testimonials">Testimonials</a></li>
            <li className="  h-[100%] cursor-pointer hover:bg-purple-500 hover:text-white "> <a href="/#contactus">Contact Us</a></li>
        </div>
    </div>
  )
}

export default Navbar