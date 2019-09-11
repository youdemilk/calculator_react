import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { setItemToLocalStorage } from "../../../helpers";

import "./create-btn.css";

export default class CreateBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.btnName,
      redirect: false,
      name: "",
      id: "",
      history: [],
      users: [],
    };
  }

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { addCustomButton, setUsers, currentUser, users, editCustomButton } = this.props;

    if ( this.props.title === "Create") {
      const newUsers = users.map(item => {
        if (item.id === currentUser.id)
          return { ...currentUser, buttons: [ ...currentUser.buttons, this.state.name] };
          return item;
      }); 
  
      addCustomButton(this.state.name);
      setUsers(newUsers);
      setItemToLocalStorage("users", newUsers);
    } else {
      const newUsers = users.map(item => {
        if (item.id === currentUser.id)
          return { ...currentUser, buttons: [ ...currentUser.buttons, this.state.name] };
          return item;
      }); 

      setUsers(newUsers);
      editCustomButton({ ...currentUser, buttons: [ ...currentUser.buttons, this.state.name ] });
      setItemToLocalStorage("users", { ...currentUser, newUsers });
    }
    
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/calculator/buttons" />;
    return (
      <div className="form">
        <form onSubmit={this.onSubmit} className="create-btn-form">
          <input
            className="input_add"
            type="text"
            placeholder="put name of button here..."
            onChange={this.onNameChange}
            value={this.state.name}
          />
          <button type="submit" className="create-btn">
            Add to Calc
          </button>
        </form>
      </div>
    );
  }
}
