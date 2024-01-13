import React from "react";

import { ButtonInterface } from "./Button.Types";

const ButtonComponent = (props: ButtonInterface): React.ReactNode => {
  return (
    <button onClick={props.onPress} className=" bg-blue-300 p-4">
      {props.title}
    </button>
  );
};

export default ButtonComponent;

ButtonComponent.defaultProps = {
  title: "",
  color: "",
  onPress: () => undefined,
};
