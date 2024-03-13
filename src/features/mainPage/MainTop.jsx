import useMainTopGsap from "../../hooks/useMainTopGsap";
import { StyledMainTop } from "../../ui/MainTopContent";
import Title from "../../ui/Title";
import StyledWave from "../../ui/Wave";
import Cover from "./Cover";

function MainTop() {
  useMainTopGsap();
  return (
    <StyledMainTop className="main-top">
      <Title />
      <Cover />
      <StyledWave />
    </StyledMainTop>
  );
}

export default MainTop;
