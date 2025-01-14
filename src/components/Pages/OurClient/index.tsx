"use client";

import { Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const clients = {
  row1: [
    { src: "/images/client/client-1.jpg", alt: "Client 1" },
    { src: "/images/client/client-2.png", alt: "Client 2" },
    { src: "/images/client/client-3.png", alt: "Client 3" },
    { src: "/images/client/client-4.png", alt: "Client 4" },
    { src: "/images/client/client-5.png", alt: "Client 5" },
    { src: "/images/client/client-13.png", alt: "Client 13" },
    { src: "/images/client/client-14.png", alt: "Client 14" },
    { src: "/images/client/client-15.JPG", alt: "Client 15" },
    { src: "/images/client/client-16.jpg", alt: "Client 16" },
    { src: "/images/client/client-17.png", alt: "Client 17" },
  ],
  row2: [
    { src: "/images/client/client-6.jpeg", alt: "Client 6" },
    { src: "/images/client/client-7.png", alt: "Client 7" },
    { src: "/images/client/client-8.png", alt: "Client 8" },
    { src: "/images/client/client-9.png", alt: "Client 9" },
    { src: "/images/client/client-10.png", alt: "Client 10" },
    { src: "/images/client/client-11.png", alt: "Client 11" },
    { src: "/images/client/client-12.png", alt: "Client 12" },
    { src: "/images/client/client-18.png", alt: "Client 18" },
    { src: "/images/client/client-19.JPG", alt: "Client 19" },
    { src: "/images/client/client-20.PNG", alt: "Client 20" },
    { src: "/images/client/client-21.png", alt: "Client 21" },
    { src: "/images/client/client-22.jpg", alt: "Client 22" },
    { src: "/images/client/client-23.png", alt: "Client 23" },
  ],
};

const OurClientSection = () => {
  const infiniteRow1 = [...clients.row1, ...clients.row1, ...clients.row1, ...clients.row1];
  const infiniteRow2 = [...clients.row2, ...clients.row2, ...clients.row2, ...clients.row2];

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
      mb={5}
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

      {isClient && (
        <>
          <Box
            display="flex"
            animation="scroll2 15s linear infinite"
            whiteSpace="nowrap"
            mb={6}
          >
            {infiniteRow1.map((client, index) => (
              <Box
                key={index}
                mx={{ base: 2, md: 3 }}
                flexShrink={0}
                display="inline-block"
                w={{ base: "120px", md: "190px" }}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  w="auto"
                  h={{ base: "67px", md: "110px" }}
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
                mx={{ base: 2, md: 6 }}
                flexShrink={0}
                display="inline-block"
                h={{ base: "67px", md: "110px" }}
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
      )}
    </Box >
  );
};

export default OurClientSection;
