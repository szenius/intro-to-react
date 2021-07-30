import React from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Post
        title="A sunny day"
        description="This entry is about a sunny day"
        author="Sze Ying"
      />
      <Post
        title="A rainy day"
        description="This entry is about a rainy day"
        author="Sze Ying"
      />
      <Post
        title="A gloomy day"
        description="This entry is about a gloomy day"
        author="Sze Ying"
      />
    </div>
  );
}

export default App;
