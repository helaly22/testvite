import { Link } from "react-router-dom";

import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { useEffect } from "react";
import { useState } from "react";
const AdvancedCarousel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Movies/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const { scrollRef, next, prev } = useSnapCarousel();

  return (
    <>
      <div className="Carousel">
        <ul
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "hidden",
            scrollSnapType: "x mandatory",
          }}
        >
          {data.map((data) => (
            <li
              key={data.id}
              style={{
                width: "250px",
                height: "250px",
                flexShrink: 0,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/testvite/movie/${data.id}`}>
                <img src={data.image} alt="" />
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="button-x"
        >
          <button onClick={() => prev()} className="left-x">{`<`}</button>
          <button
            onClick={() => {
              next();
            }}
            className="right-x"
          >{`>`}</button>
        </div>
      </div>
    </>
  );
};

export default AdvancedCarousel;
