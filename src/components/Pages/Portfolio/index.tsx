"use client";

import { Box, Text, Grid, GridItem, Image, Flex, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Thumbs, FreeMode, Scrollbar } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { portfolioImages } from "@/utils/images";
import LoadingScreen from "@/components/LoadingScreen";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const PortfolioSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [initialSlide, setInitialSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });


  const handleImageClick = (gallery: string[], index: number) => {
    setCurrentGallery(gallery);
    setInitialSlide(index);
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
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: 4, md: 6 }}
        mx="auto"
        maxW="container.xl"
      >
        {portfolioImages.map((item, index) => {
          const [isHovering, setIsHovering] = useState(false);
          const [isSwiperReady, setIsSwiperReady] = useState(false);

          const handleMouseEnter = () => {
            if (!isMobile) {
              setIsHovering(true);
              Promise.all(
                item.gallery.map((src) => {
                  const img = new window.Image();
                  img.src = src;
                  return new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve;
                  });
                })
              ).then(() => {
                setIsSwiperReady(true);
              });
            }
          };

          const handleMouseLeave = () => {
            setIsHovering(false);
            setIsSwiperReady(false);
          };

          return (
            <GridItem
              key={index}
              position="relative"
              overflow="hidden"
              borderRadius="xl"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleImageClick(item.gallery, 0)}
              cursor="pointer"
            >
              {/* Hover Slider */}
              {isHovering && isSwiperReady ? (
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 1000, disableOnInteraction: false }}
                  loop
                  effect={'fade'}
                  style={{ width: "100%", height: "100%" }}
                >
                  {item.gallery.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <Image
                        src={src}
                        alt={`${item.title} - ${idx + 1}`}
                        loading="lazy"
                        className="swiper-lazy"
                        w="full"
                        h="auto"
                        objectFit="cover"
                      />
                      <LoadingScreen delay={100} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // Default Thumbnail
                <Box>
                  <Image
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    w="full"
                    h="auto"
                    objectFit="cover"
                    className="swiper-lazy"
                  />
                </Box>
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
                  fontSize={{ base: "sm", md: "2xl" }}
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
                bottom={{ base: 2, md: 8 }}
                left={0}
                w="full"
                color="white"
                py={2}
                justify="center"
                align="center"
                opacity={0.8}
              >
                <Text
                  fontSize={{ base: "sm", md: "xl" }}
                  textAlign="center"
                  fontFamily="heading"
                  textTransform="lowercase"
                >
                  See More
                </Text>
              </Flex>
            </GridItem>
          )
        }
        )}
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
              effect={'fade'}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              loop
              modules={[EffectFade, Thumbs, Navigation]}
              style={{ position: "relative" }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
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

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={isMobile ? 3 : 6}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Scrollbar]}
              scrollbar={{ draggable: true }}
              className="mySwiper"
              style={{
                height: "10vh",
                marginTop: 10,
              }}
            >
              {currentGallery.map((image, index) => (
                <SwiperSlide key={index} onClick={() => thumbsSwiper.slideTo(index)}>
                  <Box
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </ModalContent>
      </Modal>
    </Box >
  );
};

export default PortfolioSection;
