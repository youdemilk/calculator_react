import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./create-user.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      name: props.currentUser ? props.currentUser.name : "",
      id: "",
      buttons: [],
      history: [],
    };
  }

  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { addUser, users, editUser, currentUser, setUsers } = this.props;
    
    if (this.props.title === "Create") {
      const user = {
        id: parseInt((Math.random() * 10000).toString()),
        name: this.state.name,
        buttons: [],
        history: []
      };

      addUser(user);
    } else {
      const newUsers = users.map(item => {
        if (item.id === currentUser.id)
          return { ...currentUser, name: this.state.name };
        return item;
      });

      setUsers(newUsers)
      editUser({ ...currentUser, name: this.state.name });
    }

    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <>
        <div className="create-user">
          <h1>{this.props.title}</h1>
          <form onSubmit={this.onSubmit} className="create-user-form">
            <div className="form_input">
              <input
                type="text"
                className="form_input_item"
                placeholder="name"
                onChange={this.onNameChange}
                value={this.state.name}
              />
            </div>
            <button type="submit" className="create-btn">
              {this.props.title}
            </button>
          </form>
        </div>
      </>
    );
  }
}
