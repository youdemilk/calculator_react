import React, {Component} from 'react';
import Button from '../button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './home-page.css'



export class Home extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        let users = localStorage.getItem('users');
        if (users !== null) {
           users = users.split(',');
        }
        else {
            users = [];
        }
        this.setState({users: users});
    }

    deleteUser = (label, item) => {
        const users = this.state.users;
        const idx = users.indexOf(item);
        const arr = [...users.slice(0, idx), ...users.slice(idx+1)];
        localStorage.setItem('users', arr);
        this.setState({users: arr});
    };

    render() {  
        const delete_btn = {
            label: 'Delete',
            btnStyle: 'delete_btn',
            funcBtn: this.deleteUser
        }
        console.log(this.props.user);

        const usersList = this.state.users.map((item) => {
            return <li key={item}>
                        <Link className="btn_name"to="/calculator" onClick = {() => localStorage.setItem('currUser', item) }>{item}</Link>
                        <Link to="/edituser" onClick = {() => localStorage.setItem('currUser', item) } className='edit_btn'>Edit</Link>
                        <Button props={delete_btn} item={item}/>
                    </li>
        });

        return (
            <div>
                <Link to="/createuser" className='add_btn' onClick = {() => localStorage.setItem('currUser', '')}>Add New User</Link>
                <ul className="users-list">
                    {usersList}
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Home)