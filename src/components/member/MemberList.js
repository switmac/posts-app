import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, selectUser } from "../../actions/users";
import { fetchUserPost } from "../../actions/posts";
import "./MemberList.css";

class MemberList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
    .then(() => {
      this.getUserPost(this.props.users[0]);
    });
  }

  getUserPost = (user) => {
    this.props.selectUser(user);
    this.props.fetchUserPost(user.id);
  };

  renderMemberList() {
    return this.props.users.map((user) => {
      return (
        <div
          className={`member-item ui raised segment two column grid ${
            this.props.user && this.props.user.id === user.id ? "tertiary" : ""
          }`}
          key={user.id}
          onClick={() => this.getUserPost(user)}
        >
          <div className="three column">
            <div>{user.name}</div>
            <div>{user.company.name}</div>
          </div>

          <div className="one column right aligned">
            <img
              className="ui avatar image"
              src={user.image}
              alt="img"
            ></img>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h4>Members</h4>
        <div>{this.renderMemberList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  selectUser,
  fetchUserPost,
})(MemberList);
