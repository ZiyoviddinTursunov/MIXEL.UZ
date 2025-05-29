import React, { useEffect, useState } from "react";
import { FaBullseye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./Profile.css";
import { getToken } from "../service/token";
import { baseURL } from "../../config";

function Profile() {
  const [Eye, setEye] = useState(false);
  const [Eyetwo, setEyetwo] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile]=useState(null)
  console.log(profile);
  

  const createProfile = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const raw = JSON.stringify({
      username: username,
      first_name: firstname,
      last_name: lastname,
      password: password,
      phone_number: phone,
      card_number: card,
      isadmin: false,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseURL}/users/me`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const getProfile = () => {
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
        setProfile(result)
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="account">
      <div className="container">
        <div className="account_info">
          <ul>
            <li>My Orders</li>
            <li>My WishList</li>
            <li>My Installments</li>
          </ul>
        </div>
        <div className="account_main">
          <div className="account_main_info">
            <h3>Edit Your Profile</h3>
            <div className="account_input">
              <div>
                <h4>First Name</h4>
                <input
                  required
                  value={firstname}
                  onInput={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div>
                <h4>Last Name</h4>
                <input
                  required
                  value={lastname}
                  onInput={(e) => {
                    setLastname(e.target.value);
                  }}
                  type="text"
                />
              </div>
            </div>

            <div className="account_input">
              <div>
                <h4>Username</h4>
                <input
                  required
                  value={username}
                  onInput={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div>
                <h4>Phone </h4>
                <input
                  required
                  value={phone}
                  onInput={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="number"
                />
              </div>
            </div>

            <div className="account_input">
              <div>
                <h4>Card number </h4>
                <input
                  required
                  value={card}
                  onInput={(e) => {
                    setCard(e.target.value);
                  }}
                  type="number"
                />
              </div>
            </div>

            <div className="account_inputs">
              <h4>Password Changes</h4>
              <div>
                <input
                  required
                  value={password}
                  onInput={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={Eye ? "text" : "password"}
                  placeholder="New Password"
                />
                <span
                  onClick={() => {
                    setEye(!Eye);
                  }}
                >
                  {Eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              <div>
                <input
                  type={Eyetwo ? "text" : "password"}
                  placeholder="Confirm New Passwod"
                />
                <span
                  onClick={() => {
                    setEyetwo(!Eyetwo);
                  }}
                >
                  {Eyetwo ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                </span>
              </div>
            </div>

            <div className="account_btns">
              <button>Cancel</button>
              <button
                onClick={() => {
                  createProfile();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
