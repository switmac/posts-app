import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import PostCreate from "./posts/PostCreate";
import PostView from "./posts/PostView";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/posts/new" component={PostCreate}></Route>
          <Route path="/posts/view" component={PostView}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
