import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [logInPage, setLogInPage] = React.useState(true);

  return (
    <div>
      {logInPage ? <Login onClickBtn={() => setLogInPage(false)} /> : <Home />}
    </div>
  );
}

export default App;
