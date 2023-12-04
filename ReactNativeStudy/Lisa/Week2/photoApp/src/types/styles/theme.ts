import {typo, palette} from 'styles';

export type TypeOfTheme = {
  typo: TypeOfTypo;
  palette: TypeOfPalette;
};

export const theme: TypeOfTheme = {
  typo,
  palette,
};

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof theme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;
