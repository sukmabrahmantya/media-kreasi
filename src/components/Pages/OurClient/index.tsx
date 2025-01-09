"use client";

import { Box, Text, Grid, GridItem, Image, HStack, useBreakpointValue, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

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
  const isMobile = useBreakpointValue({ base: true, md: false });
  const combinedRow1 = [...clients.row1, ...clients.row3];
  const combinedRow2 = [...clients.row2, ...clients.row4];
  const infiniteRow1 = [...combinedRow1, ...combinedRow1];
  const infiniteRow2 = [...combinedRow2, ...combinedRow2];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      as="section"
      py={{ base: 5, md: 10 }}
      id="our-client"
      bg="white"
      px={{ base: 0, md: 4 }}
      overflow="hidden"
    >

      <Text
        fontSize={{ base: "2xl", md: "5rem" }}
        fontWeight="400"
        color="black"
        fontFamily="chalkboy"
        textAlign="center"
        mb={3}
      >
        OUR CLIENT
      </Text>

      {isMobile ? (
        isClient && (
          <>
            <Box
              display="flex"
              animation="scroll 15s linear infinite"
              whiteSpace="nowrap"
              mb={4}
            >
              {infiniteRow1.map((client, index) => (
                <Box
                  key={index}
                  mx={3}
                  flexShrink={0}
                  display="inline-block"
                  w="auto"
                  alignSelf="flex-end"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    w="100%"
                    h="67px"
                    objectFit="contain"
                  />
                </Box>
              ))}
            </Box>

            <Box
              display="flex"
              animation="scroll 20s linear infinite"
              whiteSpace="nowrap"
            >
              {infiniteRow2.map((client, index) => (
                <Box
                  key={index}
                  mx={3}
                  flexShrink={0}
                  display="inline-block"
                  h="67px"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    w="auto"
                    h="full"
                    objectFit="contain"
                  />
                </Box>
              ))}
            </Box>
          </>
        )
      ) : (
        // Desktop: Row-based grid
        <VStack spacing={8}>
          {Object.values(clients).map((row, rowIndex) => (
            <HStack
              key={rowIndex}
              spacing={8}
              w="full"
              justifyContent="space-between"
            >
              {row.map((client, index) => (
                <Box
                  key={index}
                  h={rowIndex % 2 == 0 ? "full" : "auto"}
                  w={rowIndex % 2 !== 0 ? "auto" : "full"}
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    w="100%"
                    h="100px"
                    objectFit="contain"
                  />
                </Box>
              ))}
            </HStack>
          ))}
        </VStack>
      )}
    </Box >
  );
};

export default OurClientSection;
