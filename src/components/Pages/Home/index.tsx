"use client";

import { Box, Text, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { heroImages } from "@/utils/images";

const Carousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="relative"
      w="full"
      h={isMobile ? "auto" : "100vh"}
      mx="auto"
      overflow="hidden"
      id="home"
    >
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        effect={'fade'}
        loop
        spaceBetween={10}
        style={{ width: "100%" }}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Box w="full" h={isMobile ? "auto" : "100vh"}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="swiper-lazy"
                style={{
                  width: "100%",
                  height: isMobile ? "auto" : "100%",
                  objectFit: "cover",
                  objectPosition: "center bottom",
                }}
              />
              <div className="swiper-lazy-preloader"></div>
            </Box>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
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
          ref={prevRef}
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
          ref={nextRef}
        />
      </Swiper>

      <Box
        position="absolute"
        w="full"
        bottom={{ base: "15%", md: "15%" }}
        // bottom={{ base: "15%", md: "17%" }}
        left="50%"
        transform="translateX(-50%)"
        zIndex="2"
        textAlign="center"
      >
        <Text
          fontSize={{ base: "md", md: "4xl" }}
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
