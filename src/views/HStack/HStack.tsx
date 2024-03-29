import React from "react";
import { StyleSheet, View } from "react-native";
import { AlignmentMap } from "../../constants";
import { HStackProps } from "../../types";

export const HStack = ({
  spacing,
  alignment = "center",
  style,
  children,
}: HStackProps) => {
  return (
    <View style={[styles.hStack, AlignmentMap.hstack[alignment], style]}>
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

const styles = StyleSheet.create({
  hStack: {
    flexDirection: "row",
  },
});
