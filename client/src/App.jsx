import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useState, useCallback } from "react";
import Login from "./login/pages/Login";
import Main from "./main/pages/Main";
import Users from "./users/pages/Users";
import UserProfile from "./users/pages/UserProfile";
import "./App.css";
import { AuthContext } from "./context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          {" "}
          {/* Main product page*/}
          <Main />
        </Route>
        <Route path="/user" exact>
          {" "}
          {/* My user details*/}
          <UserProfile />
        </Route>
        <Route path="/users/:userId" exact>
          {" "}
          {/* Other user details and products*/}
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/login" exact>
          {" "}
          {/* Login Page*/}
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <BrowserRouter>{routes}</BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
