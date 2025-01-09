import { Box, Button, Grid, GridItem, HStack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const ContactSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const email = process.env.NEXT_PUBLIC_EMAIL as string;
  const whatsapp = process.env.NEXT_PUBLIC_WA as string;
  const instagram = process.env.NEXT_PUBLIC_IG as string;
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;
  const gmaps_url = process.env.NEXT_PUBLIC_GMAPS_EMBED_URL as string;

  const addressLines = address.split(";");

  return (
    <Box
      as="section"
      pt={{ base: 5, md: 10 }}
      pb={{ base: 5, md: 14 }}
      id="contact"
      bg="#EFF4FE"
      px={4}
      w="full"
    >
      {!isMobile && (<Text
        fontSize={{ base: "2xl", md: "5rem" }}
        fontWeight="400"
        color="black"
        fontFamily="chalkboy"
        textAlign="center"
        mb={3}
      >
        CONTACT US
      </Text>)}

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 6, md: 10 }}
        mx="auto"
        maxW="container.xl"
        bg="white"
        border={{ base: "none", md: "1px solid #0367AB" }}
        borderRadius={{ base: "8px", md: "20px" }}
        p={{ base: 6, md: 8 }}
        alignItems="flex-start"
      >
        {/* Left Section: Contact Details */}
        {isMobile && (<GridItem>
          <Text
            fontSize={{ base: "2xl", md: "5rem" }}
            fontWeight="400"
            color="black"
            fontFamily="chalkboy"
            textAlign="center"
          >
            CONTACT US
          </Text>
        </GridItem>)}

        <GridItem>
          <VStack align="flex-start" spacing={{ base: 4, md: 5 }}>
            {/* Email */}
            <HStack spacing={{ base: 3, md: 4 }}>
              <FaEnvelope size={isMobile ? 16 : 28} color="#FF9722" />
              <Text fontSize={{ base: "xs", md: "xl" }} fontWeight={400}>
                {email}
              </Text>
            </HStack>

            {/* WhatsApp */}
            <HStack spacing={{ base: 3, md: 4 }}>
              <RiWhatsappFill size={isMobile ? 16 : 28} color="#FF9722" />
              <Text fontSize={{ base: "xs", md: "xl" }} fontWeight={400}>
                {whatsapp}
              </Text>
            </HStack>

            {/* Instagram */}
            <HStack spacing={{ base: 3, md: 4 }}>
              <RiInstagramFill size={isMobile ? 16 : 28} color="#FF9722" />
              <Text fontSize={{ base: "xs", md: "xl" }} fontWeight={400}>
                @{instagram}
              </Text>
            </HStack>

            {/* Address */}
            <HStack alignItems="flex-start" spacing={{ base: 3, md: 4 }}>
              <FaMapMarkerAlt size={isMobile ? 16 : 28} color="#FF9722" />
              <Box>
                {addressLines.map((line, index) => (
                  <Text
                    key={index}
                    fontSize={{ base: "xs", md: "xl" }}
                    fontWeight={400}
                    lineHeight={{ base: "13.5px", md: "23px" }}
                  >
                    {line}
                  </Text>
                ))}
              </Box>
            </HStack>

            {/* Button */}
            <Button
              colorScheme="yellow"
              borderRadius="16px"
              fontWeight="semibold"
              bg="#0367AB"
              size={{ base: "md", md: "lg" }}
              color="white"
              fontSize={{ base: "xs", md: "xl" }}
              onClick={() => {
                window.open("https://wa.me/6282148489605", "_blank");
              }}
            >
              Hubungi Sekarang
            </Button>
          </VStack>
        </GridItem>

        {/* Right Section: Map */}
        <GridItem>
          <Box
            w="full"
            h={{ base: "200px", md: "285px" }}
          >
            <iframe
              src={gmaps_url}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Box>
        </GridItem>
      </Grid>

      <Text
        mt={{ base: 5, md: 10 }}
        fontSize={{ base: "xs", md: "xl" }}
        color="#0367AB"
        textAlign="center"
        fontWeight={400}
        fontFamily="arialBlack"
      >
        ©2025 Media Kreasi
      </Text>
    </Box >
  )
};


export default ContactSection;
      // <HStack
      //   spacing={{ base: 6, md: 10 }}
      //   mx="auto"
      //   maxW="container.xl"
      //   border="1px solid #0367AB"
      //   borderRadius="20px"
      //   bg="white"
      //   p={8}
      //   alignItems="flex-start"
      // >
      //   {/* Left Section: Contact Details */}
      //   <VStack align="flex-start" spacing={5} w="50%">
      //     {/* Email */}
      //     <HStack spacing={5}>
      //       <FaEnvelope size={33} color="#FF9722" />
      //       <Text fontSize="xl" fontWeight={400}>{email}</Text>
      //     </HStack>

      //     {/* WhatsApp */}
      //     <HStack spacing={5}>
      //       <RiWhatsappFill size={33} color="#FF9722" />
      //       <Text fontSize="xl" fontWeight={400}>{whatsapp}</Text>
      //     </HStack>

      //     {/* Instagram */}
      //     <HStack spacing={5}>
      //       <RiInstagramFill size={33} color="#FF9722" />
      //       <Text fontSize="xl" fontWeight={400}>@{instagram}</Text>
      //     </HStack>

      //     {/* Address */}
      //     <HStack alignItems="flex-start" spacing={5}>
      //       <FaMapMarkerAlt size={33} color="#FF9722" />
      //       <Box>
      //         {addressLines.map((line, index) => (
      //           <Text key={index} fontSize="xl" fontWeight={400} lineHeight="23px">
      //             {line}
      //           </Text>
      //         ))}
      //       </Box>
      //     </HStack>

      //     {/* Button */}
      //     <Button
      //       colorScheme="yellow"
      //       borderRadius="16px"
      //       fontWeight="semibold"
      //       bg="#0367AB"
      //       size="lg"
      //       color="white"
      //       onClick={() => {
      //         window.open("https://wa.me/6282148489605", "_blank");
      //       }}
      //     >
      //       Hubungi Sekarang
      //     </Button>
      //   </VStack>

      //   {/* Right Section: Map */}
      //   <Box
      //     w="50%"
      //     h="285px"
      //   >
      //     <iframe
      //       src={gmaps_url}
      //       width="100%"
      //       height="100%"
      //       style={{ border: 0, borderRadius: "20px" }}
      //       allowFullScreen={true}
      //       loading="lazy"
      //     ></iframe>
      //   </Box>
      // </HStack>