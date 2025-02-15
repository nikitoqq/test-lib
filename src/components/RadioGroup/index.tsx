import React from "react";

import { AriaName, Group, Label, Input, InputAria, Center } from "./styled";

import { toastObjectType } from "../../types";

export const RadioGroup = ({
  onChange,
  toastObject,
  array,
  name,
}: {
  onChange: React.Dispatch<React.SetStateAction<toastObjectType>>;
  toastObject: toastObjectType;
  array: string[];
  name: string;
}) => {
  const click = (e: any) => {
    
    onChange({
      ...toastObject,
      position: name === "Position" ? e.target.value : toastObject.position,
      type: name === "Type" ? e.target.value : toastObject.type,
      theme: name === "Theme" ? e.target.value : toastObject.theme,
    });
  };

  return (
    <Group>
      <AriaName>{name}:</AriaName>
      <InputAria>
        {array.map((el: string, index: number) => {
          return index === 0 ? (
            <Center key={index}>
              <Input
                name={name}
                id={el}
                defaultChecked
                value={el}
                type="radio"
                onClick={click}
              />
              <Label htmlFor={el}>{el}</Label>
            </Center>
          ) : (
            <Center key={index}>
              <Input
                onClick={click}
                name={name}
                id={el}
                value={el}
                type="radio"
              />
              <Label htmlFor={el}>{el}</Label>
            </Center>
          );
        })}
      </InputAria>
    </Group>
  );
};
