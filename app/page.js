import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import PeoplySay from "@/components/PeoplySay";
import PlatFrom from "@/components/PlatFrom";

export default function Home() {
  
  return (
  
    <main>
      <Hero/>
      <PlatFrom />
      <Company />
      <Marketing />
      <PeoplySay />
      <Faq />
      <Contact/>
    </main>
  )
}
