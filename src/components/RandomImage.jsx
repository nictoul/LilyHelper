import React from "react";

// Load all images from the assets folder
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

function RandomImage({ score }) {
  // Select a random image
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return score.numberOfTry > 4 &&
    score.numberOfTry % 5 === 0 &&
    score.numberOfSuccess / score.numberOfTry > 0.79 ? (
    <div>
      <img
        src={randomImage}
        alt="Random"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  ) : null;
}

export default RandomImage;
