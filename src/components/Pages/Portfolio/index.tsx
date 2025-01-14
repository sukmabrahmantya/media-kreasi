"use client";

import { Box, Text, Grid, GridItem, Image, Flex, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, IconButton } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider, { LazyLoadTypes } from "react-slick";

const generateGallery = (folder: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `/images/${folder}/${i + 1}.webp`);
};

const portfolioItems = [
  {
    title: "Live Event",
    src: "/images/tumb-live-event.webp",
    gallery: generateGallery("live-event", 22)
  },
  {
    title: "Gathering",
    src: "/images/tumb-gathering.webp",
    gallery: generateGallery("gathering", 8)
  },
  {
    title: "Exhibition",
    src: "/images/tumb-exhibition.webp",
    gallery: generateGallery("exhibition", 8)
  },
  {
    title: "Booth",
    src: "/images/tumb-booth.webp",
    gallery: generateGallery("booth", 9)
  },
  {
    title: "Backdrop",
    src: "/images/tumb-backdrop.webp",
    gallery: generateGallery("backdrop", 16)
  },
  {
    title: "3D Design",
    src: "/images/tumb-3d.webp",
    gallery: generateGallery("3d", 16)
  },
];

const PortfolioSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [hoverGallery, setHoverGallery] = useState<string[] | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const handleImageClick = (gallery: string[]) => {
    setCurrentGallery(gallery);
    onOpen();
  };

  const handleHover = (gallery: string[] | null) => {
    setHoverGallery(gallery);
  };

  const mainSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    autoplaySpeed: 5000
  };

  const hoverSliderSettings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "ondemand" as LazyLoadTypes,
  };

  return (
    <Box
      as="section"
      w="full"
      py={{ base: 5, md: 10 }}
      bg="white"
      id="portfolio"
      px={4}
    >
      {/* Section Title */}
      <Text
        fontSize={{ base: "2xl", md: "5rem" }}
        fontWeight="400"
        color="black"
        fontFamily="chalkboy"
        textAlign="center"
        mb={4}
      >
        OUR WORK PORTFOLIO
      </Text>

      {/* Portfolio Grid */}
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)", // 1 column for small screens
          md: "repeat(2, 1fr)",  // 2 columns for medium screens
          lg: "repeat(3, 1fr)",  // 3 columns for large screens
        }}
        gap={{ base: 4, md: 6 }}
        mx="auto"
        maxW="container.xl"
      >
        {portfolioItems.map((item, index) => (
          <GridItem
            key={index}
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            boxShadow="lg"
            _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
            onClick={() => handleImageClick(item.gallery)}
            cursor="pointer"
            onMouseEnter={() => handleHover(item.gallery)}
            onMouseLeave={() => handleHover(null)}
          >
            {hoverGallery === item.gallery ? (
              <Slider {...hoverSliderSettings}>
                {item.gallery.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`${item.title} - ${idx + 1}`}
                    loading="lazy"
                    w="full"
                    h="auto"
                    objectFit="cover"
                  />
                ))}
              </Slider>
            ) : (
              // Image 
              <Image
                src={item.src}
                alt={item.title}
                loading="lazy"
                w="full"
                h="auto"
                objectFit="cover"
              />
            )}

            {/* Title Overlay */}
            < Flex
              position="absolute"
              top={{ base: 1, md: 5 }}
              left={0}
              w="full"
              color="white"
              py={2}
              justify="center"
              opacity={0.8}
              align="center"
            >
              <Text
                fontSize={{ base: "xs", md: "2xl" }}
                fontWeight="400"
                textAlign="center"
                fontFamily="arialBlack"
                textTransform="uppercase"
              >
                {item.title}
              </Text>
            </Flex>

            {/* See More Label */}
            <Flex
              position="absolute"
              bottom={{ base: 1, md: 8 }}
              left={0}
              w="full"
              color="white"
              py={2}
              justify="center"
              align="center"
              opacity={0.8}
            >
              <Text
                fontSize={{ base: "xs", md: "xl" }}
                textAlign="center"
                fontFamily="heading"
                textTransform="lowercase"
              // _hover={{ textDecoration: "underline" }}
              >
                See More
              </Text>
            </Flex>
          </GridItem>
        ))
        }
      </Grid >

      {/* Modal for Gallery */}
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
            <Slider {...mainSliderSettings} ref={sliderRef}>
              {currentGallery.map((image, index) => (
                <Box key={index}>
                  <Image
                    src={image}
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
              bg="rgba(255, 255, 255, 0.6)"
              color="black"
              _hover={{ bg: "rgba(255, 255, 255, 0.8)" }}
              borderRadius="full"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </Box>
        </ModalContent>
      </Modal >
    </Box >
  );
};

export default PortfolioSection;
