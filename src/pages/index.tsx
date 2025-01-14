import LoadingScreen from "@/components/LoadingScreen";
import AboutSection from "@/components/Pages/About";
import ContactSection from "@/components/Pages/Contact/UpdateContact";
// import ContactSection from "@/components/Pages/Contact";
import Carousel from "@/components/Pages/Home";
import OurClientSection from "@/components/Pages/OurClient";
import PortfolioSection from "@/components/Pages/Portfolio";
import ServiceSection from "@/components/Pages/Service";
import TeamSection from "@/components/Pages/Team";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setFadeIn(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Box
        opacity={fadeIn ? 1 : 0}
        transition="opacity 0.8s ease-in"

      >
        {!isLoading && (
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
        )}
      </Box>
    </>
  );
}
