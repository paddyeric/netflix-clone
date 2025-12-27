import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TbPlayerPlayFilled } from "react-icons/tb";


export default React.memo(function MovieCard ({movieData})  { 


  const navigate = useNavigate();

  return (
    <CardContainer onClick={()=>navigate('/player')}>
      <div>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movieData.image}`} 
        alt="movie poster" 
        onClick={()=>navigate('/player')}
      />
      </div>

      <div className="player-icon">
      <TbPlayerPlayFilled size={30}/>
      </div>
    </CardContainer>
  );
});

const CardContainer = styled.div`
margin-top: 1rem;
  max-width: 200px;
  width: 200px;
  height: 100%;
  cursor: pointer;
  position: relative;
  background-color: red;
  img{
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
  }
  img:hover{
      transition-duration: 0.5s;
      box-shadow: 0 0 20px rgba(0,255,255,0.5);
  }

  .player-icon{
    position: sticky;
    color: #ffffffca;
    justify-content: center;
    display: flex;
    margin-top: -70px;
    background-color: none;
    z-index: 1;
  }
  .player-icon:hover{
    transition-duration: 1s;
      transform: scale(1.5);
      color: #ffffffe5;
    }
`

