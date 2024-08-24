import React from 'react'

import './men.css'
import menshirts_data from "../../assets/menshirts_data";
import arrow from "../../assets/arrow.png";
const Men = () => {
  return (
    <div className="men">
      <h1>MEN</h1>
      <div className="shirts">
        <h2>Shirts</h2>
      </div>
      <div className="mywork-container">
        {menshirts_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}

export default Men
