import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  useBreakpointValue,
  Divider,
  AbsoluteCenter,
  Icon,
} from "@chakra-ui/react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

const ContactSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="footer"
      bg="#043A60"
      py={10}
      px={{ base: 4, md: 10 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Looper */}
      <Image
        src="/svg/looper.svg"
        alt="Background Looper"
        position="absolute"
        top="50%"
        right="50%"
        transform="translate(50%, -50%)"
        zIndex={0}
        w={{ base: "80%", md: "40%" }}
        opacity={0.2}
      />

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="space-between"
        gap={{ base: 10, md: 16 }}
        position="relative"
        zIndex={1}
      >
        {/* Left: Logo */}
        <VStack
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          alignSelf="center"
        >
          <Image
            src="/svg/logo.svg"
            alt="Media Kreasi Logo"
            w={{ base: "150px", md: "521px" }}
            h="auto"
          />
        </VStack>

        {/* Center: Information */}
        <VStack
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          color="white"
          fontSize={{ base: "md", md: "xl" }}
        >
          <Text fontWeight="bold" fontFamily="arialBlack" fontSize={{ base: "md", md: "xl" }}>
            Information
          </Text>
          {["Home", "About", "Service", "Portfolio", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active"
            >
              <Text
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                fontFamily="heading"
                fontSize={{ base: "md", md: "xl" }}
              >
                {item}
              </Text>

            </ScrollLink>
          ))}
        </VStack>

        {/* Right: Contact Details */}
        <VStack
          align={{ base: "flex-start", md: "flex-start" }}
          spacing={5}
          color="white"
          fontSize={{ base: "md", md: "xl" }}
        >
          <Text fontWeight="bold" fontFamily="arialBlack" fontSize={{ base: "md", md: "xl" }}>
            Contact Us
          </Text>

          {/* Email */}
          <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
            <Icon as={FaEnvelope} boxSize={{ base: 5, md: 6 }} />
            <Text fontFamily="heading" textAlign={{ base: "center", md: "left" }}>
              eventmediakreasi@gmail.com
            </Text>
          </HStack>

          {/* WhatsApp */}
          <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
            <Icon as={RiWhatsappFill} boxSize={{ base: 5, md: 6 }} />
            <Text fontFamily="heading" textAlign={{ base: "center", md: "left" }}>
              +62 821 4848 9605
            </Text>
          </HStack>

          {/* Instagram */}
          <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
            <Icon as={RiInstagramFill} boxSize={{ base: 5, md: 6 }} />
            <Text fontFamily="heading" textAlign={{ base: "center", md: "left" }}>
              mediakreasi_
            </Text>
          </HStack>

          {/* Address */}
          <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
            <Icon as={FaMapMarkerAlt} boxSize={{ base: 5, md: 6 }} />
            <Text fontFamily="heading" textAlign={{ base: "center", md: "left" }}>
              Semarang & Yogyakarta
            </Text>
          </HStack>

          {/* Button */}
          <Button
            colorScheme="white"
            borderRadius="16px"
            fontWeight="semibold"
            variant="outline"
            size={{ base: "md", md: "lg" }}
            // color="white"
            _hover={{
              borderColor: "gray",
              color: "gray"
            }}
            fontSize={{ base: "xs", md: "xl" }}
            onClick={() => {
              window.open("https://wa.me/6282148489605", "_blank");
            }}
          >
            Contact Now
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      {!isMobile ? (
        <Box textAlign="center" mt={14}>
          <Box position="relative" mx="auto">
            <Divider borderWidth="2px" borderColor="white" />
            <AbsoluteCenter bg="#043A60" px={12}>
              <Text
                color="white"
                fontSize={{ base: "md", md: "xl" }}
                fontFamily="arialBlack"
                textAlign="center"
              >
                ©2025 Media Kreasi
              </Text>
            </AbsoluteCenter>
          </Box>
        </Box>
      ) : (
        <Text
          color="white"
          fontSize={{ base: "xs", md: "lg" }}
          mt={7}
          fontFamily="arialBlack"
          textAlign="center"
        >
          ©2025 Media Kreasi
        </Text>
      )}
    </Box>
  );
};

export default ContactSection;
