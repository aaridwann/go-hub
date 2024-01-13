import React from "react";

import { Props } from "./Pagination.Types";

const Pagination = (props: Props): React.ReactNode => {
  return (
    <div className="join">
      <button onClick={() => props.dec()} className="join-item btn">
        «
      </button>
      <button className="join-item btn">{props.currentPage}</button>
      <button onClick={() => props.inc()} className="join-item btn">
        »
      </button>
    </div>
  );
};

Pagination.defaultProps = {
  size: 1,
  currentPage: 1,
  inc: () => undefined,
  dec: () => undefined,
};

export default Pagination;
