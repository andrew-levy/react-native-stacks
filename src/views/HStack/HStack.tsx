import React from 'react';
import { FlexAlignType, View } from 'react-native';
import { HorizontalAlignment, StackProps } from '../../types';
import { getPadding } from '../../utils/padding';
import { getAlignment } from '../../utils/alignments';
import { getFrame } from '../../utils/frame';

export const HStack = ({
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
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: background,
          borderRadius: cornerRadius,
          ...getAlignment(alignment, 'vertical'),
          ...getFrame(frame),
          ...getPadding(padding),
        },
        style,
      ]}
    >
      {spacing && spacing !== 0
        ? React.Children.map(children, (child) => (
            <>
              <View style={{ width: spacing }} />
              {child}
              <View style={{ width: spacing }} />
            </>
          ))
        : children}
    </View>
  );
};
