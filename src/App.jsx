import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/testvite" element={<Welcome />} />
          <Route path="/testvite/Sign-in" element={<Signin />} />
          <Route path="/testvite/Sign-up" element={<SignUp />} />
          <Route path="/testvite/home" element={<Home />} />
          <Route path="/testvite/movie/:movieid" element={<MovieDetails/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
