import React from "react";
import "./Styles/Doman.css";

const Doman = () => {
  return (
    <>
      <div className="Domancontainer">
        <h3 className="text1">Doman Name</h3>
        <p style={{ textAlign: "center", color: "#fff" }}>RAM | RAM | RAM</p>
      </div>
      <div className="sub title">
        <h3 style={{ color: "#d6375f", textAlign: "center" }}>
          11 February 2024 9:37 AM
        </h3>
        <p style={{ textAlign: "center" }}>Daily Live Result Today</p>
        <h2 style={{ color: "red", textAlign: "center" }}>MUKESH RANA</h2>
        <h2 style={{ color: "green", textAlign: "center" }}>100</h2>
        <h2 style={{ color: "red", textAlign: "center" }}>
          RAVI SINGH CHOHAAN
        </h2>
        <h2 style={{ color: "green", textAlign: "center" }}>50</h2>
      </div>
    </>
  );
};

export default Doman;
