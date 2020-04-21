import React, { Component } from "react";
import { connect } from "react-redux";

class PostList extends Component {
  renderPostList() {
    if (this.props.posts.length === 0) {
      return <div>No post for this user.</div>;
    }

    return this.props.posts.map((post) => {
      return (
        <div className="item divider" key={post.id}>
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">{post.body}</div>
          </div>
          <div className="ui right floated">
            <button className="ui primary basic button">View</button>
            <button className="ui negative basic button">Delete</button>
          </div>
        </div>
      );
    });
  }

  renderListContent() {
    if (!this.props.users.length || !this.props.user.id) {
      return null;
    }

    return (
      <div>
        <h4>{this.props.user.name} Posts</h4>
        <button className="ui positive basic button fluid">Create New Post</button>
        <div className="ui list">{this.renderPostList()}</div>
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
  };
};

export default connect(mapStateToProps)(PostList);
