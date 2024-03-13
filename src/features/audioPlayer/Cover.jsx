import styled from "styled-components";
import { useAudioContext } from "../../context/useAudioPlayer";

const StyledCoverContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #333333;
  -moz-box-shadow: 1px 2px 7px #333333;
  -webkit-box-shadow: 1px 2px 7px #333333;
  box-shadow: 1px 2px 7px #333333;
  @media (min-width: 440px) {
    width: 400px;
    height: 400px;
  }

  & img {
    width: 100%;
    min-height: 100%;
  }
`;

function Cover() {
  const { currentMusic } = useAudioContext();
  return (
    <StyledCoverContainer>
      <img src={currentMusic?.music?.cover || "/logo.png"} alt="" />
    </StyledCoverContainer>
  );
}

export default Cover;
