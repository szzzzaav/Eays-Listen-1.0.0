import styled, { css } from "styled-components";
import { StyledLayout } from "../../ui/AuFormLayout";
import MusicDetail from "./MusicDetail";
import { useLocation } from "react-router-dom";
import useMusic from "./useMusic";
import MusicComment from "./MusicComment";

const StyledBg = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  ${(props) =>
    props.$url &&
    css`
      background-image: url(${props.$url});
    `}
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  & > div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
  }
`;

function MusicPage() {
  const location = useLocation();
  const id = location.pathname.split("/").at(-1);
  const { data, isPending } = useMusic(id);
  const { music, provider } = data || {};

  return (
    <StyledLayout $pd={"100px 0px"} $fd={1} $gap={"50px"}>
      <StyledBg $url={music?.cover}>
        <div></div>
      </StyledBg>
      <MusicDetail
        data={music}
        provider={provider?.[0]}
        isPending={isPending}
      />
      <MusicComment />
    </StyledLayout>
  );
}

export default MusicPage;
