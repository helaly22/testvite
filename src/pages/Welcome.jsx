import "./Welcome.css";
import "./Sign-in.css";
import img from "../image/1.png"
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <>
      <div className="box">
        <div className="inner">
          <img className="logo" src={img} alt="movie poster" />
          <div className="login">
            <Link to="/testvite/Sign-in">
              <button> Sign-in </button>
            </Link>
          </div>
          <div className="content">
            <p>Watch All Cartoon Movies You Like,More </p>
            <Link to="/testvite/Sign-up">
              <button> {` Get Started > `} </button>
            </Link>
          </div>
        </div>
        <div className="kids-section">
          <div className="section-image"></div>
          <div className="section-title">
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
