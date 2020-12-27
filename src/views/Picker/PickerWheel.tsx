import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  multiply,
  cos,
  sub,
  asin,
  divide,
} from 'react-native-reanimated';
import { useValue, translateZ } from 'react-native-redash/lib/module/v1';
import MaskedView from '@react-native-community/masked-view';

import GestureHandler from './GestureHandler';
import { VISIBLE_ITEMS, ITEM_HEIGHT } from './Constants';
import { UIColor } from '../../themes/colors';
import { PickerProps } from '.';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    overflow: 'hidden',
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 24,
    lineHeight: ITEM_HEIGHT,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
const perspective = 600;
const RADIUS_REL = VISIBLE_ITEMS * 0.5;
const RADIUS = RADIUS_REL * ITEM_HEIGHT;

const PickerWheel = ({ items, selection, onSelect }: PickerProps) => {
  useEffect(() => console.log(selection), [selection]);
  const translateY = useValue(0);
  const maskElement = (
    <Animated.View style={{ transform: [{ translateY }] }}>
      {items.map((v, i) => {
        const y = interpolate(
          divide(sub(translateY, ITEM_HEIGHT * 2), -ITEM_HEIGHT),
          {
            inputRange: [i - RADIUS_REL, i, i + RADIUS_REL],
            outputRange: [-1, 0, 1],
            extrapolate: Extrapolate.CLAMP,
          }
        );
        const rotateX = asin(y);
        const z = sub(multiply(RADIUS, cos(rotateX)), RADIUS);
        return (
          <Animated.View
            key={i}
            style={[
              styles.item,
              {
                transform: [
                  { perspective },
                  { rotateX },
                  translateZ(perspective, z),
                ],
              },
            ]}
          >
            <Text style={styles.label}>{v}</Text>
          </Animated.View>
        );
      })}
    </Animated.View>
  );
  return (
    <View style={styles.container}>
      <MaskedView {...{ maskElement }}>
        <View
          style={{
            height: ITEM_HEIGHT * 2,
            backgroundColor: UIColor.systemGray3,
          }}
        />
        <View style={{ height: ITEM_HEIGHT, backgroundColor: UIColor.black }} />
        <View
          style={{
            height: ITEM_HEIGHT * 2,
            backgroundColor: UIColor.systemGray3,
          }}
        />
      </MaskedView>
      <View style={StyleSheet.absoluteFill}>
        <View
          style={{
            borderColor: UIColor.systemGray4,
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            top: ITEM_HEIGHT * 2,
            height: ITEM_HEIGHT,
          }}
        />
      </View>
      <GestureHandler
        max={items.length}
        value={translateY}
        onSelect={onSelect}
        selection={selection}
      />
    </View>
  );
};

export default PickerWheel;
