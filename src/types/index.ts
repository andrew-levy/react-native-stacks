import { StyleProp, ViewStyle } from 'react-native';

export type Padding =
  | {
      leading?: number;
      top?: number;
      bottom?: number;
      trailing?: number;
      horizontal?: number;
      vertical?: number;
      all?: number;
    }
  | number;
export type HorizontalAlignment = 'leading' | 'center' | 'trailing';
export type VerticalAlignment = 'top' | 'center' | 'bottom';
export type Shadow = {
  color?: string;
  x?: number;
  y?: number;
  radius?: number;
  opacity?: number;
};
export type Frame = {
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
};
export type StackProps = {
  background?: string;
  alignment?: HorizontalAlignment;
  padding?: Padding;
  spacing?: number;
  frame?: Frame;
  fillSpace?: string;
  cornerRadius?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement<any> | React.ReactElement<any>[];
};
