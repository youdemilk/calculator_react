import React, { Component } from "react";

import Button from "../button";

import "./btn-box.css";
import { infixToPostfix } from "../../utils";

export default class Buttons extends Component {
  maxId = 100;

  constructor() {
    super();
    this.state = {
      btnData: [
        {
          label: "С",
          btnStyle: "btn_clear",
          funcBtn: this.clearInput,
          id: 1
        },

        {
          label: "←",
          btnStyle: "btn_clear",
          funcBtn: this.deleteSymbol,
          id: 2
        },

        {
          label: "√",
          btnStyle: "btn_clear",
          funcBtn: this.getSqrt,
          id: 3
        },

        {
          label: "/",
          btnStyle: "btn_operation",
          funcBtn: () => this.toInput("/"),
          id: 4
        },

        {
          label: "7",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("7"),
          id: 5
        },

        {
          label: "8",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("8"),
          id: 6
        },

        {
          label: "9",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("9"),
          id: 7
        },

        {
          label: "x",
          btnStyle: "btn_operation",
          funcBtn: () => this.toInput("*"),
          id: 8
        },

        {
          label: "4",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("4"),
          id: 9
        },

        {
          label: "5",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("5"),
          id: 10
        },

        {
          label: "6",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("6"),
          id: 11
        },

        {
          label: "-",
          btnStyle: "btn_operation",
          funcBtn: () => this.toInput("-"),
          id: 12
        },

        {
          label: "1",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("1"),
          id: 13
        },

        {
          label: "2",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("2"),
          id: 14
        },

        {
          label: "3",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("3"),
          id: 15
        },

        {
          label: "+",
          btnStyle: "btn_operation",
          funcBtn: () => this.toInput("+"),
          id: 16
        },

        {
          label: "%",
          btnStyle: "btn_operation",
          funcBtn: () => this.getPercent,
          id: 17
        },

        {
          label: "0",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("0"),
          id: 18
        },

        {
          label: ".",
          btnStyle: "btn_number",
          funcBtn: () => this.toInput("."),
          id: 19
        },

        {
          label: "=",
          btnStyle: "btn_operation",
          funcBtn: () => this.getResult(),
          id: 20
        },

        {
          label: "+/-",
          btnStyle: "btn_addOperation",
          funcBtn: this.changeSign,
          id: 21
        },

        {
          label: "^",
          btnStyle: "btn_addOperation",
          funcBtn: () => this.toInput("^"),
          id: 22
        },

        {
          label: "(",
          btnStyle: "btn_addOperation",
          funcBtn: () => this.toInput("("),
          id: 23
        },

        {
          label: ")",
          btnStyle: "btn_addOperation",
          funcBtn: () => this.toInput(")"),
          id: 24
        }
      ]
    };
  }

  deleteSymbol = () => {
    const { input, display, clickHandler } = this.props;
    const new_input = input.slice(0, input.length - 1);
    const new_display = display.slice(0, display.length - 1);

    clickHandler(new_input, new_display);
  };

  getSqrt = () => {
    const { input, clickHandler } = this.props;
    const sqrt = Math.sqrt(input);

    clickHandler(sqrt, sqrt);
  };

  calculatePercent = (symbol) => {
    let nums = this.props.input.split(symbol);

    nums[1] = nums[1].slice(0, nums[1].length - 1);
    nums = nums.map(el => parseFloat(el));
    switch (symbol) {
      case "+":
        return nums[0] + (nums[1] / 100) * nums[0];
      case "-":
        return nums[0] - (nums[1] / 100) * nums[0];
      case "*":
        return nums[0] * (nums[1] / 100) * nums[0];
      case "/":
        return (nums[0] / (nums[1] / 100)) * nums[0];
      default:
        return;
    }
  };

  getPercent = () => {
    const { input, clickHandler } = this.props;
    let res = input;

    if (res.includes("+")) {
      res = this.calculatePercent("+");
    } else if (res.includes("-")) {
      res = this.calculatePercent("-");
    } else if (res.includes("*")) {
      res = this.calculatePercent("*");
    } else if (res.includes("/")) {
      res = this.calculatePercent("/");
    }
    clickHandler(res, res);
  };

  changeSign = () => {
    const { input, clickHandler } = this.props;
    let str = input;

    for (let i = str.length - 1; i >= 0; i--) {
      let ch = str.substring(i, i + 1);
      if ("0123456789,.".indexOf(ch) >= 0);
      else if (ch === "-") {
        str = str.substring(0, i) + str.substring(i + 1);
        break;
      } else {
        str = str.substring(0, i + 1) + "-" + str.substring(i + 1);
        break;
      }
      if (i === 0) str = "-" + str;
    }
    clickHandler(str, str);
  };

  toInput = label => {
    const { input, display, clickHandler } = this.props;

    clickHandler(input + label, display + label);
  };

  clearInput = () => {
    this.props.clickHandler("", "");
  };

  getResult = () => {
    const {
      input,
      clickHandler,
      setUsers,
      addToHistory,
      history,
      currentUser,
      users
    } = this.props;
    let res;

    if (input.includes("/0")) {
      res = "You cant division by 0";
    } else {
      const result = input + "=" + infixToPostfix(input);
      const newUsers = users.map(item => {
        if (item.id === currentUser.id)
          return {
            ...currentUser,
            history: [...history, result]
          };
        return item;
      });

      addToHistory(result);
      setUsers(newUsers);

      res = infixToPostfix(input);

      if (isNaN(res)) res = "Undefined";
    }

    clickHandler(res, res);
  };

  render() {
    let customButtons = [];
    const { buttons } = this.props;
    const elements = this.state.btnData.map(el => (
      <Button key={el.id} props={el} />
    ));

    if (buttons !== []) {
      customButtons = buttons.map(item => {
        const properties = {
          label: item,
          btnStyle: "btn_number",
          funcBtn: () => this.toInput(item),
          id: this.maxId++
        };
        return <Button key={item} props={properties} />;
      });
    }

    return (
      <div className="btn-box">
        {elements}
        {customButtons}
      </div>
    );
  }
}
