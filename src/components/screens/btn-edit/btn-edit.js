import React, { Component } from "react";
import Button from "../../button";
import { Link } from "react-router-dom";
import "./btn-edit.css";

export default class BtnEdit extends Component {
  componentDidMount() {
    const { setCustomButtons, buttons } = this.props;

    if (!buttons.length) {
      setCustomButtons(buttons);
    }
  }

  deleteBtn = button => {
    const { deleteCustomButton } = this.props;

    deleteCustomButton(button);
  };

  render() {
    const { buttons } = this.props;

    const delete_btn = {
      label: "Delete",
      btnStyle: "delete_btn",
      funcBtn: this.deleteBtn
    };
    
    const buttonsList = buttons.map(item => {
      return (
        <li key={item}>
          <span className="btn_name">{item}</span>
          <Link
            to={{
              state: {
                prevName: item
              },
              pathname: "/calculator/buttons/editBtn"}}
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
