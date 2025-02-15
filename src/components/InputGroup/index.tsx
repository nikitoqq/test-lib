import React from "react";
import { AriaName, Group, Input } from "./styled";
import { toastObjectType } from "../../types";

export const InputGroup = ({
  onChange,
  toastObject,
  name,
  value,
}: {
  onChange: React.Dispatch<React.SetStateAction<toastObjectType>>;
  toastObject: toastObjectType;
  name: string;
  value: string;
}) => {
  const click = (e: any) => {
    onChange({
      ...toastObject,
      autoClose: name === "Auto close" ? `${+e.target.value < 1 ? 1 : e.target.value}` : toastObject.autoClose,
      title: name === "Title" ? e.target.value : toastObject.title,
      text: name === "Text" ? e.target.value : toastObject.text,
    });
  };

  return (
    <Group>
      <AriaName>{name}</AriaName>
      <Input onChange={click} value={value}></Input>
    </Group>
  );
};
