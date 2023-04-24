import React from "react";
import Comp from "./Header";

const Student = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>

      <comp name={props.name} />
    </>
  );
  Student.prototypes = {
    name: propTypes.string,
    age: propTypes.number,
  };
};

export default Student;
