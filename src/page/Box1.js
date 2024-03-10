import React from "react";
import "./Styles/Box.css";
// import buy from "../Img/buy-1.jpg";
import { Link } from "react-router-dom";

const Box1 = () => {
  return (
    <>
      <div className="manclass">
        <div className="box_1" id="box_2">
          {/* <img src={buy} className="imgg" /> */}
          <h5 className="manhad">Ganesh Sharma</h5>
          {/* <h6 style={{ marginleft: "10vh", color: "#000", fontWeight: "400" }}>
            Posting Date 17-02-2004, 11:11:11
          </h6> */}
          <h3 className="box1_h3">Today is a sunday</h3>
          <p className="box_1p_1">🎀🔰🎀</p>
          <p className="box_1p_1">
            भारत का इतिहास कई सहस्र वर्ष पुराना माना जाता है
          </p>
          <p className="box_1p_1">
            गंगा में तीर्थ के माध्यम से खोजा गया उन सभी के लिए
          </p>
          <br />
          <p className="box_1p_1">
            भारत का इतिहास कई सहस्र वर्ष पुराना माना जाता है गंगा में तीर्थ
            <p className="box_1p_1">🎀🔰🎀</p>
            <p className="box_1p_1">💛भारत का इतिहास कई💛</p>
            <p className="box_1p_1">भारत का इतिहास MD</p>
            4567XXXX
            <br />
            22334XXX<br></br>
          </p>
          <Link to="tel:+91.844.505.4232">
            <button className="bttn1">Call Now</button>
          </Link>
          <Link to="https://api.whatsapp.com/send?phone=844504456">
            <button className="bttn22">WhatsApp</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Box1;
