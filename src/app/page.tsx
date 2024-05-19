import HeroSection from "@/components/About/HeroSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blackhorse Transportation Service",
  description: "Experience unparalleled luxury and comfort with blackhorse, the premier choice for people transportation in style. Book your ride today and elevate your travel experience.",
  keywords:"blackhorse, Luxury transportation, People transportation, Luxury cab, Boston transportation, Dinio Coach, Comfortable travel, Elegant rides, Professional drivers, Reliable service, Premium experience, Chauffeur service, City transportation, Business travel, Airport transfer, Private car service, Executive transportation, Classy transportation, Stylish rides, Safe travel, Trustworthy company, High-end vehicles, Customer satisfaction, Exceptional service, Affordable luxury, Quality transportation, Boston luxury transportation, Dinio Coach luxury cab"
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HeroSection />
      <Services />
      <Contact /> 
  
    </>
  );
}
