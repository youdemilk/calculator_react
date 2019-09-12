import React, { Component } from "react";

import AppHeader from "../../app-header";
import InputBox from "../../input-box";
import Buttons from "../../btn-box";
import { Link } from "react-router-dom";
import History from "../../history";

import "./calc.css";

export default class Calc extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      display: "",
    };
    this.operations = ["+", "-", "*", "/", "%"];
  }

  clickHandler = (input, display) => {
    this.setState({ input, display });
  };

  clrHistory = history => {
    const { users, setUsers, clearHistory, currentUser } = this.props;

    const newUsers = users.map(item => {
      if (item.id === currentUser.id)
        return {
          ...currentUser,
          history: []
        };
      return item;
    });
    
    clearHistory();
    setUsers(newUsers);
  };

  render() {
    return (
      <div>
        <Link to="/" className="change-user-btn">
          Switch User
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
          Custom Buttons
        </Link>
      </div>
    );
  }
}
