import React from "react";
import Button from "../button";
import "./history.css";

const History = ({ history, clearHistory }) => {
  const clearBtn = {
    label: "Clear All",
    btnStyle: "clear_btn",
    funcBtn: clearHistory
  };
  const historyList = history.map(item => {
    return (
      <li key={item}>
        <span className="history-name">{item}</span>
      </li>
    );
  });

  return (
    <div className="history">
      <div className="history_header">
        <p className="history-logo">History</p>
        <Button props={clearBtn} />
      </div>
      <ul className="history-list">{historyList}</ul>
    </div>
  );
};

export default History;
