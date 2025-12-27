import React from 'react';
import { styled } from 'styled-components';
import netflixImage from '../assets/netflixImage.jpg'

const BackgroundImage = () => {
  return (
      <BackgroundContainer>
        <img src={netflixImage} alt="no internet connection" />
      </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img{
    height: 100vh;
    width: 100vw;
  }
`

export default BackgroundImage