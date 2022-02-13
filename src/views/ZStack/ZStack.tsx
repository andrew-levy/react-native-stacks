import React from "react";
import { View } from "react-native";
import { ZSTACK_ALIGNMENT_MAP } from "../../constants";
import { ZStackProps } from "../../types";

export const ZStack = ({
  alignment = "center",
  style,
  children,
}: ZStackProps) => {
  return (
    <View style={[{ ...ZSTACK_ALIGNMENT_MAP[alignment] }, style]}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          ...child.props,
          style: {
            zIndex: i,
            position:
              i === 1 || React.Children.count(children) === 1
                ? "relative"
                : "absolute",
          },
        })
      )}
    </View>
  );
};
