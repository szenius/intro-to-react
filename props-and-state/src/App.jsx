import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import Counter from "./components/Counter";

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
