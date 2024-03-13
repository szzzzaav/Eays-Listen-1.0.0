import styled, { css } from "styled-components";
import { GoPerson } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { FaPlay, FaDownload } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import { StyledAvatar } from "../../ui/Avatar";
import SpinnerMini from "../../ui/SpinnerMini";
import FlexContainer from "../../ui/FlexContainer";
import { NavLink } from "react-router-dom";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import useJump from "../../hooks/useJump";
import StyledButton from "./MusicButton";
import useChannel from "../../hooks/useChannel";

const CustomMediaContainer = styled(FlexContainer)`
  flex-direction: column;
  gap: 5px;
  padding: 10px 10px;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
  @media (max-width: 1300px) {
    width: 100%;
    & button {
      width: 80%;
    }
  }
`;

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 80%;
  height: 80%;
  gap: 20px;
  @media (min-width: 1300px) {
    width: 1200px;
    height: 450px;
    gap: 50px;
  }
  flex-shrink: 1;
`;
const StyledCover = styled.div`
  display: none;
  @media (min-width: 1300px) {
    display: block;
    width: 316px !important;
    height: 316px !important;
  }
  @media (min-width: 500px) {
    display: block;
    width: 200px;
    height: 200px;
  }
  overflow: hidden;
  border-radius: 20px;
  -webkit-box-shadow: 14px 5px 37px -16px #8b8b8b;
  -moz-box-shadow: 14px 5px 37px -16px #8b8b8b;
  box-shadow: 14px 5px 37px -16px #8b8b8b;
  ${(props) =>
    props.$src &&
    css`
      background-image: url(${props.$src});
    `}
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  @media (min-width: 1300px) {
    font-size: 26px;
  }
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.88);
  word-break: break-word;
`;

const StyledAuth = styled.div`
  display: none !important;
  @media (min-width: 1300px) {
    font-size: 26px;
    display: block;
  }
  font-weight: 600;
  display: flex;
  align-items: center;
  color: var(--color--blue-80);
  word-break: break-word;
`;

function MusicDetail({ data, provider, isPending }) {
  const { setIsLoading, isLoading } = useTransitionContext();
  const { jump } = useJump(setIsLoading, isLoading);
  const { channel, sendMsg } = useChannel();
  const handlePlayClick = function () {
    if (!channel.listeners.size) {
      window.open(`/player/${data.id}`, "_blank");
    } else {
      sendMsg(
        {
          type: "data",
          data,
        },
        channel
      );
    }
  };
  return (
    <StyledContainer>
      {isPending ? (
        <SpinnerMini />
      ) : (
        <>
          <StyledCover $src={data?.cover || "/logo.png"} />
          <FlexContainer
            $fd={"column"}
            style={{ height: "316px", justifyContent: "space-between" }}
          >
            <FlexContainer
              style={{ justifyContent: "space-between" }}
              $gap={"200px"}
            >
              <FlexContainer
                $fd={"column"}
                $gap={"0px"}
                style={{ alignItems: "flex-start" }}
              >
                <StyledTitle>{data?.name}</StyledTitle>
                <StyledAuth>
                  <span>
                    <GoPerson />
                  </span>
                  {data.author}
                </StyledAuth>
                <StyledTitle>
                  <span>
                    <MdDateRange />
                  </span>
                  {new Date(data?.created_at).toLocaleDateString()}
                </StyledTitle>
              </FlexContainer>
              <FlexContainer $gap={"20px"}>
                <NavLink
                  onClick={(e) => jump(e, `/view/user/${data.createUserId}`)}
                >
                  <StyledAuth>Provider:</StyledAuth>
                  <StyledAvatar src={provider?.avatar || "/logo.png"} />
                </NavLink>
              </FlexContainer>
            </FlexContainer>
            <CustomMediaContainer
              $gap={"5px"}
              style={{ justifyContent: "flex-start", width: "100%" }}
            >
              <StyledButton onClick={handlePlayClick}>
                <FaPlay />
              </StyledButton>
              <StyledButton>
                <FcLike />
              </StyledButton>
              <StyledButton>
                <FaDownload />
              </StyledButton>
            </CustomMediaContainer>
          </FlexContainer>
        </>
      )}
    </StyledContainer>
  );
}

export default MusicDetail;
