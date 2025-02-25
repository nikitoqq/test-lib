import React from "react";
import { AriaName, Group, Input } from "./styled";
import { ToastProps } from "toast-lib-nikitoqq";

export const SelectGroup = ({
  onChange,
  toastObject,
  array,
  name,
}: {
  onChange: React.Dispatch<React.SetStateAction<ToastProps>>;
  toastObject: ToastProps;
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
