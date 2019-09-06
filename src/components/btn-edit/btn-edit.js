import React, {Component} from 'react';
import Button from '../button';

import { Link } from 'react-router-dom';

import './btn-edit.css'

export default class BtnEdit extends Component {
    state = {
        buttons: [],
    }

    componentDidMount() {
        let btns = JSON.parse(localStorage.getItem('currUser')).btns;
        this.setState({buttons: btns});
    }

    deleteBtn = (label, item) => {
        let btns = this.state.buttons;
        const idx = btns.indexOf(item);
        const arr = [...btns.slice(0, idx), ...btns.slice(idx+1)];
        const user_idx = parseInt(localStorage.getItem('currUserIdx'));
        let users = JSON.parse(localStorage.getItem('users'));
        users[user_idx].btns = arr;
        localStorage.setItem('currUser', JSON.stringify(users[user_idx]));
        localStorage.setItem('users', JSON.stringify(arr));
        this.setState({buttons: arr});
    }

    render() {
        let buttonsList = [];
        const delete_btn = {
            label: 'Delete',
            btnStyle: 'delete_btn',
            funcBtn: this.deleteBtn
        }
        console.log(this.state.buttons);

        if (this.state.buttons.length > 0) {
            buttonsList = this.state.buttons.map(item => {
                return <li key = {item}>
                        <span className="btn_name">{item}</span>
                        <Link to = "/calculator/buttons/editBtn" onClick = {() => localStorage.setItem('currBtn', item)} className = "edit_btn">Edit</Link>
                        <Button props = {delete_btn} item = {item}/>
                       </li>
            });
        }

        return (
            <div>
                <Link to = "/calculator/buttons/createBtn" className=" add_btn" onClick = {() => localStorage.setItem('currBtn', '')}>Add</Link>
                <Link to = "/calculator" className = "return_btn">Back</Link>
                <ul className="buttons-list">
                    {buttonsList}
                </ul>
            </div>
        )
    }
}
