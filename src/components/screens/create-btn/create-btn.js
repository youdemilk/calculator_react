import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./create-btn.css";

export default class CreateBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      name: "",
    };
  }

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      addCustomButton,
      setUsers,
      currentUser,
      users,
      editCustomButton,
      currentButton
    } = this.props;

    if (this.props.title === "Create") {
      const newUsers = users.map(item => {
        if (item.id === currentUser.id)
          return {
            ...currentUser,
            buttons: [...currentUser.buttons, this.state.name]
          };
        return item;
      });

      setUsers(newUsers);
      addCustomButton(this.state.name);
    } else {
      const newUsers = users.map(item => {
        if (item.id === currentUser.id)
          return {
            ...currentUser,
            buttons: currentUser.buttons.map(button =>
              button === currentButton ? this.state.name : button
            )
          };
        return item;
      });

      setUsers(newUsers);
      editCustomButton(this.state.name);
    }

    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/calculator/buttons" />;
    return (
      <div className="form">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.onSubmit} className="create-btn-form">
          <input
            className="input_add"
            type="text"
            placeholder="put name of button here..."
            onChange={this.onNameChange}
            value={this.state.name}
          />
          <button type="submit"
                  className="create-btn">
            {this.props.title === "Create" ? "Create" : "Edit"}

          </button>
        </form>
      </div>
    );
  }
}
