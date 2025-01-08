import AboutSection from "@/components/Pages/About";
import ContactSection from "@/components/Pages/Contact";
import Carousel from "@/components/Pages/Home";
import OurClientSection from "@/components/Pages/OurClient";
import PortfolioSection from "@/components/Pages/Portfolio";
import ServiceSection from "@/components/Pages/Service";
import TeamSection from "@/components/Pages/Team";
import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <OurClientSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
