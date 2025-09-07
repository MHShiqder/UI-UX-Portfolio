import HeroSection from "@/components/HeroSection/HeroSection";
import Faq from "@/components/Faqs/Faq";
import Service from "@/components/Services/Service";
// import Projects from "@/components/Projects/Projects";

import Reviews from "@/components/Review/Reviews";
import ContactPage from "./contact/page";
import Developer from "../components/developer/Developer";
import SkillMarquee from "@/components/SkillMarquee/SkillMarquee";
import DragMeGrid from "@/components/DragMeGrid/DragMeGrid";
import BentoGridCom from "@/components/BentoGridCom/BentoGridCom";
import OrbitingSkills from "@/components/Orbiting/Orbiting";
import TimelinePage2 from "@/components/TimelinePage2/TimelinePage2";
import Masonary from "@/components/Professional/Professional";
import OrbitCarousel from "@/components/Orbit2/Orbit2";
import PricingSection from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <AboutPage/> */}
      <SkillMarquee></SkillMarquee>
      <DragMeGrid />
      <Developer />
      <Service />
      <OrbitingSkills></OrbitingSkills>
      <BentoGridCom></BentoGridCom>
      <TimelinePage2 />
      <OrbitCarousel></OrbitCarousel>
      <Masonary></Masonary>
      {/* <Blogs/> */}
      <PricingSection></PricingSection>
      <Reviews />
      <Faq />
      <ContactPage />
    </main>
  );
}
