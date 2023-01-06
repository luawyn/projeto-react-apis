import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        textAlign="center"
        py={10}
        px={6}
        maxW={"1440px"}
        bg="#4d4d4d"
        margin="0 auto"
        height="100vh"
        paddingTop={40}
        fontFamily="Poppins"
      >
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2} color="white" fontWeight="bold">
          Page Not Found
        </Text>
        <Text color={"white"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          onClick={() => goToHomePage(navigate)}
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Box>
    </>
  );
}
