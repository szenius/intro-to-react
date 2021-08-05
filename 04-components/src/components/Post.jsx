import React from "react";

function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Written by {props.author}</p>
    </div>
  );
}

export default Post;
