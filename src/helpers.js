import tinycolor2 from 'tinycolor2';

export const getForegroundColor = (color) => {
  return tinycolor2.mostReadable(color, ['#000', '#fff']).toHexString();
};
