import React, { useState, useEffect } from "react";
import "./User.css";
import { toast } from "react-toastify";
import { deleteToken, getToken } from "../service/token";
import { FiFileText, FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { baseURL } from "../../config";
import { useNavigate } from "react-router-dom";
function User({ getData }) {
  const [userName, setUserName] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${baseURL}/users/me`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setFirst_name(result.first_name || "");
        setUserName(result?.username || "");
        setLast_name(result?.last_name || "");
        setCardNumber(result?.card_number || "");
        setPhone(result?.phone_number || "");
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const EditProfile = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const raw = JSON.stringify({
      username: userName,
      first_name: first_name,
      last_name: last_name,
      card_number: cardNumber,
      isadmin: false,
      phone_number: phone,
      password: password,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/users/me\n", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile">
      <div className="container">
        <div className="welcome-text">
          Welcome!{" "}
          <span className="highlight">{first_name + " " + last_name}</span>
        </div>

        <div className="profile-container">
          <div className="sidebar">
            <div className="user-image">
              <div className="image">
                <span>
                  <FiUser />
                </span>
              </div>
              <div className="user-title">
                <p>{first_name + " " + last_name}</p>
                <span> {phone}</span>
              </div>
            </div>
            <div className="menuProfil">
              <div className="MenuBox">
                <span>
                  <BsCart2 />
                </span>
                <p>My installments</p>
              </div>
              <div className="MenuBox">
                <span>
                  <FiFileText />
                </span>
                <p>Payment history</p>
              </div>
              <div className="MenuBox">
                <span>
                  <LuClock4 />
                </span>
                <p>Online orders</p>
              </div>
              <div
                onClick={() => {
                  deleteToken();
                  navigate("/");
                  getData();
                  toast.info("You have been logged out.")
                }}
                className="MenuBox"
              >
                <span>
                  <CiLogout />
                </span>
                <p>Logout</p>
              </div>
            </div>
          </div>

          <div className="profile-form">
            <h3>Edit Your Profile</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input
                  onChange={(e) => setFirst_name(e.target.value)}
                  value={first_name}
                  type="text"
                  placeholder="Md"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  onChange={(e) => setLast_name(e.target.value)}
                  value={last_name}
                  type="text"
                  placeholder="Rimel"
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="username"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  onChange={(e) => setCardNumber(e.target.value)}
                  value={cardNumber}
                  type="number"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="tel"
                  placeholder="+998...."
                />
              </div>
            </div>

            <h4>Password Changes</h4>
            <div className="form-group">
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                type="password"
              />
            </div>
            <div className="form-group">
              <input placeholder="Confirm New Password" type="password" />
            </div>

            <div className="form-actions">
              <button className="cancel-btn">Cancel</button>
              <button onClick={EditProfile} className="save-btn">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
