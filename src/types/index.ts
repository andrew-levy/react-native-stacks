import { StyleProp, ViewStyle } from "react-native";

type VStackAlignment = "leading" | "center" | "trailing";
type HStackAlignment = "top" | "center" | "bottom";
type ZStackAlignment =
  | "top"
  | "center"
  | "bottom"
  | "leading"
  | "trailing"
  | "topLeading"
  | "topTrailing"
  | "bottomLeading"
  | "bottomTrailing";

type StackProps = {
  spacing?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement<any> | React.ReactElement<any>[];
};

export type VStackProps = StackProps & {
  alignment?: VStackAlignment;
};

export type HStackProps = StackProps & {
  alignment?: HStackAlignment;
};

export type ZStackProps = Omit<StackProps, "spacing"> & {
  alignment?: ZStackAlignment;
};
