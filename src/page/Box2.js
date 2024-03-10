import React from "react";
import "./Styles/Box2.css";
import { Link } from "react-router-dom";

const Box2 = () => {
  return (
    <>
      <div className="Box2container">
        <div className="box_2" id="Box2_box1">
          <p>
            ewnfbjfnrfwfj ioc krkfjnrfr frjkfrefe ehwbjwke jewbwn eww ejwjhw ei
          </p>
          <p>ewknekjwnfwekjfnref wejhw ehbwe webwj</p>
          <p>jejeeewkhkhwe</p>
          <h4>भारत का </h4>

          <p>706723XXXX</p>
          <Link
            classname="btn btn-hire"
            to="https://api.whatsapp.com/send?phone=8445044267"
          >
            <button className="Box2btn1"> whatsapp Chatt Me</button>
          </Link>
          <Link to="tel:+91.844.505.4232">
            <button className="Box2btn2">CALL NOW</button>
          </Link>
        </div>
        <div className="box_2" id="Box_box2">
          <h3 className="boxxs2">NORMAL POST YE CONT. FIX RAHEGA</h3>
          <h4>भारत का </h4>
          <p>706723XXXX</p>
          <Link to="tel:+91.844.505.4232">
            <button style={{ marginLeft: "-2%" }} className="bttn1">
              Call Now
            </button>
          </Link>
          <Link
            classname="btn btn-hire"
            to="https://api.whatsapp.com/send?phone=8445044267"
          >
            <button className="bttnn2">WhatsApp</button>
          </Link>
        </div>
        <div className="box_2" id="box2_box3">
          <p style={{ textAlign: "center", color: "green" }}>
            Some some thing from your idea and other
          </p>
          <p style={{ textAlign: "center", color: "#000" }}>
            Some some thing from your idea and other tjhdbd uydf uyhv uwywv
          </p>
          <p style={{ textAlign: "center", color: "green" }}>भारत का CFO</p>
          <p style={{ textAlign: "center", color: "red" }}>
            Some some thing from your ewhdewui
          </p>
          <h5 style={{ textAlign: "center" }}>706723XXXX</h5>
          <a
            classname="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=8445044268"
          >
            <button className="Box3btn1">whatsapp Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Box2;
