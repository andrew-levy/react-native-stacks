export const ALIGNMENT_MAP = {
  center: "center",
  leading: "flex-start",
  trailing: "flex-end",
} as const;

export const ZSTACK_ALIGNMENT_MAP = {
  center: { justifyContent: "center", alignItems: "center" },
  leading: { justifyContent: "center", alignItems: "flex-start" },
  trailing: { justifyContent: "center", alignItems: "flex-end" },
  top: { justifyContent: "flex-start", alignItems: "center" },
  bottom: { justifyContent: "flex-start", alignItems: "center" },
  topLeading: { justifyContent: "flex-start", alignItems: "flex-start" },
  topTrailing: { justifyContent: "flex-start", alignItems: "flex-end" },
  bottomLeading: { justifyContent: "flex-end", alignItems: "flex-start" },
  bottomTrailing: { justifyContent: "flex-end", alignItems: "flex-end" },
} as const;
