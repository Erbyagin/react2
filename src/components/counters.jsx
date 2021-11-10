import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((count) => (
        <Counter key={count.id} {...count} {...rest} />
      ))}
    </div>
  );
};

export default Counters;
