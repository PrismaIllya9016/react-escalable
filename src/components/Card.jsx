import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="Card">
      <Link to={props.title}>
        <h2 className=" text-xl text-blue-500 hover:text-purple-500">
          {props.title}
        </h2>
      </Link>
      <p className=" text-gray-900">{props.description}</p>
    </div>
  );
}

export default Card;
