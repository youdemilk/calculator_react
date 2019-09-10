import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../screens/home-page";
import Calc from "../screens/calc";
import CreateBtn from "../screens/create-btn";
import BtnEdit from "../screens/btn-edit";
import CreateUser from "../screens/create-user";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/calculator" component={Calc} />
        <Route exact path="/calculator/buttons" component={BtnEdit} />
        <Route
          path="/calculator/buttons/createBtn"
          render={props => (
            <CreateBtn
              {...props}
              title="Create"
              btnName={localStorage.getItem("currBtn")}
            />
          )}
        />
        <Route
          path="/calculator/buttons/editBtn"
          render={props => (
            <CreateBtn
              {...props}
              title="Edit"
              btnName={localStorage.getItem("currBtn")}
            />
          )}
        />
        <Route
          path="/createuser"
          render={props => <CreateUser {...props} title="Create" userName="" />}
        />
        <Route
          path="/edituser"
          render={props => (
            <CreateUser
              {...props}
              title="Edit"
              userName={JSON.parse(localStorage.getItem("currUser"))["name"]}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
