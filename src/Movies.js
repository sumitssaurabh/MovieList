import React from "react";

const Movie = (props) => {
  console.log("props", props);
  return (
    <div className="movie">
      <img src={props.img} alt="" />
      <p> Name - {props.title} </p>  
      <p> IMBD ID - {props.imdbd}</p>
      <p> Year -  {props.year}</p>
    </div>
  );
};

export default Movie;
