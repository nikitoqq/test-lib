import React, { useState } from "react";

import useNotification, { NotifyProvider } from "toast-lib-nikitoqq";

import { RadioGroup } from "./components/RadioGroup";
import { SelectGroup } from "./components/SelectGroup";

import { SETTING_ARRAY, TRANSITION_ARRAY } from "./constans";

import { SETTING_ARRAY_TYPE, toastObjectType } from "./types";

import { Button, Main, Row } from "./styled";
import { InputGroup } from "./components/InputGroup";

export const App = () => {
  const { toast, addToast, deleteToast } = useNotification();

  const [toastObject, setToastObject] = useState<toastObjectType>({
    position: 'top-left',
    autoClose: "1000",
    theme: "light",
    transition: "bounce",
    type: "info",
    title: "Hi!",
    text: "This is toast!",
  });

  return (
    <NotifyProvider value={{ toast, addToast, deleteToast }}>
      <Main>
        {SETTING_ARRAY.map((el: SETTING_ARRAY_TYPE, index: number) => (
          <RadioGroup onChange={setToastObject} toastObject={toastObject} key={index} array={el.array} name={el.name} />
        ))}
        <Row>
          <Row>
            <SelectGroup onChange={setToastObject} toastObject={toastObject} array={TRANSITION_ARRAY} name={"Transition"} />
            <InputGroup onChange={setToastObject} toastObject={toastObject} name="Auto close" value={toastObject.autoClose} />
          </Row>
          <Row>
            <InputGroup onChange={setToastObject} toastObject={toastObject} name="Title" value={toastObject.title} />
            <InputGroup onChange={setToastObject} toastObject={toastObject} name="Text" value={toastObject.text} />
          </Row>
        </Row>
        <Button onClick={() => addToast(toastObject)}>Add</Button>
      </Main>
    </NotifyProvider>
  );
};
