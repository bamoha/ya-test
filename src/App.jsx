import { ChakraProvider } from "@chakra-ui/react";
import IndexPage from "./pages";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <IndexPage />
    </ChakraProvider>
  );
}

export default App;
