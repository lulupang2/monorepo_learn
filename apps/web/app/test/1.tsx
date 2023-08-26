'use client';
import { Button, Container } from '@chakra-ui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Page = () => {
  const eyeRef = useRef<(HTMLDivElement | null)[]>([]);
  const mouseMoveHandler = (event: MouseEvent) => {
    const eyes = eyeRef.current;
    eyes.forEach(function (eye) {
      if (!eye) return;
      let eyeWidth = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let eyeHeight = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - eyeWidth, event.pageY - eyeHeight);
      let rot = radian * (190 / Math.PI) * -1 + 280;
      eye.style.transform = 'rotate(' + rot + 'deg)';
    });
  };
  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  });
  const classes = (text: string) => clsx(`Error-NotFound-${text}`);
  const { div: Div } = motion;

  return (
    <Div className={classes('Container')}>
      <Div className={classes('Face')}>
        <Div className={classes('Eyes')}>
          <Div className={classes('Eye')} ref={e => (eyeRef.current[0] = e)} />
          <Div className={classes('Eye')} ref={e => (eyeRef.current[1] = e)} />
          {/* </Div> */}
          {/* <Div className={classes('Eyes')} ref={e => (eyeRef.current[1] = e)} /> */}
        </Div>
        <Div className={classes('Mouth')} />
      </Div>
      <Div className={classes('Text')}>
        <Div className={classes('Text-404')}>404</Div>
        <Div className={classes('Text-NotFound')}>Page Not Found</Div>
        <Div className={classes('Return')}>
          <Link href={'/'}>
            <Button>Return</Button>
          </Link>
        </Div>
      </Div>
    </Div>
  );
};

export default Page;
