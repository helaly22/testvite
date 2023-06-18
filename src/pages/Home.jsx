import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../components/card";
import img from "../image/1.png";
import "./nav.css";
import { Link } from "react-router-dom";
import AdvancedCarousel from "../components/Carousel";
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
      <header>
        <div className="header-left">
          <div className="logo1">
            <Link to={"/testvite/home"}>
              {" "}
              <img src={img} alt="" />
            </Link>
          </div>
          <nav id="nav">
            <ul>
              <li>
                <Link to="/testvite/home" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="">Movies</Link>
              </li>
              <li>
                <Link to="">TV Show</Link>
              </li>
              <li>
                <Link to="">Trending</Link>
              </li>
              <li>
                <Link to={"/testvite/Sign-in"}>LogOut</Link>
              </li>
            </ul>
          </nav>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value.toUpperCase());
          }}
        />
        <div className="header-right">
          <div
            className="hamburger"
            id="hamburger"
            onClick={() => {
              document.getElementById("nav").classList.toggle("active");
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
      <div className="row1">
        {Data.map((data) => {
          return Search == data.title ? (
            <div key={data.id} className="show">
              <Card className="cards" data={data} showbutton={true} />
            </div>
          ) : null;
        })}
      </div>
      <AdvancedCarousel />
      {Search == "" && (
        <div className="row1">
          {datas.map((data) => {
            return (
              <div key={data.id} className="show">
                <Card className="cards" data={data} showbutton={true} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
