import { Box, Text, VStack, Image, UnorderedList, ListItem, useDisclosure, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

const ServiceSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      as="section"
      pt={{ base: 5, md: 10 }}
      pb={{ base: 5, md: 12 }}
      bg="#EFF4FE"
      position="relative"
      id="service"
      w="full"
      px={4}
      mx="auto"
    >
      <Text
        fontSize={{ base: "2xl", md: "5rem" }}
        fontWeight="400"
        color="black"
        fontFamily="chalkboy"
        align="center"
      >
        WE PROVIDE BEST SERVICE
      </Text>

      <Box
        mx="auto"
        maxW="container.xl"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        columnGap={10}
        rowGap={2}
      >
        <VStack
          align="flex-start"
          spacing={3}
          w="330px"
          alignSelf="flex-start"
          mt={6}
        >
          <Text
            fontSize="4xl"
            fontWeight={700}
            color="#0367AB"
            textTransform="uppercase"
            lineHeight="41px"
            fontFamily="arial"
          >
            Event & Experiential
          </Text>
          <UnorderedList color="#0367AB" fontSize="xl" lineHeight="23px">
            <ListItem>Live event, concert</ListItem>
            <ListItem>Virtual event</ListItem>
            <ListItem>Conference, expo, seminar gathering.</ListItem>
          </UnorderedList>
        </VStack>

        <Box position="relative" maxW="400px">
          <Skeleton
            isLoaded={isLoaded}
            borderRadius="md"
            w="full"
            maxW="400px"
            h="auto"
          >
            <Image
              src="/images/equipment-2.webp"
              alt="Equipment"
              borderRadius="md"
              w="full"
              maxW="400px"
              h="auto"
              onLoad={() => setIsLoaded(true)}
            />
          </Skeleton>

          <Image
            src="/svg/left-line.svg"
            alt="Left Line"
            position="absolute"
            bottom="22%"
            left="-60%"
            w="275px"
          />

          <Image
            src="/svg/right-line.svg"
            alt="Right Line"
            position="absolute"
            top="17%"
            right="-52%"
            w="200px"
          />

          <Image
            src="/svg/bottom-line.svg"
            alt="Bottom Line"
            position="absolute"
            bottom="-22%"
            left="21%"
            transform="translateX(-50%)"
            h="100px"
          />

        </Box>

        <VStack
          align="flex-start"
          spacing={3}
          w="375px"
          mt={16}
        >
          <Text
            fontSize="4xl"
            fontWeight={700}
            color="#0367AB"
            textTransform="uppercase"
            lineHeight="41px"
            fontFamily="arial"
          >
            Technical & Equipment
          </Text>
          <UnorderedList color="#0367AB" fontSize="xl" lineHeight="23px">
            <ListItem>Soundsystem</ListItem>
            <ListItem>Lighting, LED screen, genset</ListItem>
            <ListItem>Rigging truss</ListItem>
          </UnorderedList>
        </VStack>

        <VStack
          align="flex-start"
          spacing={3}
          w="380px"
          mt={4}
          textAlign="left"
          ml={40}
        >
          <Text
            fontSize="4xl"
            fontWeight={700}
            color="#0367AB"
            textTransform="uppercase"
            lineHeight="41px"
            fontFamily="arial"
          >
            Design & Build
          </Text>
          <UnorderedList color="#0367AB" fontSize="xl" lineHeight="23px">
            <ListItem>Booth & backdrop production</ListItem>
            <ListItem>3D modeling</ListItem>
          </UnorderedList>
        </VStack>
      </Box>

      <Box
        display={{ base: "block", md: "none" }}
        mt={4}
      >
        <Skeleton
          isLoaded={isLoaded}
          borderRadius="md"
          w="full"
          maxW="200px"
          h="auto"
          mx="auto"
        >
          <Image
            src="/images/equipment-2.webp"
            mx="auto"
            alt="Equipment"
            borderRadius="md"
            w="full"
            maxW="200px"
            h="auto"
            mb={4}
            onLoad={() => setIsLoaded(true)}
          />
        </Skeleton>

        <Accordion allowToggle>
          <AccordionItem border="none">
            <h2>
              <AccordionButton color="#0367AB">
                <Box flex="1" textAlign="left">
                  <Text
                    fontSize="md"
                    fontFamily="arial"
                    fontWeight="700"
                  >
                    Event & Experiential
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              <UnorderedList color="#0367AB" fontSize="sm" lineHeight="21px">
                <ListItem>Live event, concert</ListItem>
                <ListItem>Virtual event</ListItem>
                <ListItem>Conference, expo, seminar gathering</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem borderColor="#94BFDC">
            <h2>
              <AccordionButton color="#0367AB">
                <Box flex="1" textAlign="left">
                  <Text
                    fontSize="md"
                    fontFamily="arial"
                    fontWeight="700"
                  >
                    Technical & Equipment
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              <UnorderedList color="#0367AB" fontSize="sm" lineHeight="21px">
                <ListItem>Soundsystem</ListItem>
                <ListItem>Lighting, LED screen, genset</ListItem>
                <ListItem>Rigging truss</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem borderColor="#94BFDC">
            <h2>
              <AccordionButton color="#0367AB">
                <Box flex="1" textAlign="left">
                  <Text
                    fontSize="md"
                    fontFamily="arial"
                    fontWeight="700"
                  >
                    Design & Build
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              <UnorderedList color="#0367AB" fontSize="sm" lineHeight="21px">
                <ListItem>Booth & backdrop production</ListItem>
                <ListItem>3D modeling</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

    </Box >
  );
};

export default ServiceSection;
