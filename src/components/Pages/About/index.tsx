"use client";

import { Box, Text, Image, Flex } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box
      as="section"
      position="relative"
      w="full"
      py={10}
      id="about"
    >
      <Box
        as="img"
        src="/svg/Mediakreasi.svg"
        position="absolute"
        top={5}
        left={0}
        w="300px"
        h="auto"
        zIndex={-1}
        alt="Background Left"
      />

      <Box
        as="img"
        src="/images/semi-circle.png"
        position="absolute"
        top="50%"
        right={0}
        w="170px"
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
        px={6}
        gap={2}
        maxW="container.xl"
        mx="auto"
      >
        <Image
          src="/images/equipment.png"
          alt="Media Kreasi Equipment"
          loading="lazy"
          w="full"
          maxW="530px"
          h="auto"
          objectFit="contain"
        />

        <Text
          fontSize="5rem"
          fontWeight="400"
          color="black"
          fontFamily="chalkboy"
        >
          Hi.. We are MEDIA KREASI
        </Text>

        <Text
          fontSize="xl"
          color="#303135"
          lineHeight="20px"
          fontFamily="courier"
        >
          we are full service event production & provide event equipment,
          <br />
          company base in Semarang & Yogyakarta.
          <br />
          experienced teamwork & skillfull man power.
        </Text>

      </Flex>
    </Box>
  );
};

export default AboutSection;
