"use client";

import { Box, Text, IconButton, Image, Divider, AbsoluteCenter, useBreakpointValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

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
  const [initialSlide, setInitialSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRefTumb = useRef<HTMLButtonElement>(null);
  const nextRefTumb = useRef<HTMLButtonElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });


  const handleImageClick = (index: number) => {
    setInitialSlide(index); // Set the initial slide index
    onOpen();
  };

  return (
    <Box
      as="section"
      pt={{ base: 5, md: 10 }}
      pb={2}
      bg="white"
      id="team"
      w="full"
    >
      {/* Section Title */}
      {!isMobile ?
        <Box textAlign="center" mb={16}>
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
      <Box position="relative" w="100vw">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={isMobile ? 2 : 4}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
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
          {teamImages.map((image, idx) => (
            <SwiperSlide
              key={idx}
              style={{ cursor: "pointer" }}
              onClick={() => handleImageClick(idx)}
            >
              <Image
                src={image.src}
                alt={`${image.alt} - ${idx + 1}`}
                loading="lazy"
                className="swiper-lazy"
                w="full"
                h={isMobile ? "100px" : "200px"}
                objectFit="cover"
              />
              <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
          ))}

          <Box
            className="custom-swiper-pagination"
            mt={12}
            position="relative"
            display="flex"
            justifyContent="center"
            zIndex="10"
          />

          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft />}
            position="absolute"
            top="calc(50% - 1.25rem)"
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
            top="calc(50% - 1.25rem)"
            right="15"
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
              modules={[EffectFade, Thumbs]}
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
              {teamImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image.src}
                    alt={`${image.alt} - ${index + 1}`}
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
                prevEl: prevRefTumb.current,
                nextEl: nextRefTumb.current,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = prevRefTumb.current;
                swiper.params.navigation.nextEl = nextRefTumb.current;
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              loop
              style={{ height: "15vh", marginTop: 10, position: "relative" }}
            >
              {teamImages.map((image, index) => (
                <SwiperSlide key={index} onClick={() => thumbsSwiper.slideTo(index)}>
                  <Image
                    src={image.src}
                    alt={`${image.alt} - ${index + 1}`}
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
                ref={prevRefTumb}
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
                ref={nextRefTumb}
              />
            </Swiper>
          </Box>
        </ModalContent>
      </Modal >
    </Box>
  );
};

export default TeamSection;