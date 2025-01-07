"use client";

import { Box, Text, Grid, GridItem, Image, Flex } from "@chakra-ui/react";

const portfolioItems = [
  { title: "Live Event", src: "/images/tumb-live-event.png" },
  { title: "Gathering", src: "/images/tumb-gathering.png" },
  { title: "Exhibition", src: "/images/tumb-exhibition.png" },
  { title: "Booth", src: "/images/tumb-booth.png" },
  { title: "Backdrop", src: "/images/tumb-backdrop.png" },
  { title: "3D Design", src: "/images/tumb-3d.png" },
];

const PortfolioSection = () => {
  return (
    <Box
      as="section"
      w="full"
      py={10}
      bg="white"
      id="portfolio"
    >
      {/* Section Title */}
      <Text
        fontSize="5rem"
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
          base: "repeat(1, 1fr)", // 1 column for small screens
          md: "repeat(2, 1fr)",  // 2 columns for medium screens
          lg: "repeat(3, 1fr)",  // 3 columns for large screens
        }}
        gap={6}
        px={6}
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
          >
            {/* Image */}
            <Image
              src={item.src}
              alt={item.title}
              loading="lazy"
              w="full"
              h="auto"
              objectFit="cover"
            />

            {/* Title Overlay */}
            <Flex
              position="absolute"
              bottom={8}
              left={0}
              w="full"
              color="white"
              py={2}
              justify="center"
              align="center"
            >
              <Text
                fontSize="2xl"
                fontWeight="400"
                textAlign="center"
                fontFamily="arialBlack"
                textTransform="uppercase"
              >
                {item.title}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;
