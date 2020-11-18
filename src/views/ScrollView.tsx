import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';

type ScrollViewProps = {
  direction?: 'vertical' | 'horizontal';
};

export const ScrollView: React.FC<ScrollViewProps> = ({
  children,
  direction,
}) => {
  return (
    <RNScrollView horizontal={direction === 'horizontal'}>
      {children}
    </RNScrollView>
  );
};
