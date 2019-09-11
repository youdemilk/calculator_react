import React, { Component } from "react";
import Button from "../../button";
import { Link } from "react-router-dom";
import { setItemToLocalStorage } from "../../../helpers";


import "./btn-edit.css";

export default class BtnEdit extends Component {
  state = {
    buttons: []
  };

  componentDidMount() {
    const { setCustomButtons, buttons } = this.props;
    const storageButtons = buttons || [];

    if (!buttons.length) {
      setCustomButtons(storageButtons);
    }
  }

  deleteBtn = button => {
    const { deleteCustomButton, currentUser } = this.props;
    const newButtons = currentUser.buttons.filter(item => item !== button);

    deleteCustomButton(button);
    setItemToLocalStorage("users", { ...currentUser, ...newButtons });
  };

  render() {
    const { buttons } = this.props;

    let buttonsList = [];
    const delete_btn = {
      label: "Delete",
      btnStyle: "delete_btn",
      funcBtn: this.deleteBtn
    };
    
    buttonsList = buttons.map(item => {
      return (
        <li key={item}>
          <span className="btn_name">{item}</span>
          <Link
            to="/calculator/buttons/editBtn"
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
          to="/calculator/buttons/createBtn"
          className=" add_btn"
        >
          Add
        </Link>
        <Link to="/calculator" className="return_btn">
          Back
        </Link>
        <ul className="buttons-list">{buttonsList}</ul>
      </div>
    );
  }
}
