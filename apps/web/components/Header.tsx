'use client';

import { Box, Center, Flex, HStack } from '@chakra-ui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Header({ classes, hidden }: { classes: string; hidden: boolean }) {
  const { div: Div } = motion;

  return (
    <Div className={classes}>
      <Box w={'200px'} bg="orange">
        타이틀
      </Box>
      <Box bg="blue.400" flex={1}>
        1
      </Box>
      <Box w="200px" bg="green.400">
        아이콘
      </Box>
    </Div>
  );
}

export default Header;
