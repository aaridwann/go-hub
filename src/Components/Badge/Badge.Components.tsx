import React from "react";

interface Props {
  title: string;
  price: string | number;
  discount: string | number;
}
const Badge = (props: Props) => {
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
