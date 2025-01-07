"use client";

import { Box, Text, IconButton, Image, Divider, AbsoluteCenter } from "@chakra-ui/react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const teamImages = [
  { src: "/images/team/team-1.png", alt: "Team Image 1" },
  { src: "/images/team/team-2.png", alt: "Team Image 2" },
  { src: "/images/team/team-3.png", alt: "Team Image 3" },
  { src: "/images/team/team-4.png", alt: "Team Image 4" },
  { src: "/images/team/team-5.png", alt: "Team Image 5" },
  { src: "/images/team/team-6.png", alt: "Team Image 6" },
];

const TeamSection = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "260px",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };

  return (
    <Box as="section" py={16} bg="white" id="team">
      {/* Section Title */}
      <Box textAlign="center" mb={20}>
        <Box position='relative' maxW="container.xl" mx="auto">
          <Divider borderWidth="1px" borderColor="black" />
          <AbsoluteCenter bg='white' px={12}>
            <Text
              fontSize="5rem"
              fontWeight="400"
              color="black"
              fontFamily="chalkboy"
              textAlign="center"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              TEAM BEHIND THE SHOW
            </Text>
          </AbsoluteCenter>
        </Box>
      </Box>

      {/* Carousel */}
      <Box position="relative" px={6}>
        {/* Slider */}
        <Slider {...sliderSettings} >
          {teamImages.map((image, index) => (
            <Box
              key={index}
              px={4}
            >
              <Box
                position="relative"
                border="1px solid blue" // Optional border for debugging
                h="250px" // Adjust the height as needed
                overflow="hidden"
                borderRadius="md"
                boxShadow="md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

            </Box>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <IconButton
          aria-label="Previous"
          icon={<FaChevronLeft />}
          position="absolute"
          top="50%"
          left="5%"
          transform="translateY(-50%)"
          zIndex="10"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
          borderRadius="full"
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <IconButton
          aria-label="Next"
          icon={<FaChevronRight />}
          position="absolute"
          top="50%"
          right="5%"
          transform="translateY(-50%)"
          zIndex="10"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
          borderRadius="full"
          onClick={() => sliderRef.current?.slickNext()}
        />
      </Box>
    </Box>
  );
};

export default TeamSection;
