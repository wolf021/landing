'use client'
import Image from "next/image";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import Banner from "./Components/Banner";
import InfoPanel from "./Components/InfoPanel";
import CarInfoPanel from "./Components/CarInfoPanel";
import Testimonials from "./Components/Testimonials";
import Acccordian from "./Components/Acccordian";
import accordionItems from "./Data"
import ServiceImg from "./Assets/service1.png"
import ServiceImg2 from "./Assets/service1.webp"
import Banner2 from "./Components/Banner2";
import Service2 from "./Components/Service2";

export default function Home() {

  let serviceimages = {
    ServiceImg,
    ServiceImg2
  }

  return (
    <div className="">
      <Hero/>
      <Banner Title={`Ready for Your First Car or Need a New Ride? Let's Find the Perfect Match!`} SubTitle={`We are offering Discounts to Uk Buyers.`}/>
      <Service serviceImages={serviceimages}/>
      <Banner Title={`Having a Hard Time Getting Your Car Insured.`} SubTitle={`We are offering Discounts to International Students.`}/>
      <Service2/>
      <Banner2/>
      <InfoPanel />
      <CarInfoPanel/>
      <Testimonials/>
      <Acccordian items={accordionItems}/>
      
    </div>
  );
}
