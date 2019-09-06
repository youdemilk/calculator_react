import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import actions from '../../actions'

import './create-user.css'

export class CreateUser extends Component {
    state = {
        label: this.props.userName,
        redirect: false,
        name: '',
        id: '',
        btns: [],
        history: []
    };
    
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onNameChange = (e) =>{
        this.setState({name: e.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault(); 
        let users = JSON.parse(localStorage.getItem('users')), idx = 0;
        if (users) {
            idx = users.findIndex((item) => item['name'] === this.props.userName);
        } else {
            users = [];
        }
        if (this.props.title === 'Create'){
            const newUser = {
                name: this.state.label,
                id: parseInt((Math.random()*10000).toString()), 
                btns: [],
                history: []
            };
            users.push(newUser);
        }
        else {
            const editedUser = users[idx];
            editedUser['name'] = this.state.label;
            users = [...users.slice(0, idx), editedUser, ...users.slice(idx+1)];
        }
        localStorage.setItem('users', JSON.stringify(users));
        this.setState({redirect: true});


        // this.props.addUser({
        //     id:parseInt((Math.random()*10000).toString()), 
        //     name: this.state.name,
        //     btns: [],
        //     history: [],
        // });
    };

    render() {
        if (this.state.redirect) return <Redirect to='/'/>;
        return (
            <>
                <div className="create-user">
                    <h1>{this.props.title}</h1>
                    <form onSubmit={this.onSubmit} 
                        className="create-user-form">
                        <div className = "form_input">
                            <input type='text'
                                   className = "form_input_item"
                                   placeholder='name'
                                   onChange = {(event) => { this.onNameChange(event); this.onLabelChange(event)  }}
                                   value={this.state.name}/>
                        </div>
                        <button type='submit' className="create-btn">{this.props.title}</button>
                    </form>
                </div>
            </>
        );
    }
};




const mapDispatchToProps = (dispatch) => ({
    addUser: (name) => dispatch(actions.add_user(name)),
})

export default connect(null, mapDispatchToProps)(CreateUser);
