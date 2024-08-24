import React from 'react'
import menpant from "../../assets/menpant";
import arrow from "../../assets/arrow.png";
const Menpants = () => {
  return (
    <div className="men">
      <div className="shirts">
        <h2>Pants</h2>
      </div>
      <div className="mywork-container">
        {menpant.map((work, index) => {
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

export default Menpants

