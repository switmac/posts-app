import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createUserPost, clearUserPost } from "../../actions/posts";

class PostCreate extends Component {
  componentDidUnmount() {
    this.props.clearUserPost();
  }

  componentWillUnmount() {
    this.props.clearUserPost();
  }

  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return "";
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input autoComplete="off" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    const payload = { ...formValues, userId: this.props.user.id };
    this.props.createUserPost(payload);
  };

  renderNotification() {
    return this.props.post.id && !this.props.isCreatingUserPost ? (
      <div className="ui green segment">Post successfully added!</div>
    ) : (
      ""
    );
  }

  render() {
    const buttonClassName = `ui button primary ${
      this.props.isCreatingUserPost ? "loading" : ""
    }`;

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <div className="ui grid column">
          <h3 className="column twelve wide">
            Add Post for {this.props.user.name || ""}
          </h3>
          <div className="right aligned column four wide">
            <Link to="/">
              <i className="icon arrow circle left"></i>
              Go back to Posts
            </Link>
          </div>
        </div>
        {this.renderNotification()}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="body"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className={buttonClassName} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  let errors = {};

  const requiredFields = {
    title: "You must enter title",
    body: "You must enter description",
  };

  Object.keys(requiredFields).forEach((field) => {
    if (!formValues[field]) {
      errors[field] = requiredFields[field];
    }
  });

  return errors;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    post: state.post,
    isCreatingUserPost: state.progress.isCreatingUserPost,
  };
};

PostCreate = connect(mapStateToProps, { createUserPost, clearUserPost })(
  PostCreate
);

export default reduxForm({
  form: "PostCreate",
  validate,
})(PostCreate);
