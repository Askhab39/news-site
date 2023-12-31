import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

function Navbar() {
  const navigate = useNavigate()
  const {setIsAuth} = useContext(AuthContext)

  function logout() {
    setIsAuth(false)
    localStorage.removeItem('auth')
    navigate('login')
  }
  return (
    <div>
      <div className="navbar">
        <MyButton onClick={logout}>Выйти</MyButton>
        <div className="navbar__links">
          <Link style={{marginRight: '10px'}} to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
