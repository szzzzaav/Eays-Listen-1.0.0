import { useAudioContext } from "../../context/useAudioPlayer";
import {
  StyledBgWrapper,
  StyledFake,
  StyledRange,
  StyledTrack,
} from "./Volumn";

import WIDTH from "./PlayerConfig";

function ControlProgress({ useControl, progress, setProgress, musicLen }) {
  const { currentMusic, dispatch, play, firstLoading } = useAudioContext();
  const bgWidth = (progress * WIDTH) / 100;
  return (
    <>
      <StyledBgWrapper style={{ display: !useControl ? "none" : "" }}>
        <StyledFake />
        <StyledTrack style={{ width: `${bgWidth}px` }} />
      </StyledBgWrapper>
      <StyledRange
        type="range"
        max={100}
        min={0}
        value={progress}
        onChange={(e) => {
          // e.preventDefault();
          setProgress(e.target.value);
        }}
        disabled={firstLoading}
        onMouseUp={() => {
          if (!play) dispatch({ type: "play" });
          currentMusic?.musicObject?.jump(
            (progress / 100) * musicLen ?? 0,
            play ? true : false
          );
        }}
        style={{ display: !useControl ? "none" : "" }}
      />
    </>
  );
}

export default ControlProgress;
