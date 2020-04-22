import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deletePost, viewUserPost } from "../../actions/posts";
import { selectUser } from "../../actions/users";

class PostList extends Component {
  onViewPost = (post) => {
    this.props.selectUser(this.props.user);
    this.props.viewUserPost(post);
  };

  onDeletePost = (postId) => {
    this.props.deletePost(postId);
  };

  renderPostList() {
    if (this.props.posts.length === 0) {
      return <div>No post for this user.</div>;
    }

    return this.props.posts.map((post, index) => {
      const isNotFirstItem = index !== 0;
      const divider = isNotFirstItem ? (
        <div className="ui section divider"></div>
      ) : (
        ""
      );

      return (
        <div className="item" key={post.id}>
          {divider}
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">{post.body}</div>
          </div>
          <div
            className="button-section ui right floated"
            style={{ marginTop: "10px" }}
          >
            <Link
              to="/posts/view"
              className="ui primary basic button"
              onClick={() => this.onViewPost(post)}
            >
              View
            </Link>
            <button
              className="ui negative basic button"
              onClick={() => this.onDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }

  renderListContent() {
    if (!this.props.users.length || !this.props.user.id) {
      return null;
    }

    const loadingClassName = `ui segment ${
      this.props.isFetchingUserPost ? "loading" : ""
    }`;

    return (
      <div>
        <h4>{this.props.user.name} Posts</h4>
        <Link to="/posts/new" className="ui positive basic button fluid">
          Create New Post
        </Link>
        <div className={loadingClassName}>
          <div className="ui list">{this.renderPostList()}</div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderListContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
    posts: state.posts,
    isFetchingUserPost: state.progress.isFetchingUserPost,
  };
};

export default connect(mapStateToProps, {
  viewUserPost,
  deletePost,
  selectUser,
})(PostList);
