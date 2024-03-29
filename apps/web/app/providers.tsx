'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalLayoutProvider from '@web/components/layout/globalLayout';
import customTheme from '@web/styles/theme/theme';

const queryClient = new QueryClient();
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CacheProvider>
        <ChakraProvider theme={customTheme}>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />

          <GlobalLayoutProvider>{children}</GlobalLayoutProvider>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
const breakpoints = ['45em', '75em', '100em'];
