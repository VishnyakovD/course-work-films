import React from "react";

const Stars = ({ count, event, key1 }) => {
    return (
      <div className={`star stars-${count}`} data-key={key1} onClick={event}>
        <div data-count="1" />
        <div data-count="2" />
        <div data-count="3" />
        <div data-count="4" />
        <div data-count="5" />
      </div>
    );
  };

  export default Stars;
  