import { Box, Flex, SkipNavContent, useColorModeValue } from '@chakra-ui/react';
import clsx from 'clsx';
import React from 'react';

const Layout = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  const classes = (className: string) => clsx(`Section-${className}`);

  return (
    <Flex className={classes(`Container`)} as={'section'} id={id}>
      {children}
    </Flex>
  );
};

export default Layout;
