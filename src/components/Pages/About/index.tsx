"use client";

import { Box, Text, Image, Flex } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box
      as="section"
      position="relative"
      w="full"
      py={{ base: 5, md: 10 }}
      id="about"
      overflow="hidden"
    // bg="white"
    >
      <Box
        as="img"
        src="/svg/Mediakreasi.svg"
        position="absolute"
        top={5}
        left={0}
        w={{ base: "80px", md: "300px" }}
        h="auto"
        zIndex={-1}
        alt="Background Left"
      />

      <Box
        as="img"
        src="/svg/semi-circle.svg"
        position="absolute"
        top={{ base: "65%", md: "50%" }}
        right={0}
        w={{ base: "80px", md: "280px" }}
        h="auto"
        zIndex={-1}
        alt="Background Left"
      />

      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="full"
        h="320px"
        bg="#EFF4FE"
        clipPath="polygon(0 50%, 100% 100%, 0% 100%)"
        zIndex={-1}
      />

      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        px={{ base: 4, md: 6 }}
        gap={1}
        maxW="container.xl"

        mx="auto"
      >
        <Image
          src="/images/equipment.webp"
          alt="Media Kreasi Equipment"
          loading="lazy"
          w="full"
          maxW={{ base: "239px", md: "530px" }}
          h="auto"
          objectFit="contain"
        />

        <Text
          fontSize={{ base: "2xl", md: "5rem" }}
          fontWeight="400"
          color="black"
          fontFamily="chalkboy"
        >
          Hi.. We are MEDIA KREASI
        </Text>

        <Text
          display={{ base: "none", md: "block" }}
          fontSize={{ base: "xs", md: "xl" }}
          color="#303135"
          lineHeight={{ base: "14.4px", md: "20px" }}
          fontFamily="courier"
        >
          we are full service event production & provide event equipment,
          <br />
          company base in Semarang & Yogyakarta
          <br />
          experienced teamwork & skillfull man power.
        </Text>

        <Text
          display={{ base: "block", md: "none" }}
          fontSize={{ base: "xs", md: "xl" }}
          color="#303135"
          lineHeight={{ base: "14.4px", md: "20px" }}
          fontFamily="courier"
        >
          we are full service event production & provide
          <br />
          event equipment, company base in Semarang
          <br />
          & Yogyakarta. experienced teamwork
          <br />
          & skillfull man power.
        </Text>

      </Flex>
    </Box>
  );
};

export default AboutSection;
