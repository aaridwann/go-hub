import React from "react";

import { Props } from "./Badge.Types";

const Badge = (props: Props): React.ReactNode => {
  return (
    <div className="stats bg-primary text-primary-content">
      <div className="stat">
        <div className="stat-title text-white">{props.title}</div>
        <div className="stat-value">${props.price}</div>
        <div className="stat-actions">
          <button className="btn btn-sm btn-success">% {props.discount}</button>
        </div>
      </div>
    </div>
  );
};

export default Badge;

Badge.defaultProps = {
  title: "",
  price: 0,
  discount: 0,
};
