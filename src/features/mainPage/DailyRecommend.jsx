import styled, { css } from "styled-components";
import StyledCard from "../../ui/Card";
import StyledHeading from "../../ui/Heading";
import FlexContainer from "../../ui/FlexContainer";

const StyledTitle = styled(StyledHeading)`
  font-family: Arial, Helvetica, sans-serif;
  font-variant: small-caps;
  ${(props) =>
    props.$sd &&
    css`
      text-shadow: 0 0 4px var(--color--blue-80), 0 0 4px var(--color--blue-80),
        0 0 4px var(--color--blue-80), 0 0 4px var(--color--blue-80),
        0 0 4px var(--color--blue-80), 0 0 4px var(--color--blue-80),
        0 0 4px var(--color--blue-80);
      color: #fff;
      font-style: italic;
    `}
  font-size: 2.5rem;
  ${(props) =>
    props.$sz &&
    css`
      @media (min-width: 1300px) {
        font-size: ${props.$sz};
      }
    `}
  ${(props) =>
    props.$hi &&
    css`
      @media (max-width: 800px) {
        display: none;
      }
    `}
`;

const StyledAbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  @media (min-width: 1000px) {
    width: 800px;
    height: 800px;
    left: calc(50% - 400px);
    top: calc(50% - 400px);
  }
  gap: 30px;
  position: absolute;
`;

const StyledImgContainer = styled.div`
  ${(props) =>
    props.$ab &&
    css`
      position: absolute;
    `}

  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
  overflow: hidden;
  border-radius: 20px;
  @media (min-width: 800px) {
    width: 500px;
    height: 500px;
    left: calc(50% - 250px);
    top: calc(50% - 250px);
  }
  ${(props) =>
    props.$bs &&
    css`
      -moz-box-shadow: 2px 2px 5px #333333;
      -webkit-box-shadow: 2px 2px 5px #333333;
      box-shadow: 2px 2px 5px #333333;
    `}
`;

const StyledImg = styled.img`
  width: 500px;
  height: 100%;
`;

function DailyRecommend() {
  return (
    <>
      <StyledCard $width="100%" $height="150vh" $index={2}>
        <FlexContainer $gap={"80px"}>
          <FlexContainer $hi={"100%"} $ai={"flex-start"}>
            <StyledTitle $sz={"120px"} $hi={1}>
              LET
            </StyledTitle>
          </FlexContainer>
          <FlexContainer $gap={"2px"} $fd={"column"}>
            {Array.from({ length: 8 }).map((_, idx) => (
              <StyledTitle key={idx} $sd={1} $sz={"80px"}>
                EASYLISTEN
              </StyledTitle>
            ))}
          </FlexContainer>
          <FlexContainer
            $gap={"2px"}
            $fd={"column"}
            $ai={"flex-start"}
            $hi={"100%"}
            $jc={"flex-end"}
          >
            <StyledTitle $sz={"80px"} $hi={1}>
              SOUNDTRACK
            </StyledTitle>
            <StyledTitle $sz={"80px"} $hi={1}>
              YOUR
            </StyledTitle>
            <StyledTitle $sz={"130px"} $hi={1}>
              LIFE
            </StyledTitle>
          </FlexContainer>
        </FlexContainer>
        <StyledImgContainer $ab={1}>
          <StyledImg src="/headset.png" />
        </StyledImgContainer>
      </StyledCard>

      <StyledCard $width="100%" $height="150vh" $index={2}>
        <FlexContainer $gap={"200px"}>
          <FlexContainer $gap={"2px"} $fd={"column"}>
            {Array.from({ length: 8 }).map((_, idx) => (
              <StyledTitle key={"daily" + idx} $sd={1} $sz={"80px"}>
                DAILY
              </StyledTitle>
            ))}
          </FlexContainer>
          <FlexContainer $gap={"2px"} $fd={"column"}>
            {Array.from({ length: 8 }).map((_, idx) => (
              <StyledTitle key={"recommend" + idx} $sz={"80px"}>
                RECOMMEND
              </StyledTitle>
            ))}
          </FlexContainer>
        </FlexContainer>
        <StyledAbContainer>
          <StyledImgContainer $bs={1}>
            <StyledImg src="https://bcfxfivgypjqtpjtxhqu.supabase.co/storage/v1/object/public/recommend/recommend.png" />
          </StyledImgContainer>
          <audio
            controls
            src="https://bcfxfivgypjqtpjtxhqu.supabase.co/storage/v1/object/public/recommend/recommend.mp3"
            style={{ width: "80%" }}
            loop
          ></audio>
        </StyledAbContainer>
      </StyledCard>
    </>
  );
}

export default DailyRecommend;
