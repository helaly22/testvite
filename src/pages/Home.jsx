import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../components/card";
import img from "../image/1.png"

import { Link } from "react-router-dom";
import "../components/Nav.css";
function Home() {
  const [datas, setData] = useState([]);
  const [Search, setSearch] = useState([]);
  const [Data, setDatas] = useState([]);
  const getdata = () => {
    fetch("http://localhost:3000/Movies")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetch("http://localhost:3000/Movies")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <img src={img} alt="LOGO" style={{ width: "10%" }} />
            </li>
            <div className="float-left">
              <li>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value.toUpperCase());
                  }}
                />
              </li>
              <li>
                <Link className="a" to={"/testvite/sign-in"}>
                  Log Out
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <div className="row">
        {Data.map((data) => {
          return Search == data.title ? (
            <div key={data.id} className="col-3">
              <Card data={data} showbutton={true} />
            </div>
          ) : null;
        })}
      </div>
      {Search == "" && (
        <div className="row">
          {datas.map((data) => {
            return (
              <div key={data.id} className="col-3">
                <Card data={data} showbutton={true} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
