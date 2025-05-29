import React, { useEffect, useState } from "react";
import "./SingUp.css";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../../config";

function SingPu() {
  const [eye, setEye] = useState(true);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const createUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: name,
      email: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseURL}/users/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        {
          result.id
            ? toast.success("Foydalanuvchi ro'yhatga qo'shildi")
            : toast.error(
                "Bu foydalanuvchi nomi orqali avval ro'yhatdan o'tilgan"
              );
        }
        {
          result.id && navigate("/login");
        }
        {
          result.id && setEmail("");
        }
        {
          result.id && setName("");
        }
        {
          result.id && setNumber("");
        }
        {
          result.id && setPassword("");
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="signUp">
      <div className=" container">
        <div className="userImg">
          <img
            src="/public/imgs/shopping-online-with-e-commerce-system-smartphone-computer-laptop-isometric-flat-design_82984-727.avif"
            alt=""
          />
        </div>
        <div className="auth-form">
          <h2>Register to MIXEL</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              createUser();
            }}
            className="hidden-form"
          >
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                value={email}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                required
                type="email"
                placeholder="E-mail"
              />
            </div>

            <div className="input-group">
              <FaPhone className="input-icon" />
              <input
                value={number}
                onInput={(e) => {
                  setNumber(e.target.value);
                }}
                required
                type="tel"
                placeholder="Phone number"
              />
            </div>

            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                value={name}
                onInput={(e) => {
                  setName(e.target.value);
                }}
                required
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                value={password}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                required
                type={eye ? "password" : "text"}
                placeholder="Password"
              />
              <button
                onClick={() => {
                  setEye(!eye);
                }}
                type="button"
                className="toggle-password"
              >
                {eye ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>

          <div className="switch-form">
            <p>
              Already have an account?
              <Link to={"/login"}>
                {" "}
                <button type="button" className="switch-btn">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingPu;
