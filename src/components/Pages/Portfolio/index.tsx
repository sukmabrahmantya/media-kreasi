"use client";

import { Box, Text, Grid, GridItem, Image, Flex, Spinner, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const generateGallery = (folder: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `/images/${folder}/${i + 1}.webp`);
};

const portfolioItems = [
  {
    title: "Live Event",
    src: "/images/tumb-live-event.webp",
    gallery: generateGallery("live-event", 22),
  },
  {
    title: "Gathering",
    src: "/images/tumb-gathering.webp",
    gallery: generateGallery("gathering", 8),
  },
  {
    title: "Exhibition",
    src: "/images/tumb-exhibition.webp",
    gallery: generateGallery("exhibition", 8),
  },
  {
    title: "Booth",
    src: "/images/tumb-booth.webp",
    gallery: generateGallery("booth", 9),
  },
  {
    title: "Backdrop",
    src: "/images/tumb-backdrop.webp",
    gallery: generateGallery("backdrop", 16),
  },
  {
    title: "3D Design",
    src: "/images/tumb-3d.webp",
    gallery: generateGallery("3d", 16),
  },
];

const PortfolioSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoverGallery, setHoverGallery] = useState<string[] | null>(null);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [initialSlide, setInitialSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });


  const handleImageClick = (gallery: string[], index: number) => {
    setCurrentGallery(gallery);
    setInitialSlide(index); // Set the initial slide index
    onOpen();
  };

  return (
    <Box as="section" w="full" py={{ base: 5, md: 10 }} bg="white" id="portfolio" px={4}>
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
          base: "repeat(2, 1fr)", // 2 columns for small screens
          md: "repeat(3, 1fr)",  // 3 columns for medium/large screens
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
            onMouseEnter={() => setHoverGallery(item.gallery)}
            onMouseLeave={() => setHoverGallery(null)}
            onClick={() => handleImageClick(item.gallery, 0)}
            cursor="pointer"
          >
            {/* Hover Slider */}
            {hoverGallery === item.gallery ? (
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop
                effect={'fade'}
                pagination={{ clickable: false }}
                style={{ width: "100%", height: "100%" }}
              >
                {item.gallery.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={src}
                      alt={`${item.title} - ${idx + 1}`}
                      loading="lazy"
                      w="full"
                      h="auto"
                      objectFit="cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Default Thumbnail
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
              >
                See More
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      {/* Modal for Gallery */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setThumbsSwiper(null);
          onClose()
        }}
        size="container.xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent boxShadow="none" borderRadius="lg" w="container.md" overflow="hidden" bg="white" p={4}>

          <Box position="relative" w="container">
            {/* Swiper for Modal Gallery */}
            <Swiper
              initialSlide={initialSlide}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              effect={'fade'}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              loop
              modules={[EffectFade, Autoplay, Thumbs]}
              style={{ position: "relative" }}
            >
              <Box
                position="absolute"
                top="0"
                right="0"
                w="full"
                h="full"
                zIndex="10"
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
              {currentGallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    w="full"
                    h="full"
                    objectFit="contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={isMobile ? 3 : 6}
              freeMode={true}
              watchSlidesProgress={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              style={{ height: "15vh", marginTop: 10, position: "relative" }}
            >
              {currentGallery.map((image, index) => (
                <SwiperSlide key={index} onClick={() => thumbsSwiper.slideTo(index)}>
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    w="full"
                    h="full"
                    objectFit="cover"
                    cursor="pointer"
                  />
                </SwiperSlide>
              ))}
              <IconButton
                aria-label="Previous"
                icon={<FaChevronLeft />}
                position="absolute"
                top="50%"
                left="5"
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
                right="5"
                transform="translateY(-50%)"
                zIndex="10"
                bg="rgba(0, 0, 0, 0.6)"
                color="white"
                _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
                borderRadius="full"
                ref={nextRef}
              />
            </Swiper>
          </Box>
        </ModalContent>
      </Modal>
    </Box >
  );
};

export default PortfolioSection;
