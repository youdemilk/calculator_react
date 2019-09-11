import React, { Component } from "react";
import Button from "../../button";
import { Link } from "react-router-dom";
import { setItemToLocalStorage } from "../../../helpers";

import "./home-page.css";

class HomePage extends Component {
  componentDidMount() {
    const storageUsers = JSON.parse(localStorage.getItem("users")) || [];
    const { setUsers, users } = this.props;
    
    if (!users.length) {
      setUsers(storageUsers);
    }
  }

  deleteUser = user => {
    const { deleteUser, users } = this.props;
    const newUsers = users.filter(item => item.id !== user.id);

    deleteUser(user);
    setItemToLocalStorage("users", newUsers);
  };

  render() {
    const { users, setCurrentUser } = this.props;

    const delete_btn = {
      label: "Delete",
      btnStyle: "delete_btn",
      funcBtn: this.deleteUser
    };

    const usersList = users.map((item, index) => {
      return (
        <li key={item.id}>
          <Link
            className="btn_name"
            to="/calculator"
            onClick={() => {
              setCurrentUser(item);
              console.log(item)
              // localStorage.setItem("currUser", JSON.stringify(item) )
              localStorage.setItem("currUserIdx", index.toString());
            }}
          >
            {item["name"]}
          </Link>
          <Link
            to="/edituser"
            onClick={() => {
              setCurrentUser(item);
              localStorage.setItem("currUserIdx", index.toString());
              // localStorage.setItem("currUser", JSON.stringify(item))
            }
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
          Add new user
        </Link>
        <ul className="users-list">{usersList}</ul>
      </div>
    );
  }
}

export default HomePage;
