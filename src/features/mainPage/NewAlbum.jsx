import styled, { css } from "styled-components";
import StyledCard from "../../ui/Card";
import StyledHeading from "../../ui/Heading";
import useAlbumGsap from "../../hooks/useAlbumGsap";

const StyledBg = styled.div`
  position: relative;
  z-index: 2;
  height: 100vh;
  width: 100%;
  justify-content: start;
  align-items: start;
  flex-shrink: 0;
  overflow: hidden;
  display: none;
  @media (min-width: 800px) {
    display: flex;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 150px;
  flex-shrink: 0;
  padding: 40px 60px;
  overflow: hidden;
  transition: all 0.18s linear;
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 88%;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: inset 3px 3px 55px #333333, inset -3px -3px 55px #333333;
`;

const StyledImgBg = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 88%;
  top: 40px;
  left: 40px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease;
`;

const StyledImg = styled.div`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  filter: brightness(0.85);
  ${(props) =>
    props.$img &&
    css`
      background-image: url(${props.$img});
    `}
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FlexContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  opacity: 0;
  transition: all 0.25s ease;
`;

const Record = styled.div`
  position: absolute;
  z-index: -3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  top: calc(50% - 250px);
  border-radius: 50%;
  background-image: url("/Record.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.25s ease;
`;

const RecordImg = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 60%;
  height: 60%;
  ${(props) =>
    props.$url &&
    css`
      background-image: url(${props.$url});
    `}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Button = styled.button`
  background-color: #222;
  text-align: center;
  font-size: 20px;
  border-radius: 30px;
  padding: 10px 20px;
  color: #fff;
  border: none;
`;

function NewAlbum() {
  useAlbumGsap();

  return (
    <StyledBg className="scrollbox">
      <StyledContainer className="scrollbox_container">
        <StyledCard className="scrollbox_card">
          <StyledHeading className="underline">NEW ALBUM APPEND</StyledHeading>
        </StyledCard>
        <StyledCard className="scrollbox_card">
          <StyledImgBg className="imgBg" />
          <Record className="record">
            <RecordImg $url={"/a1.png"} />
          </Record>
          <StyledImgWrapper>
            <StyledImg $img="/a1.png" />
          </StyledImgWrapper>
          <FlexContainer className="text">
            <span>Easy Music</span>
            <Button>Add</Button>
          </FlexContainer>
        </StyledCard>
        <StyledCard className="scrollbox_card">
          <StyledImgWrapper>
            <StyledImgBg />
            <StyledImg $img="/a3.png" />
          </StyledImgWrapper>
          <FlexContainer>
            <span>Elden Ring</span>
            <Button>Add</Button>
          </FlexContainer>
        </StyledCard>
        <StyledCard className="scrollbox_card">
          <StyledImgWrapper>
            <StyledImgBg />
            <StyledImg $img="/a3.png" />
          </StyledImgWrapper>
          <FlexContainer>
            <span>Elden Ring</span>
            <Button>Add</Button>
          </FlexContainer>
        </StyledCard>
        <StyledCard className="scrollbox_card">
          <StyledImgWrapper>
            <StyledImgBg />
            <StyledImg $img="/a3.png" />
          </StyledImgWrapper>
          <FlexContainer>
            <span>Elden Ring</span>
            <Button>Add</Button>
          </FlexContainer>
        </StyledCard>
        <StyledCard className="scrollbox_card">
          <StyledImgWrapper>
            <StyledImgBg />
            <StyledImg $img="/a3.png" />
          </StyledImgWrapper>
          <FlexContainer>
            <span>Elden Ring</span>
            <Button>Add</Button>
          </FlexContainer>
        </StyledCard>
      </StyledContainer>
    </StyledBg>
  );
}

export default NewAlbum;
