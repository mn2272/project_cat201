import React from "react";
import "./specialoffer.css";

// Predefined array of image paths
const imagePaths = [
  "./assets/banner/banner-1.png",
  "./assets/banner/banner-2.png",
  "./assets/banner/banner-3.png",
];

const Specialoffer = () => {
  return (
    <section className="annoucement">
      <div className="container banner-images">
        {imagePaths.map((path, index) => (
          <div key={index} className={`banner-img${index + 1} banner`}>
            <img src={path} alt={`banner-${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialoffer;
