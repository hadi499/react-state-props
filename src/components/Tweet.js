import React from "react";

const Tweet = (props) => {
  return (
    <section>
      <h1>{props.name}</h1>
      <h1>{props.tweet}</h1>
    </section>
  );
};
export default Tweet;
