"use client";

import { Box, Text, IconButton } from "@chakra-ui/react";
import Slider, { LazyLoadTypes } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const images = [
  { src: "/images/hero/hero-1.PNG", alt: "Hero Image 1" },
  { src: "/images/hero/hero-2.PNG", alt: "Hero Image 2" },
  { src: "/images/hero/hero-3.PNG", alt: "Hero Image 3" },
  { src: "/images/hero/hero-4.PNG", alt: "Hero Image 4" },
  { src: "/images/hero/hero-5.PNG", alt: "Hero Image 5" },
  { src: "/images/hero/hero-6.PNG", alt: "Hero Image 6" },
  { src: "/images/hero/hero-7.PNG", alt: "Hero Image 7" },
  { src: "/images/hero/hero-8.PNG", alt: "Hero Image 8" },
  { src: "/images/hero/hero-9.PNG", alt: "Hero Image 9" },
];

const Carousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    autoplaySpeed: 5000
  };

  return (
    <Box
      position="relative"
      w="full"
      h="100vh"
      mx="auto"
      overflow="hidden"
      id="home"
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} position="relative" h="100vh">
            <img
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
        ))}
      </Slider>

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

      <Box
        position="absolute"
        w="full"
        bottom="10%"
        left="50%"
        transform="translateX(-50%)"
        zIndex="2"
        textAlign="center"
      >
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="white"
          fontFamily="arialBlack"
        >
          we create <span style={{ color: "orange" }}>solution</span> for your event
        </Text>
      </Box>

    </Box>
  );
};

export default Carousel;
