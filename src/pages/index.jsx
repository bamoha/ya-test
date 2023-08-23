import { Box, Container, Flex } from "@chakra-ui/react";
import AppTable from "../components/AppTable";
import dataSchema from "../tableSchema";
import * as data from "../serverResponse.json";

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
            <AppTable data={data} dataSchema={dataSchema} />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default IndexPage;
