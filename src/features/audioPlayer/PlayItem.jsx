import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useAudioContext } from "../../context/useAudioPlayer";
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 5px 10px;
  height: 40px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.418);
  }
`;

const ImgWrapper = styled.div`
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.418);
  & img {
    width: 100%;
    min-height: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  overflow: hidden;
  & span {
    font-size: 18px;
    color: #cecece;
    font-weight: 600;
    white-space: nowrap;
    font-family: Arial, Helvetica, sans-serif;
    transition: all 0.3s ease-in-out;
  }
  &:hover span {
    transform: translate(calc(-100% + 200px), 0);
  }
`;

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.141);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  & svg {
    width: 14px;
    height: 14px;
    color: #b7b7b7;
  }
`;

function PlayItem({ cover, name, setMusicObjects, id, onClick }) {
  const { dispatch, currentMusic } = useAudioContext();
  return (
    <StyledContainer onClick={onClick}>
      <ImgWrapper>
        <img src={cover} alt={name} />
      </ImgWrapper>

      <TextWrapper>
        <span>{name}</span>
      </TextWrapper>

      <SvgWrapper
        onClick={(e) => {
          e.stopPropagation();
          setMusicObjects((ob) => ob.filter((o) => o?.music?.id !== id));
          if (currentMusic?.music?.id === id) {
            currentMusic.musicObject.pause();
            currentMusic.musicObject.stop();
            dispatch({ type: "clear" });
          }
        }}
      >
        <RxCross2 />
      </SvgWrapper>
    </StyledContainer>
  );
}

export default PlayItem;
