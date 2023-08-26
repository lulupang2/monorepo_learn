import { create } from 'zustand';
type ThemeState = {
  theme: boolean;
};
type ThemeActions = {
  setToggleTheme: (state: boolean) => void;
};

export const useThemeStore = create<ThemeState & ThemeActions>(set => ({
  theme: true,
  setToggleTheme: (state: boolean) => set(() => ({ theme: !state })),
}));

type LayoutProps = {
  isNavHover: boolean;
  OffsetY: number;
  setToggleNav: (state: boolean) => void;
  setOffsetY: (state: number) => void;
};

export const useLayoutStore = create<LayoutProps>(set => ({
  isNavHover: false,
  OffsetY: 0,
  setToggleNav: (state: boolean) => set(() => ({ isNavHover: !state })),
  setOffsetY: (state: number) => set(() => ({ OffsetY: state })),
}));
