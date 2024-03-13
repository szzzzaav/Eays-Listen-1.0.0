import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import useJump from "../../hooks/useJump";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8%;
  border-radius: 20px;
  height: 150px;
  flex-shrink: 0;
  @media (min-width: 600px) {
    height: 280px;
  }
  background-color: rgba(255, 255, 255, 0.625);
  backdrop-filter: blur(20px);
`;

const StyledCover = styled.div`
  position: relative;
  border-radius: 50%;
  height: 230px;
  width: 230px;
  @media (max-width: 850px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 610px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 350px) {
    width: 60px;
    height: 60px;
  }
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 80%;
  width: 30%;
  word-wrap: break-word;
  & div {
    position: absolute;
    right: 5px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--color--blue-80);
    @media (max-width: 955px) {
      font-size: 14px;
      letter-spacing: 0px;
    }
    @media (max-width: 955px) {
      font-size: 8.3px;
      letter-spacing: 0px;
    }
  }
`;

function SearchItem({ data }) {
  const { setIsLoading, isLoading } = useTransitionContext();
  const { jump } = useJump(setIsLoading, isLoading);
  return (
    <NavLink
      to={`/music/${data?.id}`}
      onClick={(e) => {
        jump(e, `/music/${data?.id}`);
      }}
    >
      <StyledBox>
        <StyledCover style={{ backgroundImage: `url(${data?.cover})` }} />
        <StyledTitle>
          <div>
            {data?.name}
            <br />
            {data?.author}
          </div>
        </StyledTitle>
      </StyledBox>
    </NavLink>
  );
}

export default SearchItem;
