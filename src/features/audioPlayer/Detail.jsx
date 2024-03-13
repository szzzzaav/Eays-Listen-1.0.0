import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { IoAddSharp } from "react-icons/io5";
import { useAudioContext } from "../../context/useAudioPlayer";

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
`;

const StyledSongName = styled.div`
  font-family: Ubuntu;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
`;

const StyledSinger = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #cdcdcd;
`;

const StyledUserOperate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  flex-shrink: 0;
  & svg {
    width: 25px !important;
    height: 25px !important;
    font-size: 25px;
    color: #fff;
  }
`;

function Detail() {
  const { currentMusic } = useAudioContext();
  return (
    <>
      <StyledContainer>
        <StyledSongName>{currentMusic?.music?.name}</StyledSongName>
        <StyledSinger>{currentMusic?.music?.author}</StyledSinger>
      </StyledContainer>
      <StyledUserOperate>
        <FcLike />
        <IoAddSharp />
      </StyledUserOperate>
    </>
  );
}

export default Detail;
