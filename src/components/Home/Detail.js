import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="background image"
        />
      </Background>
      <ImageTitle>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/disney_day_media_center_thumbnail_may_2021_2efd1253.jpeg?region=361,0,1778,1000&width=1200"
          alt="logo image"
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/images/play-icon-black.png" alt="playbutton" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/images/play-icon-white.png" alt="playbutton" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton></AddButton>
        <GroupWatchButton></GroupWatchButton>
      </Controls>
    </Container>
  );
};

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const Controls = styled.div`
  display: flex;
`;
const PlayButton = styled.button`
  margin-right: 24px;
  padding: 0px 24px;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing:1.8px;
`;
const TrailerButton = styled.button``;
const AddButton = styled.button``;
const GroupWatchButton = styled.button``;
