import { useState } from "react";
import styled from "styled-components";
import { IoIosColorPalette } from "react-icons/io";
import { useAudioContext } from "../../context/useAudioPlayer";

const ColorContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  height: 30px;
  left: -110px;
  top: calc(50% - 15px);
  @media (min-width: 600px) {
    left: 40px;
  }
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.418);
  border-radius: 5px;
  & div {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    cursor: pointer;
  }
  & .selected {
    border: 2px solid white;
  }
  #blue {
    background: linear-gradient(45deg, #183e6c, #313d43) !important;
  }

  #pink {
    background: linear-gradient(45deg, #f875aa, #8fc3e3) !important;
  }

  #orange {
    background: linear-gradient(45deg, #bc3e08, #7e1b0c) !important;
  }
  #purple {
    background: linear-gradient(
      45deg,
      var(--color-blue-10),
      var(--color-purple)
    ) !important;
  }
`;

function Color() {
  const { color, dispatch } = useAudioContext();
  const [close, setClose] = useState(true);
  return (
    <div style={{ position: "relative" }}>
      <IoIosColorPalette onClick={() => setClose((c) => !c)} />
      {!close && (
        <ColorContainer>
          <div
            id="blue"
            key={"blue"}
            onClick={() =>
              dispatch({ type: "setColor", payload: { $blue: 1 } })
            }
            className={color.$blue && "selected"}
          ></div>
          <div
            id="pink"
            key={"pink"}
            onClick={() =>
              dispatch({ type: "setColor", payload: { $pink: 1 } })
            }
            className={color.$pink && "selected"}
          ></div>
          <div
            id="orange"
            key={"orange"}
            onClick={() =>
              dispatch({ type: "setColor", payload: { $orange: 1 } })
            }
            className={color.$orange && "selected"}
          ></div>
          <div
            id="purple"
            key={"purple"}
            onClick={() =>
              dispatch({ type: "setColor", payload: { $purple: 1 } })
            }
            className={color.$purple && "selected"}
          ></div>
        </ColorContainer>
      )}
    </div>
  );
}

export default Color;
