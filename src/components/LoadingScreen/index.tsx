import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import { useState, useEffect, FC } from "react";

interface ILoadingParams {
  delay?: number
}

const LoadingScreen: FC<ILoadingParams> = ({ delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="white"
      zIndex="9999"
      display="flex"
      alignItems="center"
      justifyContent="center"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease"
      pointerEvents={isVisible ? "all" : "none"}
    >
      <Center position="relative">
        <Image
          src="/images/LOGO.png"
          alt="Logo"
          w={70}
          h={70}
          className="breathing-animation"
          zIndex="3"
        />

        {/* Spinners */}
        <Spinner
          w={130}
          h={130}
          thickness="6px"
          color="#0367AB"
          position="absolute"
          animation="spin 1.2s linear infinite"
        />
        <Spinner
          w={110}
          h={110}
          thickness="6px"
          color="#FF9722"
          position="absolute"
          animation="spin 1.2s linear infinite reverse"
          style={{ transform: "scale(1.3)" }}
        />
        <Spinner
          w={150}
          h={150}
          thickness="6px"
          color="#FEE801"
          position="absolute"
          animation="spin 1.5s linear infinite"
          style={{ transform: "scale(1.6)" }}
        />
      </Center>
    </Box>
  );
};

export default LoadingScreen;
