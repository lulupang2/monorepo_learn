import { Container, Flex } from '@chakra-ui/react';
import clsx from 'clsx';
import React from 'react';
import { NavMenuLayout } from '../ui/menu';

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = (className: string) => clsx(`Main-${className}`);

  return (
    <Flex className={classes('Container')} as="main">
      <NavMenuLayout classes={classes('Aside')} />
      <Container className={classes('Content')}>{children}</Container>
      <Container className={classes('Footer')}>푸터</Container>
    </Flex>
  );
};

export default GlobalLayout;
