import React, { useEffect, useState } from "react";
import "./Login.css";
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
import { setToken } from "../service/token";
import { baseURL } from "../../config";

function Login({ getData }) {
  const [eye, setEye] = useState(true);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const getLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: name,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseURL}/token/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        {
          setToken(result?.access);
        }
        {
          result.access
            ? toast.success("You have successfully logged in")
            : toast.error("This user does not exist");
        }
        {
          result.access && setName("");
        }
        {
          result.access && setPassword("");
        }
        {
          result.access && navigate("/");
        }
        {
          result.access && getData();
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
    <div className="Login">
      <div className=" container">
        <div className="userImg">
          <img
            src="/public/imgs/shopping-online-with-e-commerce-system-smartphone-computer-laptop-isometric-flat-design_82984-727.avif"
            alt=""
          />
        </div>
        <div className="auth-form">
          <h2>Login to MIXEL</h2>

          {/* Форма входа */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getLogin();
            }}
            className="active-form"
          >
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                required
                value={name}
                onInput={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter your username"
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                required
                value={password}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
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
              Login
            </button>
          </form>

          <div className="switch-form">
            <p>
              Don't have an account?
              <Link to={"/singup"}>
                {" "}
                <button type="button" className="switch-btn">
                  Register
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
