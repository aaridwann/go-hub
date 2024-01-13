import React from "react";

interface Props {
  size: number;
  currentPage: number;
  inc: () => void;
  dec: () => void;
}

const Pagination = (props: Props) => {
  return (
    <div className="join">
      <button onClick={() => props.dec()} className="join-item btn">
        «
      </button>
      <button className="join-item btn">{props.currentPage + 1}</button>
      <button onClick={() => props.inc()} className="join-item btn">
        »
      </button>
    </div>
  );
};

Pagination.defaultProps = {
  size: 4,
  currentPage: 1,
};

export default Pagination;
