import React from 'react';
import { View } from 'react-native';
import { ALIGNMENT_MAP } from '../../constants';
import { ZStackProps } from '../../types';

export const ZStack = ({
  alignment = { vertical: 'center', horizontal: 'center' },
  style,
  children,
}: ZStackProps) => {
  return (
    <View
      style={[
        {
          justifyContent: ALIGNMENT_MAP[alignment.vertical],
          alignItems: ALIGNMENT_MAP[alignment.horizontal],
          alignSelf: 'center',
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
        })
      )}
    </View>
  );
};
