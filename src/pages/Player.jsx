import { BsArrowLeft } from "react-icons/bs"; 
import styled from 'styled-components'
import avengerVideo from '../assets/avenger.mp4'

import { useNavigate } from "react-router-dom";

const Player = () => {

  const navigate = useNavigate()

  return (
    <PlayerContainer>
      <div className='player'>
        <div className='backArrow'>
          <BsArrowLeft onClick={() => navigate(-1)}/>
        </div>
        <video src={avengerVideo} controls autoPlay loop/>
      </div>
    </PlayerContainer>
  )
}

const PlayerContainer = styled.div`
  .player{
    height: 100vh;
    width: 100vw;
    .backArrow{
    position: absolute;
    padding: 2rem;
    z-index: 1;
    color: black;
    cursor: pointer;
  }
  video{
    height: 100%;
    width: 100%;
  }
  }
`

export default Player
