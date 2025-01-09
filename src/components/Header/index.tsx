"use client";

import { Box, Flex, Link, Image, Heading, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Menu, MenuButton, MenuList, MenuItem, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [isHome, setIsHome] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isLargerThanMd && isOpen) {
      onClose()
    }
  }, [isLargerThanMd, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsHome(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={10}
      bg={isHome ? "transparent" : "#AED2EA"}
      transition="background-color 0.3s ease"
      boxShadow={isHome ? "none" : "sm"}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
        px={4}
        py={{ base: 2, md: 4 }}
        color="white"
      >
        {/* Logo */}
        <Image
          src="/images/Mediakreasi.PNG"
          alt="Logo"
          height={{ base: "26px", md: "56px" }}
          objectFit="contain"
        />

        {/* Menu */}
        <Flex gap={6} display={{ base: "none", md: "flex" }}>
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

        {/* Hamburger Menu for mobile */}
        <Menu isOpen={isOpen} onClose={onClose} autoSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdMenu size={20} />}
            display={{ base: "flex", md: "none" }}
            bg="transparent"
            color="white"
            _hover={{ bg: "gray.700" }}
            onClick={onOpen}
          />
          <MenuList
            p={3}
            color="black"
            zIndex="1000"
            position="absolute"
            top="-12"
            right="-10"
            mt="0"
          >
            <Box display="flex" justifyContent="flex-end" mb={2}>
              <IconButton
                size="sm"
                aria-label="Close Menu"
                icon={<MdClose size={20} />} // Replace with your preferred close icon
                bg="transparent"
                _hover={{ bg: "gray.200" }}
                onClick={onClose}
              />
            </Box>
            {["Home", "About", "Service", "Portfolio", "Contact"].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active"
                onSetActive={onClose}
              >
                <MenuItem
                  key={item}
                  onClick={onClose}
                >
                  <Heading
                    fontSize="md"
                    fontWeight={400}
                    textTransform="uppercase"
                    cursor="pointer"
                    _hover={{
                      color: "#0367AB",
                    }}
                  >
                    {item}
                  </Heading>
                </MenuItem>
              </ScrollLink>
            ))}
          </MenuList>
        </Menu>
      </Flex>


    </Box>
  );
};

export default Header;
