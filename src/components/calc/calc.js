import React, { Component } from "react";

import AppHeader from "../app-header";
import InputBox from "../input-box";
import Buttons from "../btn-box";
import { Link } from "react-router-dom";
import History from "../history";

import "./calc.css";

export default class Calc extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      display: "",
      history:
        JSON.parse(localStorage.getItem("currUser")).history.length === 0
          ? []
          : JSON.parse(localStorage.getItem("currUser")).history
    };
    this.operations = ["+", "-", "*", "/", "%"];
  }

  clickHandler = (input, display) => {
    this.setState({ input, display });
  };

  clrHistory = history => {
    const user_idx = JSON.parse(localStorage.getItem("currUserIdx"));
    let users = JSON.parse(localStorage.getItem("users"));
    users[user_idx]["history"] = [];
    localStorage.setItem("currUser", JSON.stringify(users[user_idx]));
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({ history: [] });
  };

  render() {
    return (
      <div>
        <Link to="/" className="change-user-btn">
          Exit
        </Link>
        <AppHeader />
        <InputBox input={this.state.display} />
        <div className="mainside">
          <Buttons
            clickHandler={this.clickHandler}
            input={this.state.input}
            display={this.state.display}
            operators={this.operations}
          />
          <History
            history={this.state.history}
            clearHistory={this.clrHistory}
          />
        </div>
        <Link className="link-btn" to="/calculator/buttons">
          Properties
        </Link>
      </div>
    );
  }
}
