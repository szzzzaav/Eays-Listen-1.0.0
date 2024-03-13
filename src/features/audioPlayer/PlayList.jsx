import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";
import FlexContainer from "../../ui/FlexContainer";
import PlayItem from "./PlayItem";
import SpinnerMini from "../../ui/SpinnerMini";
import { useAudioContext } from "../../context/useAudioPlayer";
import { SlLoop } from "react-icons/sl";
import { RxDoubleArrowRight } from "react-icons/rx";
const StyledContainer = styled.div`
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  z-index: 99;
  bottom: 20px;
  left: calc(50% - 175px);
  display: flex;
  width: 350px;
  @media (max-width: 1200px) {
    width: 250px;
    left: calc(73%);
  }
  @media (max-width: 1000px) {
    display: none;
  }
  height: auto;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.418);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & span {
    font-size: 18px;
    color: #cecece;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
  }

  & svg {
    width: 18px;
    height: 18px;
    color: #e6e6e6;
    transition: all 0.3s ease-in-out;
  }
`;

const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 500px;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function PlayList({ musicObjects, setMusicObjects }) {
  const [open, setIsOpen] = useState(false);
  const { isPending, dispatch, playMode } = useAudioContext();
  return (
    <StyledContainer>
      <FlexContainer
        onClick={() => {
          setIsOpen((o) => !o);
        }}
        $gap={"50px"}
      >
        <IoMdPlay style={{ transform: `rotate(${open ? 90 : 0}deg)` }} />
        <span>PlayList</span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "setMode" });
          }}
        >
          {playMode === "loop" ? <SlLoop /> : <RxDoubleArrowRight />}
        </div>
      </FlexContainer>
      {open && (
        <StyledItemContainer>
          {musicObjects.map(({ musicObject, music, lyric }, idx) => (
            <PlayItem
              key={"music" + idx}
              id={music.id}
              cover={music.cover}
              name={music.name}
              setMusicObjects={setMusicObjects}
              onClick={() => {
                dispatch({
                  type: "setMusic",
                  payload: { musicObject, music, lyric },
                });
              }}
            />
          ))}
        </StyledItemContainer>
      )}
      {open && isPending && <SpinnerMini />}
    </StyledContainer>
  );
}

export default PlayList;
