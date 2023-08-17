"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { Center, ChakraProvider, extendTheme, Grid } from "@chakra-ui/react";
import Header from "@web/components/Header";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Center
          minH={"100vh"}
          height={"0px"}
          paddingY={[0, "5em"]}
          bgGradient="linear(to-b, teal.500, green.500)"
          backdropFilter="auto"
        >
          <Grid
            bg="whiteAlpha.900"
            w={["100dvw", "100em"]}
            h={"100%"}
            boxShadow={"dark-lg"}
          >
            <Header />
            {children}
          </Grid>
        </Center>
      </ChakraProvider>
    </CacheProvider>
  );
}
const breakpoints = ["45em", "75em", "100em"];

const theme = extendTheme({
  breakpoints,
});
