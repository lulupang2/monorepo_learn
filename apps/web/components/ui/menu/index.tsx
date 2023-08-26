import { Flex, VStack, useBoolean } from '@chakra-ui/react';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import { MenuItem } from '@web/types/nav.types';
import { Variant, motion } from 'framer-motion';
import Footer from './footer';
import Profile from './profile';
import { NAV_MENU_LIST } from '@web/constants/navmenu';
import NavItem from './navItem';
type NavLayoutType = {
  classes: string;
};
type VariantType = {
  [key: string]: Variant;
};
const variants: VariantType = {
  expended: {},
  none: {
    translateX: -100,
  },
};
const MENUS = NAV_MENU_LIST;
export function NavMenuLayout({ classes }: NavLayoutType) {
  const [isHover, setHover] = useBoolean();

  return (
    <VStack
      as={motion.aside}
      className={classes}
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
      whileHover={{ width: '150px' }}
    >
      <Profile />
      <Flex className="Nav-Container" userSelect={'none'}>
        {MENUS.map((item: MenuItem, index) => (
          <NavItem isHover={isHover} index={index} {...item} key={index} />
        ))}
      </Flex>
      <Footer />
    </VStack>
  );
}
