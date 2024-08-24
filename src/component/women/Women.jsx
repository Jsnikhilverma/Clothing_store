import React from "react";
import "./women.css";
import womenTop from "../../assets/womenTop";
import arrow from "../../assets/arrow.png";
const Women = () => {
  return (
    <div className="women">
      <h1>WOMEN</h1>
      <div className="shirts">
        <h2>Tops</h2>
      </div>
      <div className="mywork-container">
        {womenTop.map((work, index) => {
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
