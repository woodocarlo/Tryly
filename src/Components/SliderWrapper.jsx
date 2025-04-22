import React from "react";
import Slider from "react-slick";
import "./Slider.css";

const SliderComponent = () => {
  const images = [
    { src: "https://i.postimg.cc/DzYXWZpV/Untitled-design-9.png", name: "Shop by Skin Tone" },
    { src: "https://i.postimg.cc/jqwwLRrN/you-1.png", name: "Share with friends" },
    { src: "https://i.postimg.cc/FR1vCFxx/you-2.png", name: "Get VR body measurement" },
    { src: "https://i.postimg.cc/8Pp2ZzPf/Untitled-design-10.png", name: "Shop for Occasion" },
    { src: "https://i.postimg.cc/jSb4HZ6s/you-3.png", name: "Match Your Outfit" },

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease",
    arrows: true,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image.src} alt={image.name} className="slider-image" />
            <div className="slider-name">{image.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
