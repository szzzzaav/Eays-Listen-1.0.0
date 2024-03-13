import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  left: 20%;
  display: none;
  @media (min-width: 630px) {
    display: block;
  }
`;

const StyledHone = styled.div`
  overflow: hidden;
  & span {
    transform: translateY(100%);
    opacity: 0;
    mix-blend-mode: difference;
  }
`;

function Title() {
  return (
    <StyledContainer className="TextContainer">
      <StyledHone>
        <span className="hidden-text">WE ARE A</span>
      </StyledHone>
      <StyledHone>
        <span className="hidden-text">CREATIVE</span>
      </StyledHone>
      <StyledHone>
        <span className="hidden-text">MUSCI WEBSITE</span>
      </StyledHone>
    </StyledContainer>
  );
}

export default Title;
