import React, {Component} from 'react';
import Button from '../button';

import { Link } from 'react-router-dom';

import './btn-edit.css'

export default class BtnEdit extends Component {
    state = {
        buttons: [],
    }

    componentDidMount() {
        let btns = localStorage.getItem('buttons');
        if (btns !== '') {
            btns = btns.split(',');
        } else {
            btns = [];
        }
        this.setState({buttons: btns});
    }

    deleteBtn = (label, item) => {
        const btns = this.state.buttons;
        const idx = btns.indexOf(item);
        const arr = [...btns.slice(0, idx), ...btns.slice(idx+1)];
        localStorage.setItem('buttons', arr);
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
                <Link to = "/calculator/buttons/createBtn" className=" add_btn">Add</Link>
                <Link to = "/calculator" className = "return_btn">Back</Link>
                <ul className="buttons-list">
                    {buttonsList}
                </ul>
            </div>
        )
    }
}
