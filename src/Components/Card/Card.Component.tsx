import Image from "next/image";
import React from "react";
import { CardProduct } from "./Card.Types";

const _renderColorProgress = (stock: number): string => {
  let res =
    stock < 30
      ? "progress-error"
      : stock < 60
      ? "progress-warning"
      : "progress-success";

  return res;
};

const CardComponent = (props: CardProduct): React.ReactNode => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className=" bg-white relative h-52 overflow-hidden flex items-center justify-center bg-cover">
        <Image
          width={200}
          height={200}
          src={props.image}
          alt="Product"
        />
      </div>
      <div className="card-body">
        <h2 onClick={props.onClick} className=" cursor-pointer card-title">
          {props.name}
        </h2>
        <p className=" text-ellipsis truncate ">{props.description}</p>
        <div className=" text-white flex items-center justify-between">
          <div className=" flex flex-col gap-1">
            <p>Stock</p>
            <div className="flex justify-center items-center gap-2">
              <progress
                className={`progress ${_renderColorProgress(props.stock)} w-32`}
                value={props.stock}
                max="100"
              />
              <p>{props.stock}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn text-xl text-white btn-primary">
              {props.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

CardComponent.defaultProps = {
  id: "",
  name: "",
  description: "",
  price: 0,
  image: "",
  stock: 0,
  onClick: () => undefined,
};
