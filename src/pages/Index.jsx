import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Road Explorer
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the most amazing roads around the world.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/road.jpg" alt="Scenic Road" borderRadius="md" />
        </Box>
        <Flex direction="column" align="center">
          <Button colorScheme="teal" size="lg" leftIcon={<FaRoad />}>
            Explore Now
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;