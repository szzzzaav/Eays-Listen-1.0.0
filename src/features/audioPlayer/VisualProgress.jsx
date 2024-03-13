import { useAudioContext } from "../../context/useAudioPlayer";
import { StyledWave } from "./Progress";
import {
  StyledBgWrapper,
  StyledFake,
  StyledRange,
  StyledTrack,
} from "./Volumn";

import WIDTH from "./PlayerConfig";

function VisualProgress({ useControl }) {
  const { visualStageRef, progressRef, progressBgRef } = useAudioContext();
  const stageElGenerate = function (length, elLength, count) {
    const dis = (length - count * elLength) / (count - 1);
    return Array.from({ length: count }).map((_, i) => {
      return (
        <div
          className="stageEl"
          key={`stgeEl${i}`}
          style={{ left: `${i * elLength + i * dis}px` }}
        ></div>
      );
    });
  };
  return (
    <>
      <StyledBgWrapper style={{ display: useControl ? "none" : "" }}>
        <StyledWave ref={visualStageRef}>
          {stageElGenerate(WIDTH, 3, WIDTH === 400 ? 50 : 30)}
        </StyledWave>
        <StyledFake />
        <StyledTrack ref={progressBgRef} />
      </StyledBgWrapper>
      <StyledRange
        ref={progressRef}
        type="range"
        max={100}
        min={0}
        value={progressRef?.current?.value || 0}
        readOnly
        style={{ display: useControl ? "none" : "" }}
      />
    </>
  );
}

export default VisualProgress;
