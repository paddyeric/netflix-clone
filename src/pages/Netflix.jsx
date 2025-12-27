import styled from "styled-components";
import heroImageTwo from "../assets/TheAvengers.jpg";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MovieCard from "../components/MovieCard";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state)=> state.netflix.genresLoaded)
  const movies = useSelector((state)=> state.netflix.movies)

  useEffect(()=>{
    dispatch(getGenres())
  },[])

  useEffect(()=>{
    if(genresLoaded){
      dispatch(fetchMovies({type: "all"}))
    }
  })


  return (
    <HeroContainer>
      <TopNav />
      <div className="hero">
        <img src={heroImageTwo} alt="Hero Image" className="background-image" />
      </div>

      <div className="container">
        <div className="title">
          <h1>Super Man</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            asperiores ea reprehenderit. Quo ratione voluptate, amet ipsa
            consequatur maxime temporibus recusandae dolorum nemo blanditiis
            praesentium nam aperiam quas in! Temporibus.
          </p>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/player")} className="playBtn">
            Play
          </button>
          <button className="moreBtn">More</button>
        </div>
      </div>
      <SliderContainer movies={movies}/>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
      object-fit: cover;
    }
  }
  .container {
    position: absolute;
    bottom: 8rem;
    .title {
      h1 {
        margin-left: 2rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        margin-bottom: -50px;
        width: 640px;
        margin-left: 2rem;
        font-family: "lexend Deca", sans-serif;
        color: white;
      }
    }
  }
  .buttons {
    display: flex;
    gap: 2rem;
    margin-left: 2rem;
    margin-top: 4rem;
    margin-bottom: 7rem;}
  .playBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    border-radius: 1rem;
    font-size: 1.4rem;
    gap: 1rem;
    padding: 0.9rem;
    padding-left: 2rem;
    padding-right: 2.4rem;
    border: none;
    background-color: white;
    cursor: pointer;
    margin-right: 2rem;
  }
  .moreBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 1rem;
    font-size: 1.4rem;
    gap: 1rem;
    padding: 0.9rem;
    padding-left: 2rem;
    padding-right: 2.4rem;
    border: 0.1rem solid white;
    background-color: black;
    cursor: pointer;
  }
`;

export default Netflix;
