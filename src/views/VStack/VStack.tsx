import React from 'react';
import { View } from 'react-native';
import { StackProps } from '../../types';
import { getPadding } from '../../utils/padding';
import { getAlignment } from '../../utils/alignments';
import { getFrame } from '../../utils/frame';

export const VStack = ({
  background,
  spacing,
  alignment,
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
          ...getAlignment(alignment, 'horizontal'),
          ...getFrame(frame),
          ...getPadding(padding),
        },
        style,
      ]}
    >
      {spacing && spacing !== 0
        ? React.Children.map(children, (child) => (
            <>
              <View style={{ height: spacing }} />
              {child}
              <View style={{ height: spacing }} />
            </>
          ))
        : children}
    </View>
  );
};
