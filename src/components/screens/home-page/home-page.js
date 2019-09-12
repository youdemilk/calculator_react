import React, { Component } from "react";
import Button from "../../button";
import { Link } from "react-router-dom";

import "./home-page.css";

class HomePage extends Component {
  componentDidMount() {
    const { setUsers, users } = this.props;
    
    if (!users.length) {
      setUsers(users);
    }
  }

  deleteUser = user => {
    const { deleteUser } = this.props;

    deleteUser(user);
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
            }}
          >
            {item["name"]}
          </Link>
          <Link
            to="/edituser"
            onClick={() => {
              setCurrentUser(item);
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
        >
          Add new user
        </Link>
        <ul className="users-list">{usersList}</ul>
      </div>
    );
  }
}

export default HomePage;
