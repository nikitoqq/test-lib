export interface SETTING_ARRAY_TYPE {
  name: string;
  array: string[];
}

export interface toastObjectType {
  position:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  autoClose: string;
  theme: "light" | "dark" | "colored";
  transition: "bounce" | "slide" | "zoom" | "flip";
  type: "info" | "success" | "warning" | "error" | "default";
  title: string;
  text: string;
}
