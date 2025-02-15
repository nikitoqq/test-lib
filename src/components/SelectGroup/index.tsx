import React from "react";
import { AriaName, Group, Input } from "./styled";
import { toastObjectType } from "../../types";

export const SelectGroup = ({
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
      transition: e.target.value,
    });
  };
  return (
    <Group>
      <AriaName>{name}</AriaName>
      <Input onChange={click}>
        {array.map((el: string, index: number) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </Input>
    </Group>
  );
};
