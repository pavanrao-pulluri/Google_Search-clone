import React from "react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ fontSize: "36px" }}>Under Construction</h1>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        We are currently working on our website.
      </p>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Please check back later.
      </p>

      <button style={{ padding: "10px" }} onClick={handleClick}>
        Go To SearchPage
      </button>
    </div>
  );
};

export default UnderConstruction;
