import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "hadi", tweet: "oke bos" },
    { name: "john", tweet: "ha ha ha" },
  ];
  return (
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
      <Tweet />
    </section>
  );
};
export default Tweets;
