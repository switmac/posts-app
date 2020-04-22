import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchPostComments } from "../../actions/posts";

class PostView extends Component {
  componentDidMount() {
    this.props.post && this.props.fetchPostComments(this.props.post.id);
  }

  renderPost = () => {
    if (this.props.post && this.props.post.id) {
      const { post } = this.props;
      return (
        <div className="ui segment">
          <h4>{post.title}</h4>
          <div>{post.body}</div>
        </div>
      );
    }
  };

  getCommentHtml = (comment) => {
    return (
      <div className="comment" key={comment.id}>
        <div className="content">
          <div className="author">
            by: {comment.name}
          </div>
          <div className="text">{comment.body}</div>
        </div>
      </div>
    );
  };

  renderComments = () => {
    if (this.props.comments && this.props.comments.length) {
      const { comments } = this.props;
      const commentList = comments.map((comment) => {
        return this.getCommentHtml(comment);
      });

      return (
        <div className="ui comments">
          <h3 className="ui dividing header">Comments</h3>
          {commentList}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="ui grid column">
          <h3 className="column twelve wide">
            Post by {this.props.user.name || ""}
          </h3>
          <div className="right aligned column four wide">
            <Link to="/">
              <i className="icon arrow circle left"></i>
              Go back to Posts
            </Link>
          </div>
        </div>

        {this.renderPost()}
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    post: state.post,
    comments: state.comments,
  };
};

export default connect(mapStateToProps, { fetchPostComments })(PostView);
