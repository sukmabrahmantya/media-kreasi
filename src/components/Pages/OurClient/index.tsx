"use client";

import { Box, Text, Grid, GridItem, Image, HStack } from "@chakra-ui/react";

const clients = {
  row1: [
    { src: "/images/client/client-1.jpg", alt: "Client 1" },
    { src: "/images/client/client-2.png", alt: "Client 2" },
    { src: "/images/client/client-3.png", alt: "Client 3" },
    { src: "/images/client/client-4.png", alt: "Client 4" },
    { src: "/images/client/client-5.png", alt: "Client 5" },
  ],
  row2: [
    { src: "/images/client/client-6.jpeg", alt: "Client 6" },
    { src: "/images/client/client-7.png", alt: "Client 7" },
    { src: "/images/client/client-8.png", alt: "Client 8" },
    { src: "/images/client/client-9.png", alt: "Client 9" },
    { src: "/images/client/client-10.png", alt: "Client 10" },
    { src: "/images/client/client-11.png", alt: "Client 11" },
    { src: "/images/client/client-12.png", alt: "Client 12" },
  ],
  row3: [
    { src: "/images/client/client-13.png", alt: "Client 13" },
    { src: "/images/client/client-14.png", alt: "Client 14" },
    { src: "/images/client/client-15.JPG", alt: "Client 15" },
    { src: "/images/client/client-16.jpg", alt: "Client 16" },
    { src: "/images/client/client-17.png", alt: "Client 17" },
  ],
  row4: [
    { src: "/images/client/client-18.png", alt: "Client 18" },
    { src: "/images/client/client-19.JPG", alt: "Client 19" },
    { src: "/images/client/client-20.PNG", alt: "Client 20" },
    { src: "/images/client/client-21.png", alt: "Client 21" },
    { src: "/images/client/client-22.jpg", alt: "Client 22" },
    { src: "/images/client/client-23.png", alt: "Client 23" },
  ],
};

const OurClientSection = () => {
  return (
    <Box
      as="section"
      py={10}
      id="our-client"
      bg="white"
      px={4}
      w="container.xl"
    >

      <Text
        fontSize="5rem"
        fontWeight="400"
        color="black"
        fontFamily="chalkboy"
        textAlign="center"
        mb={3}
      >
        OUR CLIENT
      </Text>

      <HStack
        gap={8}
        w="full"
        alignItems="flex-end"
        justify="center"
        mx="auto"
        mb={8}
      >
        {clients.row1.map((client, index) => (
          <Box key={index} w="full">
            <Image
              src={client.src}
              alt={client.alt}
              w="100%"
              h="auto"
              objectFit="contain"
            />
          </Box>
        ))}
      </HStack>

      <HStack
        w="full"
        alignItems="flex-end"
        justify="center"
        justifyContent="space-between"
        mx="auto"
        mb={8}
      >
        {clients.row2.map((client, index) => (
          <Box key={index} h="full">
            <Image
              loading="lazy"
              src={client.src}
              alt={client.alt}
              w="auto"
              h="100px"
              objectFit="contain"
            />
          </Box>
        ))}
      </HStack>

      <HStack
        spacing={8}
        w="full"
        alignItems="flex-end"
        justify="center"
        mx="auto"
        mb={8}
      >
        {clients.row3.map((client, index) => (
          <Box key={index} w="full" >
            <Image
              loading="lazy"
              src={client.src}
              alt={client.alt}
              w="auto"
              h="100px"
              objectFit="contain"
            />
          </Box>
        ))}
      </HStack >

      <HStack
        w="full"
        alignItems="flex-end"
        justify="center"
        justifyContent="space-between"
        mx="auto"
      >
        {clients.row4.map((client, index) => (
          <Box key={index} h="full">
            <Image
              loading="lazy"
              src={client.src}
              alt={client.alt}
              w="auto"
              h="100px"
              objectFit="contain"
            />
          </Box>
        ))}
      </HStack>
    </Box >
  );
};

export default OurClientSection;
