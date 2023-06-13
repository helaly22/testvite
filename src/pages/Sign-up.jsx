import "./Sign-in.css";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faShare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [name, setName] = useState([]);
  let Navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/profile", {
        email: email,
        password: password,
        name: name,
      })
      .then((data) => {
        console.log(data.data);
        Navigate("/Sign-in");
      });
  };

  return (
    <>
      <form method="post" onSubmit={formSubmit}>
        <div className="group2">
          <div className="form-group2">
            <p>
              <b>Create Your Account</b>{" "}
            </p>
            <div className="input">
              <div className="Icon-inside">
                <FontAwesomeIcon className="icon" icon={faShare} />
                <input
                  id="input"
                  type="Name"
                  required
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="Icon-inside">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <input
                  type="Email"
                  required
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="Icon-inside">
                <FontAwesomeIcon className="icon" icon={faKey} />
                <input
                  type="Password"
                  required
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="Sign_in" type="submit">
                Sign Up
              </button>
              
                <h6>
                  Already Have Account?{" "}
                  <Link to={"/testvite/Sign-in"}>
                    <button className="Sign_in">Login</button>
                  </Link>
                </h6>
              
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
