import About from '@web/components/elements/about';
import Project from '@web/components/elements/project';
import Skill from '@web/components/elements/skill';
import Work from '@web/components/elements/work';
import { TiDocumentText, TiPen, TiSpannerOutline, TiUserOutline } from 'react-icons/ti';
//뎁스 수정
export const NAV_MENU_LIST: any[] = [
  {
    name: 'About Me',
    component: <About />,
    id: 'about',
    path: '#about',
    icon: TiUserOutline,
  },

  {
    name: 'Skill',
    component: <Skill />,
    id: 'skill',
    path: '#skill',
    icon: TiPen,
  },
  {
    name: 'Project',
    component: <Project />,
    id: 'project',
    path: '#project',
    icon: TiDocumentText,
  },

  {
    name: 'Work',
    component: <Work />,
    id: 'work',
    path: '#work',
    icon: TiSpannerOutline,
  },
  {
    name: '임시',
    component: <Work />,
    id: 'work',
    path: '#',
    icon: TiSpannerOutline,
  },
];
