import { StyleProp, ViewStyle } from "react-native";

export const AlignmentMap: {
  [key: string]: { [key: string]: StyleProp<ViewStyle> };
} = {
  vstack: {
    leading: { alignItems: "flex-start" },
    center: { alignItems: "center" },
    trailing: { alignItems: "flex-end" },
  },
  hstack: {
    top: { alignItems: "flex-start" },
    center: { alignItems: "center" },
    bottom: { alignItems: "flex-end" },
  },
  zstack: {
    center: { justifyContent: "center", alignItems: "center" },
    leading: { justifyContent: "center", alignItems: "flex-start" },
    trailing: { justifyContent: "center", alignItems: "flex-end" },
    top: { justifyContent: "flex-start", alignItems: "center" },
    bottom: { justifyContent: "flex-end", alignItems: "center" },
    topLeading: { justifyContent: "flex-start", alignItems: "flex-start" },
    topTrailing: { justifyContent: "flex-start", alignItems: "flex-end" },
    bottomLeading: { justifyContent: "flex-end", alignItems: "flex-start" },
    bottomTrailing: { justifyContent: "flex-end", alignItems: "flex-end" },
  },
} as const;
