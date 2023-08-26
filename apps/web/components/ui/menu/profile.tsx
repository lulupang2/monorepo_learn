import { Container, useColorMode } from '@chakra-ui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { LuMoonStar } from 'react-icons/lu';
const transition = {
  duration: 0.2,
  damping: 12,
  easing: 'easeInOut',
  borunce: 0.9,
  type: 'spring',
};

function Profile() {
  const classes = (className: string) => clsx(`Nav-${className}`);
  const { div: Div, p: P } = motion;
  const { toggleColorMode } = useColorMode();
  return (
    <Container whiteSpace={'nowrap'} className={classes('Items')} pt={'20px'}>
      <Div
        className={classes('Icon-Bg')}
        whileHover={{
          borderRadius: '5px',
          width: '100px',
          transition: transition,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <LuMoonStar className={classes('Icon-Item')} onClick={toggleColorMode} />
      </Div>
    </Container>
  );
}

export default Profile;
