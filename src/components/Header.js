import {
  Circle,
  Stack,
  useColorMode,
  useMediaQuery,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16}>
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Anatoliy Trizna
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            I work with HTML, CSS, SCSS, SASS, TAILWIND, Bootstrap,
            JS, TS, VUE 3, VUEX, Nuxt, NODE
            .js, REST API,
             FIREBASE, Git / GitHub, WordPress 🗣
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open("https://tabletki.ua/uk/reserve/history/")
            }
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          m={10}
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://www.artwall.ru/files/cache/33/239333/400.jpg"
        />
      </Flex>
    </Stack>
  );
}
