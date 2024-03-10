import React from "react";
import "./Styles/Notice.css";

const Notice = () => {
  return (
    <>
      <div className="container">
        <div className="noticebox" id="Boxs1">
          <h3 style={{ textAlign: "center", color: "red" }}>NOTICE BOADE</h3>
          <p style={{ textAlign: "center" }}>भारत काभारत का</p>
          <h4 style={{ textAlign: "center", color: "blue" }}>
            SITE SUPERVISER
          </h4>
          <h3 style={{ textAlign: "center" }}>STRITA</h3>
          <h3 style={{ textAlign: "center", color: "blue" }}>730778xxxx</h3>
          <h5 style={{ textAlign: "center", color: "green" }}>
            (Only Whatsapp)
          </h5>
          <h4 style={{ textAlign: "center", color: "red" }}>
            कॉलिंग का समय सुबह 10:00 AM बजे से 12:00 PM बजे तक
          </h4>
          <h4 style={{ textAlign: "center", color: "orange" }}>
            {" "}
            Note: lkfewihfewfi
          </h4>
        </div>
      </div>
    </>
  );
};

export default Notice;
