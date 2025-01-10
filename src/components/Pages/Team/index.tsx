"use client";

import { Box, Text, IconButton, Image, Divider, AbsoluteCenter, useBreakpointValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import Slider, { LazyLoadTypes } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";

const teamImages = [
  { src: "/images/team/team-1.webp", alt: "Team Image 1" },
  { src: "/images/team/team-2.webp", alt: "Team Image 2" },
  { src: "/images/team/team-3.webp", alt: "Team Image 3" },
  { src: "/images/team/team-4.webp", alt: "Team Image 4" },
  { src: "/images/team/team-5.webp", alt: "Team Image 5" },
  { src: "/images/team/team-6.webp", alt: "Team Image 6" },
];

const TeamSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sliderRef = useRef<Slider | null>(null);
  const sliderModalRef = useRef<Slider | null>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedIndex, setSelectedIndex] = useState(0)

  const sliderSettings = {
    infinite: true,
    speed: 500,
    centerMode: !isMobile,
    centerPadding: isMobile ? "0px" : "260px",
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };

  const modalSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedIndex,
    arrows: false,
    // autoplay: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    autoplaySpeed: 5000
  };

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    onOpen();
  };

  return (
    <Box
      as="section"
      py={{ base: 5, md: 16 }}
      bg="white"
      id="team"
      w="full"
    >
      {/* Section Title */}
      {!isMobile ?
        <Box textAlign="center" mb={20}>
          <Box position='relative' maxW="container.xl" px={4} mx="auto">
            <Divider borderWidth="1px" borderColor="black" />
            <AbsoluteCenter bg='white' px={12}>
              <Text
                fontSize="5rem"
                fontWeight="400"
                color="black"
                fontFamily="chalkboy"
                textAlign="center"
                whiteSpace={{ base: "normal", md: "nowrap" }}
                overflow="hidden"
              >
                TEAM BEHIND THE SHOW
              </Text>
            </AbsoluteCenter>
          </Box>
        </Box>
        :
        <Text
          fontSize={{ base: "2xl", md: "5rem" }}
          fontWeight="400"
          color="black"
          fontFamily="chalkboy"
          align="center"
          lineHeight="24px"
          mb={6}
        >
          TEAM BEHIND <br /> THE SHOW
        </Text>
      }

      {/* Carousel */}
      <Box position="relative" w="full" mb={{ base: 8, md: "unset" }}>
        <Slider {...sliderSettings} >
          {teamImages.map((image, index) => (
            <Box
              key={index}
              px={4}
              onClick={() => handleImageClick(index)}
              cursor="pointer"
            >
              <Box
                position="relative"
                h="250px"
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

        {!isMobile && (<IconButton
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
        />)}
        {!isMobile && (<IconButton
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
        />)}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="container.xl" isCentered>
        <ModalOverlay />
        <ModalContent boxShadow="none" borderRadius="lg" w="container.xl" overflow="hidden" bg="transparent" pt={5} pb={2}>
          <Box
            position="absolute"
            top="0"
            right="0"
            w="full"
            h="full"
            zIndex="1"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            color="black"
          >
            <ModalCloseButton
              color="white"
              bg="rgba(0, 0, 0, 0.6)"
              _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
            />
          </Box>

          <Box position="relative" w="full">
            <Slider {...modalSliderSettings} ref={sliderModalRef}>
              {teamImages.map((image, index) => (
                <Box key={index}>
                  <Image
                    src={image.src}
                    alt={`Gallery Image ${index + 1}`}
                    w="full"
                    h="80vh"
                    objectFit="contain"
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
              bg="rgba(255, 255, 255, 0.6)"
              color="black"
              _hover={{ bg: "rgba(255, 255, 255, 0.8)" }}
              borderRadius="full"
              onClick={() => sliderModalRef.current?.slickPrev()}
            />
            <IconButton
              aria-label="Next"
              icon={<FaChevronRight />}
              position="absolute"
              top="50%"
              right="5%"
              transform="translateY(-50%)"
              zIndex="10"
              bg="rgba(255, 255, 255, 0.6)"
              color="black"
              _hover={{ bg: "rgba(255, 255, 255, 0.8)" }}
              borderRadius="full"
              onClick={() => sliderModalRef.current?.slickNext()}
            />
          </Box>
        </ModalContent>
      </Modal >
    </Box>
  );
};

export default TeamSection;
