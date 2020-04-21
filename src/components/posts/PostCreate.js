import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostCreate extends Component {
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
    console.log(meta);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input autoComplete="off" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary" type="submit">
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
    description: "You must enter description",
  };

  Object.keys(requiredFields).forEach((field) => {
    if (!formValues[field]) {
      errors[field] = requiredFields[field];
    }
  });
  // if (!formValues.title) {
  //   errors.title = "You must enter title";
  // }
  // if (!formValues.description) {
  //   errors.description = "You must enter description";
  // }

  return errors;
};

export default reduxForm({
  form: "PostCreate",
  validate,
})(PostCreate);
