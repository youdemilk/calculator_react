import React, { Component } from "react";
import Button from "../button";
import { Link } from "react-router-dom";

import "./home-page.css";

export default class Home extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      users = [];
    }
    this.setState({ users: users });
  }

  deleteUser = (label, item) => {
    let users = this.state.users;
    const idx = users.indexOf(item);
    let arr = [...users.slice(0, idx), ...users.slice(idx + 1)];
    localStorage.setItem("users", JSON.stringify(arr));
    this.setState({ users: arr });
  };

  render() {
    const delete_btn = {
      label: "Delete",
      btnStyle: "delete_btn",
      funcBtn: this.deleteUser
    };
    console.log(this.props.user);

    const usersList = this.state.users.map((item, index) => {
      return (
        <li key={item["name"]}>
          <Link
            className="btn_name"
            to="/calculator"
            onClick={() => {
              localStorage.setItem("currUser", JSON.stringify(item));
              localStorage.setItem("currUserIdx", index.toString());
            }}
          >
            {item["name"]}
          </Link>
          <Link
            to="/edituser"
            onClick={() =>
              localStorage.setItem("currUser", JSON.stringify(item))
            }
            className="edit_btn"
          >
            Edit
          </Link>
          <Button props={delete_btn} item={item} />
        </li>
      );
    });

    return (
      <div>
        <Link
          to="/createuser"
          className="add_btn"
          onClick={() => localStorage.setItem("currUser", "")}
        >
          Add New User
        </Link>
        <ul className="users-list">{usersList}</ul>
      </div>
    );
  }
}
