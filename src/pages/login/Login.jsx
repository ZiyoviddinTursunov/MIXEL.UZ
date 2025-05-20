import React, { useEffect, useState } from 'react'
import "./Login.css"
import { FaUser, FaLock, FaEnvelope, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  const [eye,setEye]=useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="Login">
    <div className=" container">
    <div className="userImg">
      <img src="/public/imgs/shopping-online-with-e-commerce-system-smartphone-computer-laptop-isometric-flat-design_82984-727.avif" alt="" />
    </div>
  <div className="auth-form">
    
<h2>Вход в систему</h2>
      
      {/* Форма входа */}
      <form className="active-form">
        <div className="input-group">
          <FaUser className="input-icon" />
          <input 
            type="text" 
            placeholder="Имя пользователя" 
          />
        </div>
        
        <div className="input-group">
          <FaLock className="input-icon" />
          <input 
            type={eye ?"password" :"text" }
            placeholder="Пароль" 
          />
          <button onClick={()=>{
            setEye(!eye)
          }} type="button" className="toggle-password">
            {
              eye ?    <FaEye /> : <FaEyeSlash />
            }
           
         
          </button>
        </div>
        
        <button type="submit" className="submit-btn">
          Войти
        </button>
      </form>
      
    <div className="switch-form">
      <p>
        Нет аккаунта?
  <Link to={"/singup"}>      <button type="button" className="switch-btn">
          Регистрация
        </button></Link>
      </p>
    </div>
  </div>
</div>
</div>
  )
}

export default Login