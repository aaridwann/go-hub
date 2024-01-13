import React from "react";

interface Items {
  name: string;
  value?: string;
}

type Props = {
  data: string[];
  label: string;
  selected?: string;
  onClick: (data: string | any) => void;
  side?: "left" | "right";
};

const DropDownComponent = (props: Props) => {
  return (
    <div
      className={`dropdown ${ props.side === "left" ? "dropdown-left" : "dropdown-right"
      }`}
    >
      <div tabIndex={0} role="button" className="m-1 btn min-w-52">{props.selected || props.label}</div>
      <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {props.data.map((data, i) => (
          <li onClick={() => props.onClick(data)} key={i}>
            <a>{data}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownComponent;
