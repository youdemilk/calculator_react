import React, {Component} from 'react'


import AppHeader from '../app-header' ;
import InputBox from '../input-box';
import Buttons from '../btn-box';
import { Link } from 'react-router-dom';
import History from '../history';

import './calc.css'

export default class Calc extends Component {
    constructor () {
        super();
        this.state = {
            input: '',
            display: '',
            history: '',
        }
        this.operations = ['+', '-', '*', '/', '%'];
    }

    clickHandler = (input, display) => {
        this.setState( {input, display} )
    }

    render() {
        return (
            <div>
                <Link to = "/" className = "change-user-btn">Exit</Link>
                <AppHeader />
                <InputBox input = { this.state.display } />
                <div className="mainside">
                    <Buttons clickHandler = {this.clickHandler}
                            input = {this.state.input} 
                            display = {this.state.display} />
                    <History history = {this.state.history} />
                </div>
                <Link className="link-btn" to="/calculator/buttons">Properties</Link>
            </div>
        );
    }
}