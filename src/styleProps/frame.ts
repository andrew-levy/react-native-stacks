import { Frame } from '../types/stylePropTypes';

// TODO: units
export const getFrameFromProps = (frame: Frame) => {
  const fullWidth = 'width: 100%;';
  if (frame) {
    let styles = '';
    Object.keys(frame).forEach((key) => {
      if (typeof frame[key] === 'number') styles += `${key}: ${frame[key]};`;
      else if (typeof frame[key] === 'string')
        styles += frame[key] === 'infinity' ? 'flex: 1;' : '';
    });
    if (!Object.keys(frame).includes('width')) styles += fullWidth;
    return styles;
  }
  return fullWidth;
};