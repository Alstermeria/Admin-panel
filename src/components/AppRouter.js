import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function AppRouter() {
  const [isAuth, setIsAuth] = React.useState(false);

  const loginBtnWasPressedHandler = () => {
    setIsAuth(true);
  };

  const handleLogoutBtnWasPressed = () => {
    const result = window.confirm("Are you sure you wanna logout?");
    if (result) setIsAuth(false);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login btnWasPressed={loginBtnWasPressedHandler} />
        </Route>
        <Route path="/">
          <Home
            logoutBtnWasPressed={handleLogoutBtnWasPressed}
            isAuth={isAuth}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
