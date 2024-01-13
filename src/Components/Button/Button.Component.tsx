import React from "react";

interface ButtonInterface {
  title: string;
  color?: string;
  onPress?: VoidFunction;
}
const ButtonComponent = (props: ButtonInterface) => {
  return (
    <button onClick={props.onPress} className=" bg-blue-300 p-4">
      {props.title}
    </button>
  );
};

export default ButtonComponent;
