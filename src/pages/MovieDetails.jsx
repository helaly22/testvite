import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/card";

function MovieDetails(){
    const parmas = useParams();
    const [datas, setData] = useState([]);
    const getdata = () => {
      fetch(`http://localhost:3000/Movies/${parmas.movieid}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
    useEffect(() => {
      getdata();
    }, []);
    return(
        <>
        <Card data={datas} showbutton={false}/>
        </>
    )
}

export default MovieDetails;