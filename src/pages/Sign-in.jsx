import "./Sign-in.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
let showButton = true;
const msg = () => {
  const text = `Your Password Or Username Isn't Correct`;
  document.getElementById("msg").innerHTML = `${text}`;
};
function Sign_in() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [datas, setData] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <form method="post" onSubmit={formSubmit}>
        <div className="group">
          <div className="form-group">
            <h3 id="msg"></h3>

            <div className="input">
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
              {datas.map((data) => {
                return (data.email == email) & (data.password == password)
                  ? ((showButton = false),
                    (
                      <Link key={data.id} to={"/testvite/home"} className="Sign_in ">
                        <button
                          key={data.id}
                          className="Sign_in link"
                          type="submit"
                        >
                          Login
                        </button>
                      </Link>
                    ))
                  : null;
              })}
              {showButton == true && (
                <button
                  className="Sign_in link"
                  onClick={() => {
                    msg();
                  }}
                >
                  Login
                </button>
              )}
              <div className="button">
                <p>
                  <b>
                    You Don't Have Account ? <br />
                    <Link to={"/testvite/Sign-up"}>Sign up</Link>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Sign_in;
