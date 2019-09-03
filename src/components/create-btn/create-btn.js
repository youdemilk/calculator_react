import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import './create-btn.css'

export default class CreateBtn extends Component {
    state = {
        label: this.props.btnName,
        redirect: false,
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        let btns = localStorage.getItem('buttons'), idx = 0;
        if (btns !== '') {
            btns = btns.split(',');
            console.log(this.props.btnName);
            idx = btns.indexOf(this.props.btnName);
        } else {
            btns = [];
        }
        
        if (this.props.title === 'Create'){
            btns.push(this.state.label);
        }

        else {
            btns = [...btns.slice(0, idx), this.state.label, ...btns.slice(idx+1)];
        }
        localStorage.setItem('buttons', btns);
        this.setState({redirect: true});
    };
    
    render () {
        if (this.state.redirect) return <Redirect to='/calculator'/>;
        return (
            <div className="form">
                <form onSubmit={this.onSubmit} className="create-btn-form">
                    <input  className="input_add"
                            type='text'  
                            placeholder='put name of button here...'
                            onChange = { this.onLabelChange } />  
                    <button type='submit' className="create-btn">Add to Calc</button>
                </form>
            </div>
        );
    }
   
}
    
