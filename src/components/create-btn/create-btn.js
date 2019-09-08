import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./create-btn.css";

export default class CreateBtn extends Component {
  state = {
    label: this.props.btnName,
    redirect: false
  };

  onLabelChange = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    let btns = JSON.parse(localStorage.getItem("currUser")).btns,
      idx = 0;
    if (btns !== "") {
      idx = btns.indexOf(this.props.btnName);
      console.log(idx);
    }
    if (this.props.title === "Create") {
      btns.push(this.state.label);
    } else {
      btns = [...btns.slice(0, idx), this.state.label, ...btns.slice(idx + 1)];
    }
    const user_idx = parseInt(localStorage.getItem("currUserIdx"));
    let users = JSON.parse(localStorage.getItem("users"));
    users[user_idx].btns = btns;
    localStorage.setItem("currUser", JSON.stringify(users[user_idx]));
    localStorage.setItem("users", JSON.stringify(users));
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
            onChange={this.onLabelChange}
            value={this.state.label}
          />
          <button type="submit" className="create-btn">
            Add to Calc
          </button>
        </form>
      </div>
    );
  }
}
