import React from "react";
import { Link } from "react-router-dom";
import "./VehiclePages.css";

function VehiclePages({ vehicle }) {
  return (
    <>
      <div id="VehiclePages" className=" m-auto text-center">
        <h1 className="  text-center mt-5 mb-5">{vehicle.name}</h1>
        <h2 className="text-center text-2xl mb-5">{vehicle.description}</h2>
        <div className="centered-image">
          <img
            className=" max-w-full block"
            src={vehicle.image}
            alt={vehicle.name + " image"}
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to={"/"}>
          <button className="">Go Back</button>
        </Link>
      </div>
    </>
  );
}

export default VehiclePages;
