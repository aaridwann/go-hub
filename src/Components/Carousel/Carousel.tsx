import Image from "next/image";
import React from "react";
import { Props } from "./Carousel.Types";

const Carousel = (props: Props): React.ReactNode => {
  return (
    <div className="carousel carousel-end rounded-box">
      <div className="carousel-item">
        {props?.data?.map((img: string, key: number) => (
          <Image
            width={200}
            height={200}
            className=" h-96 w-full "
            key={key}
            src={img}
            alt={img}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

Carousel.defaultProps = {
  data: [""],
};
