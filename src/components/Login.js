import React from "react";

function Login(props) {
  return (
    <div class="log-in__form">
      <form id="log-in_form_page" action="#">
        <div>
          <h5>Авторизация</h5>
        </div>
        <div>
          <div class="form__field">
            <p>Логин:</p>

            <input type="text" placeholder="Введите ваш логин" required="" />
          </div>
          <div class="form__field">
            <p>Пароль:</p>
            <input
              id="pass-log_in"
              type="password"
              placeholder="Введите ваш пароль"
              autocomplete="off"
            />
          </div>
        </div>
        <button onClick={props.onClickBtn} type="submit" value="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
