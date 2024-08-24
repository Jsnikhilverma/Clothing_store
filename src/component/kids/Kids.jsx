import React from "react";
import "./kids.css";
import kidstops from "../../assets/kids_data";
import arrow from "../../assets/arrow.png";
const Women = () => {
  return (
    <div className="kids">
      <h1>KIDS</h1>
      <div className="shirts">
        <h2>Cloths</h2>
      </div>
      <div className="mywork-container">
        {kidstops.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};
export default Women;
