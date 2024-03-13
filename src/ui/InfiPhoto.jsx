import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow: hidden;
`;

const StyledPhotos = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  @media screen and (max-aspect-ratio: 1.5/1) {
    & .photos_line,
    & .photos_line_photo {
      font-size: 2px;
    }
  }

  @media screen and (max-aspect-ratio: 0.8/1) {
    & .photos_line,
    & .photos_line_photo {
      font-size: 2.8px;
    }
  }
`;

const StyledPhotoLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  height: 342em;
  margin-bottom: 48em;
  flex-shrink: 0;
`;

const StyledPhoto = styled.div`
  font-size: 1px;
  width: 234em;
  height: 100%;
  border-radius: 15em;
  margin-right: 36em;
  background-color: var(--color-blue-20);
  overflow: hidden;
  flex-shrink: 0;

  & div {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.3s ease;
    user-select: none;
    pointer-events: none;
  }

  &:hover div {
    transform: scale(1.2);
  }
`;

export { StyledContainer, StyledPhoto, StyledPhotoLine, StyledPhotos };
