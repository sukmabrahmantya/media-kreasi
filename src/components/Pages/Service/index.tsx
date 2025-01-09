import { Box, Text, VStack, Image, UnorderedList, ListItem, useDisclosure, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

const ServiceSection = () => {
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
      {/* Title */}
      <Text
        fontSize={{ base: "2xl", md: "5rem" }}
        fontWeight="400"
        color="black"
        fontFamily="chalkboy"
        align="center"
      >
        WE PROVIDE BEST SERVICE
      </Text>

      {/* Service Layout */}
      <Box
        mx="auto"
        maxW="container.xl"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        {/* Left Section: Event & Experiential */}
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
            <ListItem>Conference, expo, seminar gathering</ListItem>
          </UnorderedList>
        </VStack>

        {/* Center Image */}
        <Image
          src="/images/equipment-2.webp"
          alt="Equipment"
          borderRadius="md"
          w="full"
          maxW="500px"
          // maxW="530px"
          h="auto"
        />

        {/* Right Section: Technical & Equipment */}
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

        {/* Bottom Section: Design & Build */}
        <VStack
          align="flex-start"
          spacing={3}
          w="380px"
          mt={4}
          textAlign="left"
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
        {/* Center Image */}
        <Image
          src="/images/equipment-2.webp"
          mx="auto"
          alt="Equipment"
          borderRadius="md"
          w="full"
          maxW="239px"
          h="auto"
          mb={4}
        />

        <Accordion allowToggle>
          {/* Event & Experiential */}
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

          {/* Technical & Equipment */}
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

          {/* Design & Build */}
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

    </Box>
  );
};

export default ServiceSection;
