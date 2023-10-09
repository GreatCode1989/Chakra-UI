import {
  Flex,
  Heading,
  VStack,
  useColorMode,
  IconButton,
  Link,
  Spacer,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.500">
          React-Chakra UI
        </Heading>

        <Spacer></Spacer>
        <Link
          href="https://www.linkedin.com/in/anatoliy-trizna-451340287/"
          isExternal
        >
          <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
        </Link>
        <Link href="https://www.instagram.com/saviour198928/" isExternal>
          <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
        </Link>
        <Link
          href="https://github.com/GreatCode1989?tab=repositories"
          isExternal
        >
          <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
        </Link>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
