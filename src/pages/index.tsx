import AboutSection from "@/components/Pages/About";
import Carousel from "@/components/Pages/Home";
import OurClientSection from "@/components/Pages/OurClient";
import PortfolioSection from "@/components/Pages/Portfolio";
import TeamSection from "@/components/Pages/Team";
import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutSection />
      <PortfolioSection />
      <OurClientSection />
      <TeamSection />
      {/* <Box id="service" h="100vh" bg="gray.700" color="white">
        <Text fontSize="4xl" textAlign="center" mt={10}>
          Our Services
        </Text>
      </Box>
      <Box id="portfolio" h="100vh" bg="gray.600" color="white">
        <Text fontSize="4xl" textAlign="center" mt={10}>
          Portfolio
        </Text>
      </Box>
      <Box id="contact" h="100vh" bg="gray.500" color="white">
        <Text fontSize="4xl" textAlign="center" mt={10}>
          Contact Us
        </Text>
      </Box> */}
    </>
  );
}
