import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Login from "./login/pages/Login";
import Main from "./main/pages/Main";
import Users from "./users/pages/Users";
import UserProfile from "./users/pages/UserProfile";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> {/* Main product page*/}
          <Main />
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
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
