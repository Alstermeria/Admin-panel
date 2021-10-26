import React from "react";
import { useHistory } from "react-router-dom";
import { usersData } from "../dummyData/auth";

function Login(props) {
  const { btnWasPressed } = props;
  const [inputState, setInputState] = React.useState({
    email: "",
    password: "",
  });
  const routerHistory = useHistory();
  const authBtnWasPressed = () => {
    console.log(inputState);
    const isCorrectuserCredentials = usersData.find((el) => {
      return (
        el.username === inputState.email && el.password === inputState.password
      );
    });
    if (isCorrectuserCredentials) {
      btnWasPressed();
      routerHistory.push("/");
    } else {
      window.alert("Wrong credentials");
    }
  };

  return (
    <div className="log-in__form">
      <form id="log-in_form_page" action="#">
        <div>
          <h5>Авторизация</h5>
        </div>
        <div>
          <div className="form__field">
            <p>Логин:</p>

            <input
              type="text"
              placeholder="Введите ваш логин"
              required=""
              value={inputState.email}
              onChange={(e) => {
                setInputState((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
          </div>
          <div className="form__field">
            <p>Пароль:</p>
            <input
              id="pass-log_in"
              type="password"
              placeholder="Введите ваш пароль"
              autoComplete="off"
              value={inputState.password}
              onChange={(e) => {
                setInputState((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />
          </div>
        </div>
        <button onClick={authBtnWasPressed}>Войти</button>
      </form>
    </div>
  );
}

export default Login;
