import styled from "styled-components";
import SearchList from "./SearchList";

const StyledBg = styled.div`
  position: fixed;
  z-index: -5;
  width: 100%;
  height: 100vh;
  background-image: url("/a1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledBlur = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.173);
  backdrop-filter: blur(5px);
`;

function SearchTable() {
  return (
    <>
      <StyledBg />
      <StyledBlur />
      <SearchList />
    </>
  );
}

export default SearchTable;
