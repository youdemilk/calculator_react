import React from 'react';
import './history.css';

const History = () => {
    let history = localStorage.getItem('history');


    if (history !== null) {
        history = history.split(',');
    } else {
        history = [];
    }

    let historyList = [];
    historyList = history.map((item) => {
        return <li key = {item}>
                    <span className="history-name">{item}</span>
               </li>
    });
         
    return (
        <div className="history">
        <p className="history-logo">History</p>
        <ul className="history-list">
            {historyList}
        </ul>
        </div>
    )
}
export default History;