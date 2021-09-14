import { StyleProp, ViewStyle } from 'react-native';

type Alignment = 'leading' | 'center' | 'trailing';

type StackProps = {
  spacing?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement<any> | React.ReactElement<any>[];
};

export type VStackProps = StackProps & {
  alignment?: Alignment;
};

export type HStackProps = StackProps & {
  alignment?: Alignment;
};

export type ZStackProps = Omit<StackProps, 'spacing'> & {
  alignment?: {
    vertical: Alignment;
    horizontal: Alignment;
  };
};
