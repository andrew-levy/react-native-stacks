import React from 'react';
import { View } from 'react-native';
import { StackProps } from '../../types';
import { getPadding } from '../../utils/padding';
import { getFrame } from '../../utils/frame';

export const ZStack = ({
  background,
  cornerRadius = 0,
  padding,
  frame,
  style,
  children,
}: StackProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: background,
          justifyContent: 'center',
          borderRadius: cornerRadius,
          ...getFrame(frame),
          ...getPadding(padding),
        },
        style,
      ]}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          ...child.props,
          style: { zIndex: i, position: 'absolute' },
        })
      )}
    </View>
  );
};
