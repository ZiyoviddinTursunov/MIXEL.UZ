import React, { useState } from 'react'
import "./SingUp.css"
import { FaUser, FaLock, FaEnvelope, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function SingPu() {
  const [eye,setEye]=useState(true);




  return (
  <div className="signUp">
      <div className=" container">
      <div className="userImg">
        <img src="/public/imgs/shopping-online-with-e-commerce-system-smartphone-computer-laptop-isometric-flat-design_82984-727.avif" alt="" />
      </div>
    <div className="auth-form">
<h2>
Зарегистрироваться</h2>
  
 
      <form className="hidden-form">
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input 
            type="email" 
            placeholder="Электронная почта" 
          />
        </div>
        
        <div className="input-group">
          <FaPhone className="input-icon" />
          <input 
            type="tel" 
            placeholder="Номер телефона" 
          />
        </div>
        
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
          }}  type="button" className="toggle-password">
           {
              eye ?    <FaEye /> : <FaEyeSlash/>
            }
           
          </button>
        </div>
        
        <button type="submit" className="submit-btn">
          Зарегистрироваться
        </button>
      </form>
      
      <div className="switch-form">
        <p>
          Нет аккаунта?
     <Link to={"/login"}>     <button type="button" className="switch-btn">
          Вход в систему
          </button></Link>
        </p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default SingPu