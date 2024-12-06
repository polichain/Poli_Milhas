import React, { useState } from "react";
import R100 from "../../images/R100-removebg-preview.png";
import R300 from "../../images/R300-removebg-preview.png";
import R500 from "../../images/R500-removebg-preview.png";
import R1000 from "../../images/R1000-removebg-preview.png";
import R1500 from "../../images/R1500-removebg-preview.png";

import "./Carousel.css"; 

const Carousel: React.FC = () => {
  const [position, setPosition] = useState<number>(1);

  const handleRadioChange = (newPosition: number): void => {
    setPosition(newPosition);
  };

  return (
    <div className="carousel-container">
      <input
        type="radio"
        name="position"
        checked={position === 1}
        onChange={() => handleRadioChange(1)}
      />
      <input
        type="radio"
        name="position"
        checked={position === 2}
        onChange={() => handleRadioChange(2)}
      />
      <input
        type="radio"
        name="position"
        checked={position === 3}
        onChange={() => handleRadioChange(3)}
      />
      <input
        type="radio"
        name="position"
        checked={position === 4}
        onChange={() => handleRadioChange(4)}
      />
      <input
        type="radio"
        name="position"
        checked={position === 5}
        onChange={() => handleRadioChange(5)}
      />

      <main id="carousel" style={{ "--position": position } as React.CSSProperties}>
        <div className="item">
          <img src={R100} alt="Item" />
          <p className="item-text">1000 Tokens</p>
          <button className="item-button">
            Resgate seu cupom
          </button>
        </div>
        <div className="item">
          <img src={R300} alt="Item" />
          <p className="item-text">2800 Tokens</p>
          <button className="item-button">
            Resgate seu cupom
          </button>
        </div>
        
        <div className="item">
          <img src={R500} alt="Item" />
          <p className="item-text">4500 Tokens</p>
          <button className="item-button">
            Resgate seu cupom
          </button>
        </div>
        <div className="item">
          <img src={R1000} alt="Item" />
          <p className="item-text">8500 Tokens</p>
          <button className="item-button">
            Resgate seu cupom
          </button>
        </div>
        <div className="item">
          <img src={R1500} alt="Item" />
          <p className="item-text">12500 Tokens</p>
          <button className="item-button">
            Resgate seu cupom
          </button>
        </div>
      </main>
    </div>
  );
};

export default Carousel;
