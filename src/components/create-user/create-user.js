import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

import './create-user.css'

export default class CreateUser extends Component {
    state = {
        label: this.props.userName,
        redirect: false,
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        let users = localStorage.getItem('users'), idx = 0;
        if (users !== null) {
            users = users.split(',');
            idx = users.indexOf(this.props.userName);
        } else {
            users = [];
        }
        if (this.props.title === 'Create'){
            users.push(this.state.label);
        }
        else {
            users = [...users.slice(0, idx), this.state.label,...users.slice(idx+1)];
        }
        localStorage.setItem('users', users);
        this.setState({redirect: true});
    };

    render() {
        if (this.state.redirect) return <Redirect to='/'/>;
        return (
            <div>
                <div className="create-user">
                    <h1>{this.props.title}</h1>
                    <form onSubmit={this.onSubmit} className="create-user-form">
                        <input type='text'
                               placeholder='put name of user here...'
                               onChange = { this.onLabelChange }
                               value={this.state.label}/>
                        <button type='submit' className="create-btn">{this.props.title}</button>
                    </form>
                </div>
            </div>
        );
    }
};