import React from 'react';


import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import HomePage from '../home-page';
import Calc from '../calc';
import CreateBtn from '../create-btn'
import BtnEdit from '../btn-edit';
import CreateUser from '../create-user';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path = '/calculator' component={Calc} />
                <Route exact path = '/calculator/buttons' component={BtnEdit} />
                <Route path='/calculator/buttons/createBtn' render={(props) => <CreateBtn {...props} title = 'Create' btnName={localStorage.getItem('currBtn')}/>}/>
                <Route path='/calculator/buttons/editBtn' render={(props) => <CreateBtn {...props} title = 'Edit' btnName={localStorage.getItem('currBtn')}/>}/>
                <Route path='/edituser' render={(props) => <CreateUser {...props} title = 'Edit' userName={localStorage.getItem('currUser')}/>}/>
                <Route path='/createuser' render={(props) => <CreateUser {...props} title = 'Create' userName={localStorage.getItem('currUser')}/>}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;