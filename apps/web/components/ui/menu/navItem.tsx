import { Link } from '@chakra-ui/next-js';
import { MenuItem } from '@web/types/nav.types';
import clsx from 'clsx';
import { Variant, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface PropsType extends MenuItem {
  index: number;
  isHover: boolean;
}

type VariantType = {
  [key: string]: Variant;
};

const variants: VariantType = {
  showText: {
    translateX: 0,
  },
  hideText: {
    translateX: -200,
    transition: {
      delay: 0,
    },
  },
};
const transition = {
  duration: 0.2,
  damping: 12,
  easing: 'easeInOut',
  borunce: 0.9,
  type: 'spring',
};

function NavItem({ isHover, index, ...props }: PropsType) {
  const classes = (className: string) => clsx(`Nav-${className}`);
  const { div: Div, p: P } = motion;
  const navigation = useRouter();
  const onClick = () => {
    console.log('click');
  };

  const bgTransition = (int: number) => {
    return {
      ...transition,
      delay: int * 0.09,
    };
  };
  return (
    <Link scrollBehavior={'smooth'} href={props.path} className={classes('Items')}>
      <Div
        className={classes('Icon-Bg')}
        layoutId="motion-icon-bg"
        whileHover={{
          borderRadius: '5px',
          width: '100px',
          transition: transition,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <props.icon className={classes('Icon-Item')} />
      </Div>
      <P
        className={classes('Icon-Label')}
        layoutId="motion-icon"
        animate={isHover ? 'showText' : 'hideText'}
        variants={variants}
        initial={'hideText'}
        transition={bgTransition(index + 1)}
      >
        {props.name}
      </P>
    </Link>
  );
}

export default NavItem;
