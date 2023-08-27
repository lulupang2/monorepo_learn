import { type ThemeConfig, extendTheme } from '@chakra-ui/react';
import * as Components from './components';

const conponents = {
  ...Components,
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'black',
      },
    },
  },
  components: {
    ...conponents,
  },
});

export default customTheme;
