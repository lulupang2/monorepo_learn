import React from 'react';
import { IconType } from 'react-icons';

export type MenuItem = {
  name: string;
  component: React.ReactNode;
  id: string;
  path: string;
  icon: IconType;
};
