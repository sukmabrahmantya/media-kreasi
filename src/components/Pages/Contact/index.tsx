import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const ContactSection = () => {
  const email = process.env.NEXT_PUBLIC_EMAIL as string;
  const whatsapp = process.env.NEXT_PUBLIC_WA as string;
  const instagram = process.env.NEXT_PUBLIC_IG as string;
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;
  const gmaps_url = process.env.NEXT_PUBLIC_GMAPS_EMBED_URL as string;

  const addressLines = address.split(";");

  return (
    <Box
      as="section"
      pt={10}
      pb={14}
      id="contact"
      bg="#EFF4FE"
    >
      <Text
        fontSize="5rem"
        fontWeight="400"
        color="black"
        fontFamily="chalkboy"
        textAlign="center"
        mb={3}
      >
        CONTACT US
      </Text>

      <HStack
        spacing={10}
        mx="auto"
        border="1px solid #0367AB"
        borderRadius="20px"
        bg="white"
        p={8}
        alignItems="flex-start"
        w="container.xl"
      >
        {/* Left Section: Contact Details */}
        <VStack align="flex-start" spacing={5} w="50%">
          {/* Email */}
          <HStack spacing={5}>
            <FaEnvelope size={33} color="#FF9722" />
            <Text fontSize="xl" fontWeight={400}>{email}</Text>
          </HStack>

          {/* WhatsApp */}
          <HStack spacing={5}>
            <RiWhatsappFill size={33} color="#FF9722" />
            <Text fontSize="xl" fontWeight={400}>{whatsapp}</Text>
          </HStack>

          {/* Instagram */}
          <HStack spacing={5}>
            <RiInstagramFill size={33} color="#FF9722" />
            <Text fontSize="xl" fontWeight={400}>@{instagram}</Text>
          </HStack>

          {/* Address */}
          <HStack alignItems="flex-start" spacing={5}>
            <FaMapMarkerAlt size={33} color="#FF9722" />
            <Box>
              {addressLines.map((line, index) => (
                <Text key={index} fontSize="xl" fontWeight={400} lineHeight="23px">
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
            size="lg"
            color="white"
            onClick={() => {
              window.open("https://wa.me/6282148489605", "_blank");
            }}
          >
            Hubungi Sekarang
          </Button>
        </VStack>

        {/* Right Section: Map */}
        <Box
          w="50%"
          h="285px"
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
      </HStack>

      <Text
        mt={10}
        fontSize="xl"
        color="#0367AB"
        textAlign="center"
        fontWeight={400}
        fontFamily="arialBlack"
      >
        ©2025 Media Kreasi
      </Text>
    </Box>
  )
};


export default ContactSection;