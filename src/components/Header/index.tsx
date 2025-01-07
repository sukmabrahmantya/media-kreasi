"use client";

import { Box, Flex, Link, Image, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling

const Header = () => {
  const [isHome, setIsHome] = useState(true);

  // Change header background based on scroll position or route
  useEffect(() => {
    const handleScroll = () => {
      setIsHome(window.scrollY < 50); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={10}
      bg={isHome ? "transparent" : "#AED2EA"} // Change background
      transition="background-color 0.3s ease"
      boxShadow={isHome ? "none" : "sm"} // Add shadow if not home
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
        p={4}
        color="white"
      >
        {/* Logo */}
        <Image
          src="/images/Mediakreasi.PNG"
          alt="Logo"
          height="56px"
          objectFit="contain"
        />

        {/* Menu */}
        <Flex gap={6}>
          {["Home", "About", "Service", "Portfolio", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
            >
              <Heading
                fontSize="2xl"
                fontWeight={700}
                textTransform="uppercase"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
                _activeLink={{
                  textDecoration: "underline",
                  color: "yellow.400",
                  borderBottom: "2px solid yellow", // Decorative bottom border
                }}
              >
                {item}
              </Heading>
            </ScrollLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
