import React from "react";
import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(true);

  const handleClickShow = (event) => {
    return setShow(!show);
  };

  return (
    <>
      <div className=" mt-8  text-center">
        {show ? (
          <h1>Hide me!</h1>
        ) : (
          <h1>
            {" "}
            <br />{" "}
          </h1>
        )}
      </div>
      <div
        className=" text-center mt-10
      "
      >
        <button className=" " onClick={handleClickShow}>
          {show ? "Hide Text!" : "Show Text!"}
        </button>
      </div>
    </>
  );
}

export default ShowHide;
