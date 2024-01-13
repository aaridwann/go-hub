import Image from "next/image";
import React from "react";

interface CardProduct {
  id: string | number;
  name: string;
  description: string;
  price: string | number;
  image: string;
  stock: number;
  onClick: VoidFunction;
}

const _renderColorProgress = (stock: number) => {
  let res =
    stock < 30
      ? "progress-error"
      : stock < 60
      ? "progress-warning"
      : "progress-success";

  return res;
};

const CardComponent = (props: CardProduct) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          className=" w-auto h-60"
          width={300}
          height={300}
          src={props.image}
          alt="Product"
        />
      </figure>
      <div className="card-body">
        <h2 onClick={props.onClick} className=" cursor-pointer card-title">
          {props.name}
        </h2>
        <p>{props.description}</p>
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
