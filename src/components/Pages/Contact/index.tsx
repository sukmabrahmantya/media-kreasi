import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Divider,
  AbsoluteCenter,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

const ContactSection = () => {
  const email = process.env.NEXT_PUBLIC_EMAIL as string;
  const whatsapp = process.env.NEXT_PUBLIC_WA as string;
  const instagram = process.env.NEXT_PUBLIC_IG as string;
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;

  return (
    <Box
      as="footer"
      bg="#043A60"
      py={{ base: 6, md: 10 }}
      px={{ base: 4, md: 10 }}
      position="relative"
      overflow="hidden"
      id="contact"
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

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 6, md: 16 }}
        position="relative"
        zIndex={1}
        alignItems="flex-start"
      >
        {/* Left: Logo */}
        <GridItem alignSelf="center">
          <Image
            src="/svg/logo.svg"
            alt="Media Kreasi Logo"
            maxW={{ base: "192px", md: "521px" }}
            h="auto"
          />
        </GridItem>

        {/* Right: Information and Contact Details */}
        <GridItem>
          <Grid
            templateColumns="1fr 1fr"
            gap={{ base: 2, md: 10 }}
          >
            {/* Center: Information */}
            <VStack
              align="flex-start"
              spacing={2}
              color="white"
              fontSize={{ base: "sm", md: "xl" }}
            >
              <Text
                fontWeight="bold"
                fontFamily="arialBlack"
                fontSize={{ base: "md", md: "xl" }}
              >
                Information
              </Text>
              {["Home", "About", "Service", "Portfolio", "Contact"].map(
                (item) => (
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
                    >
                      {item}
                    </Text>
                  </ScrollLink>
                )
              )}
            </VStack>

            {/* Right: Contact Details */}
            <VStack
              align={{ base: "flex-start", md: "flex-start" }}
              spacing={4}
              color="white"
              fontSize={{ base: "sm", md: "xl" }}
            >
              <Text
                fontWeight="bold"
                fontFamily="arialBlack"
                fontSize={{ base: "md", md: "xl" }}
              >
                Contact Us
              </Text>

              {/* Email */}
              <HStack
                spacing={4}
                justify={{ base: "center", md: "flex-start" }}
              >
                <Icon as={FaEnvelope} boxSize={{ base: 5, md: 6 }} />
                <Text
                  fontFamily="heading"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {email}
                </Text>
              </HStack>

              {/* WhatsApp */}
              <HStack
                spacing={4}
                justify={{ base: "center", md: "flex-start" }}
              >
                <Icon as={RiWhatsappFill} boxSize={{ base: 5, md: 6 }} />
                <Text
                  fontFamily="heading"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {whatsapp}
                </Text>
              </HStack>

              {/* Instagram */}
              <HStack
                spacing={4}
                justify={{ base: "center", md: "flex-start" }}
              >
                <Icon as={RiInstagramFill} boxSize={{ base: 5, md: 6 }} />
                <Text
                  fontFamily="heading"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {instagram}
                </Text>
              </HStack>

              {/* Address */}
              <HStack
                spacing={4}
                justify={{ base: "center", md: "flex-start" }}
              >
                <Icon as={FaMapMarkerAlt} boxSize={{ base: 5, md: 6 }} />
                <Text
                  fontFamily="heading"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {address}
                </Text>
              </HStack>

              {/* Button */}
              <Button
                colorScheme="white"
                borderRadius="16px"
                fontWeight="semibold"
                variant="outline"
                size={{ base: "md", md: "lg" }}
                fontSize={{ base: "xs", md: "xl" }}
                _hover={{
                  borderColor: "gray",
                  color: "gray",
                }}
                onClick={() => {
                  window.open("https://wa.me/6282148489605", "_blank");
                }}
              >
                Contact Now
              </Button>
            </VStack>
          </Grid>
        </GridItem>
      </Grid>

      <Box textAlign="center" mt={8}>
        <Box position="relative" mx="auto">
          <Divider borderWidth="1px" borderColor="white" />
          <AbsoluteCenter bg="#043A60" px={{ base: 4, md: 12 }}>
            <Text
              color="white"
              fontSize={{ base: "xs", md: "md" }}
              fontFamily="arialBlack"
              textAlign="center"
              whiteSpace={{ base: "normal", md: "nowrap" }}
              overflow="hidden"
            >
              ©2025 Media Kreasi
            </Text>
          </AbsoluteCenter>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
