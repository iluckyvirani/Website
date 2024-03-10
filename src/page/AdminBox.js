import React from "react";
import "./Styles/AdminBox.css";

function AdminBox() {
  return (
    <>
      <div className="container">
        <div className="Adminbox" id="Adminbox1">
          <h4 style={{ marginLeft: "2%" }}>ADMIN</h4>

          <p style={{ marginLeft: "1%" }}>03-09-2024,10:20:29PM</p>
          <h3>HOME</h3>
        </div>
        <div className="Adminbox" id="Adminbox2">
          <h3 className="boxs2">NORMAL POST YE CONT. FIX RAHEGA</h3>
          <p>भारत का इतिहास कई </p>
          <p>गंगा में के लिए जो जीवन</p>
          🎆
          <br />
          🎆
          <p>
            <p>BPOSTING JI</p>
            22334XXX
          </p>
        </div>
        <div className="Adminbox" id="box3">
          <h2 style={{ marginLeft: "2%" }} className="bt2">
            LINK
          </h2>
          <h3 className="boxhome">LINK</h3>
        </div>
      </div>
    </>
  );
}

export default AdminBox;
