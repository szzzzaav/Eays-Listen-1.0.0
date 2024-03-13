import StyledCard from "../../ui/Card";
import StyledHeading from "../../ui/Heading";
import InfiPhoto from "./InfiPhoto";
import MotionPath from "../../ui/MotionPath";
import StyledWave from "../../ui/Wave";

import { FaArrowDown } from "react-icons/fa";

function HotSongs() {
  return (
    <>
      {window.innerWidth >= 800 && (
        <>
          <StyledCard
            $width="100%"
            $height="100vh"
            $index={10}
            $bc="#fff"
            $bs={1}
          >
            <StyledHeading>NEW SONGS</StyledHeading>
            <StyledHeading $size="30px">Try to drag</StyledHeading>
            <StyledHeading style={{ transform: "scale(1.5)" }}>
              <FaArrowDown />
            </StyledHeading>
            <StyledWave $color="#222" />
            <MotionPath />
          </StyledCard>
          <InfiPhoto />
        </>
      )}
    </>
  );
}

export default HotSongs;
