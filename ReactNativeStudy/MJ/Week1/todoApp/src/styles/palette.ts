const palette = {
  Orange: '#FF8f50',
  Gray: '#F5F5F5',
  Green: '#57BB73',
  DarkGray: '#888888',
  Blue: '#5061FF',
  Black: '#000000',
  Purple: '#C750FF',
  White: '#FFFFFF',
  Pink: '#FF7474',
} as const;

export type KeyofPalette = keyof typeof palette;

export default palette;
