import React, { useState } from "react";
import "./App.css";

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

function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Written by {props.author}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
      <Post
        title="A sunny day"
        description="This entry is about a sunny day"
        author="Sze Ying"
        count={count}
      />
      <Post
        title="A rainy day"
        description="This entry is about a rainy day"
        author="Sze Ying"
        count={count}
      />
      <Post
        title="A gloomy day"
        description="This entry is about a gloomy day"
        author="Sze Ying"
        count={count}
      />
    </div>
  );
}

export default App;
