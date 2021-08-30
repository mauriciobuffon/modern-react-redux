import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        avatar={faker.image.avatar()}
        timeAgo="Today at 4:45M"
        content="Nice blog post!"
      />
      <CommentDetail
        author="Alex"
        avatar={faker.image.avatar()}
        timeAgo="Today at 2:00AM"
        content="So so"
      />
      <CommentDetail
        author="Jane"
        avatar={faker.image.avatar()}
        timeAgo="Yesterday at 5:00PM"
        content="Didn't like it!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
