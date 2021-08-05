import React from "react";

function Counter(props) {
  return (
    <div>
      <p>You clicked {props.count} times</p>
      <button
        onClick={function () {
          props.setCount(props.count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Counter;
