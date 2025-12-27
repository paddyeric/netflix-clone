import React from "react";
import netFlix from "../assets/netlixLine.png";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrontPage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <FrontContainer className="frontPage">
      <img src={netFlix} alt="" />
      <h1 className="header">Trending Now</h1>

      <div className="slider-container">
        <Slider {...settings}>
          <SlideCard>
            <img
              src="./src/assets/movieImages/beekeeper.jpg"
              alt="no connection"
            />
          </SlideCard>
          <SlideCard>
            <img
              src="./src/assets/movieImages/blackpanther.jpeg"
              alt="no connection"
            />
          </SlideCard>
          <SlideCard>
            <img
              src="./src/assets/movieImages/deadpool.jpg"
              alt="no connection"
            />
          </SlideCard>
          <SlideCard>
            <img
              src="./src/assets/movieImages/furiosa.jpeg"
              alt="no connection"
            />
          </SlideCard>
          <SlideCard>
            <img
              src="./src/assets/movieImages/minecraft.jpg"
              alt="no connection"
            />
          </SlideCard>
          <SlideCard>
            <img
              src="./src/assets/movieImages/road_house.jpg"
              alt="no connection"
            />
          </SlideCard>
          <SlideCard>
            <img
              src="./src/assets/movieImages/scarymovie.jpg"
              alt="no connection"
            />
          </SlideCard>
          <SlideCard>
            <img
              src="./src/assets/movieImages/beekeeper.jpg"
              alt="no connection"
            />
          </SlideCard>
        </Slider>
      </div>
    </FrontContainer>
  );
};

const FrontContainer = styled.div`
  background-color: black;
  color: white;
  .header{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    margin-left: 10px;
  }
  .slider-container {
    padding: 2rem;
    background-color: black;
    color: white;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;

    .box {
      background-color: lightgreen;
      height: 300px;
      width: 200px !important;
      h3 {
        color: white;
        font-size: 2rem;
        text-align: center;
      }
    }
    .slick-slide div {
      margin: 0 1rem;
      border-radius: 10px;
    }
    .slick-next {
      right: -40px !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
    }
  }
`;

const SlideCard = styled.div`
  height: 50vh !important;
  margin: 20px !important;
`;

export default FrontPage;
