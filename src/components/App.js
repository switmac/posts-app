import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import PostCreate from "./posts/PostCreate";
import PostDelete from "./posts/PostDelete";
import PostEdit from "./posts/PostEdit";
import PostView from "./posts/PostView";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/posts/new" component={PostCreate}></Route>
          <Route path="/posts/edit" component={PostEdit}></Route>
          <Route path="/posts/delete" component={PostDelete}></Route>
          <Route path="/posts/show" component={PostView}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
