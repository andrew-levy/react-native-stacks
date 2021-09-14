import React, { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { ALIGNMENT_MAP } from '../../constants';
import { ZStackProps } from '../../types';

export const ZStack = ({
  alignment = { vertical: 'center', horizontal: 'center' },
  style,
  children,
}: ZStackProps) => {
  const [maxDimensions, setMaxDimensions] = useState({ width: 0, height: 0 });
  return (
    <View
      style={[
        {
          justifyContent: ALIGNMENT_MAP[alignment.vertical],
          alignItems: ALIGNMENT_MAP[alignment.horizontal],
          width: maxDimensions.width,
          height: maxDimensions.height,
        },
        style,
      ]}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          ...child.props,
          style: {
            zIndex: i,
            position: i === 1 ? 'relative' : 'absolute',
          },
          onLayout: (event: LayoutChangeEvent) => {
            const { width, height } = event.nativeEvent.layout;
            if (width > maxDimensions.width) {
              setMaxDimensions((prev) => ({ ...prev, width }));
            }
            if (height > maxDimensions.height) {
              setMaxDimensions((prev) => ({ ...prev, height }));
            }
          },
        })
      )}
    </View>
  );
};
