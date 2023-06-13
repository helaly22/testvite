import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./card.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Card(props) {
  const { data, showbutton } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="row">
        <div className="card">
          <img
            src={data.image}
            className="card-img-top"
            alt={data.title}
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
          />
          <div className="card-body">
            <b>
              <h6 className="card-title">{data.title}</h6>
            </b>
            <p>
              <b>{data.year}</b>
            </p>

            {showbutton == false && (
              <>
                <hr />
                <p>
                  <b>description</b>
                </p>
                <p>
                  {data.description}
                  <br />
                  <br />
                  <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="carousel-item active ">
                        <img
                          src={data.image1}
                          className="d-block w-100"
                          alt={data.title}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={data.image2}
                          className="d-block w-100"
                          alt={data.title}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={data.image3}
                          className="d-block w-100"
                          alt={data.title}
                        />
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </p>
                <br />
                <hr />
                <p>
                  <b>Watch The Trailer</b>
                </p>
              </>
            )}
            {showbutton == false && (
              <>
                <br />
                <iframe
                  src={data.video}
                  width="40%"
                  height="300"
                  allowFullScreen={true}
                  alt={data.title}
                ></iframe>
                <br />
                <br />
                <br />

                <br />
                <br />

                <Link to={"/testvite/home"} className="back-button">
                  
                  Back
                </Link>
              </>
            )}
            {showbutton && (
              <Link to={`/testvite/movie/${data.id}`} className="View-button">
                View
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
