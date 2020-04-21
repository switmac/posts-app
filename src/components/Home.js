import React from "react";
import MemberList from "./member/MemberList";
import PostList from "./posts/PostList";

const Home = () => {
  return (
    <div className="ui grid">
      <div className="column eight wide">
        <MemberList />
      </div>
      <div className="column eight wide">
        <PostList />
      </div>
    </div>
  );
};

export default Home;
