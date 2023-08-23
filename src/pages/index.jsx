import { Box, Container, Flex } from "@chakra-ui/react";
import AppTable from "../components/AppTable";

const IndexPage = () => {
  return (
    <Container
      maxW="container.lg"
      background={"white"}
      py={"10"}
      borderRadius={"lg"}
    >
      <Flex minH={"100vh"}>
        <Box width={"100%"}>
          <Box overflow="scroll" maxW={"1000px"}>
            <AppTable/>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default IndexPage;
