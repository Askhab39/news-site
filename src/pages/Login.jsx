import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  function login(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/posts");
  }

  return (
    <div>
      <h1>Страница авторизации</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пороль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

export default Login;
