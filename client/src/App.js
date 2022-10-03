import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Login from "./login/pages/Login";
import Store from "./store/pages/Store";
import Sell from "./store/pages/Sell";
import Users from "./users/pages/Users";
import UserProfile from "./users/pages/UserProfile";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> {/* Main product page*/}
          <Store />
        </Route>
        <Route path="/login" exact> {/* Login Page*/}
          <Login />
        </Route>
        <Route path="/user" exact>  {/* My user details*/}
          <UserProfile />
        </Route>
        <Route path="/users/:userId" exact> {/* Other user details and products*/}
          <Users />
        </Route>
        <Route path="/sell" exact> {/* Selling page*/}
          <Sell />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
