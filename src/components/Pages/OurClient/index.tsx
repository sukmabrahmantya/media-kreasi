"use client";

import { clientImages } from "@/utils/images";
import { Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const OurClientSection = () => {
  const infiniteRow1 = [...clientImages.row1, ...clientImages.row1, ...clientImages.row1, ...clientImages.row1];
  const infiniteRow2 = [...clientImages.row2, ...clientImages.row2, ...clientImages.row2, ...clientImages.row2];

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
        fontSize={{ base: "3xl", md: "5rem" }}
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
