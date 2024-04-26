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

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Service/>
      <Banner/>
      <InfoPanel />
      <CarInfoPanel/>
      <Testimonials/>
      <Acccordian items={accordionItems}/>
      
    </div>
  );
}
