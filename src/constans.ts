import { SETTING_ARRAY_TYPE } from "./types";

export const SETTING_ARRAY: SETTING_ARRAY_TYPE[] = [
  {
    name: "Position",
    array: [
      "top-left",
      "top-right",
      "top-center",
      "bottom-left",
      "bottom-right",
      "bottom-center",
    ],
  },
  {
    name: "Type",
    array: ["info", "success", "warning", "error", "default"],
  },
  {
    name: "Theme",
    array: ["light", "dark", "colored"],
  },
];

export const TRANSITION_ARRAY = ["bounce", "slide", "zoom", "flip"];
