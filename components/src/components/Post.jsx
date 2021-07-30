import React from "react";

function Post(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Written by {props.author}</p>
    </>
  );
}

export default Post;
