import styled, { css } from "styled-components";

const StyledHeading = styled.div`
  font-size: 50px;
  ${(props) =>
    props.$size &&
    css`
      font-size: ${props.$size};
    `}
  color: #222;
  font-weight: 700;
  background: linear-gradient(
      to right,
      var(--color--blue-100),
      var(--color--blue-60)
    )
    no-repeat left bottom;
  background-size: 0px 3px;
  transition: all 0.3s ease-in-out;
`;

StyledHeading.defaultProps = {
  $size: null,
};

export default StyledHeading;
