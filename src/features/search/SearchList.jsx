import { useLocation } from "react-router-dom";
import useSearchMusic from "./useSearchMusic";
import SolarSpinner from "../../ui/SolarSpinner";
import styled from "styled-components";
import SearchItem from "./SearchItem";

const StyledContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledGrid = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

function SearchList() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchStr = query.get("keyword");
  const { data, isPending } = useSearchMusic(searchStr);
  return (
    <StyledContainer>
      {isPending && <SolarSpinner />}
      {!isPending && (
        <StyledGrid>
          {data.map((d) => (
            <SearchItem data={d} />
          ))}
        </StyledGrid>
      )}
    </StyledContainer>
  );
}

export default SearchList;
