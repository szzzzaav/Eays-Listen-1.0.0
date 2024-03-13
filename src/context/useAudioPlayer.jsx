import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const AudioContext = createContext();
const InitialState = {
  currentMusic: null,
  currentLyric: null,
  openLyric: true,
  color: { $orange: 1 },
  play: null,
  firstLoading: false,
  isPending: false,
  playMode: "loop",
};

function reducer(state, action) {
  switch (action.type) {
    case "setPending":
      return { ...state, isPending: true };
    case "setFirstLoading":
      return { ...state, firstLoading: true };
    case "finishPending":
      return { ...state, isPending: false };
    case "finishFirstLoad":
      return { ...state, firstLoading: false };
    case "setMusic": {
      let isOld = state.currentMusic?.music?.id === action.payload?.music?.id;

      if (!isOld) {
        state.currentMusic?.musicObject?.stop();
        state.currentMusic?.musicObject?.resetEls();
        action?.payload?.musicObject?.volumn(
          state.currentMusic?.musicObject?.volumnSet
        );
      }
      return {
        ...state,
        currentMusic: isOld
          ? state.currentMusic
          : {
              musicObject: action?.payload?.musicObject,
              music: action?.payload?.music,
            },
        currentLyric: isOld ? state.currentLyric : action.payload.lyric,
      };
    }
    case "setColor":
      return { ...state, color: action.payload };
    case "changeLyric":
      return { ...state, openLyric: !state.openLyric };
    case "play":
      return { ...state, play: true };
    case "pause":
      return { ...state, play: false };
    case "clear": {
      state.currentMusic?.musicObject?.resetEls();
      return { ...state, currentMusic: {}, play: false, currentLyric: {} };
    }
    case "reset": {
      return InitialState;
    }
    case "setMode": {
      return {
        ...state,
        playMode: state.playMode === "loop" ? "order" : "loop",
      };
    }
    default:
      return null;
  }
}

const AudioContextProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const volumnRef = useRef();
  const progressRef = useRef();
  const progressBgRef = useRef();
  const lyricStageRef = useRef();
  const visualStageRef = useRef();
  const timeProgressRef = useRef();
  const [musicObjects, setMusicObjects] = useState([]);

  const { currentMusic, isPending, playMode } = state;

  useEffect(
    function () {
      const handleSwitchNext = function (currentMusic) {
        if (!currentMusic) return;
        let idx = 0;
        musicObjects.forEach((e, i) => {
          if (e.music?.id === currentMusic?.music?.id) {
            idx = i;
          }
        });
        idx++;
        if (idx === musicObjects.length) {
          idx = 0;
        }
        dispatch({ type: "setMusic", payload: { ...musicObjects[idx] } });
      };
      if (playMode !== "loop" && musicObjects.length !== 1) {
        currentMusic?.musicObject?.setEvent({
          e: () => handleSwitchNext(currentMusic),
        });
      } else {
        currentMusic?.musicObject?.setEvent({});
      }
    },
    [playMode, musicObjects, currentMusic]
  );

  useEffect(() => {
    if (currentMusic && !isPending) {
      if (currentMusic.musicObject) dispatch({ type: "play" });
      currentMusic?.musicObject?.jump(0, 0);
    }
  }, [currentMusic]);

  useEffect(() => {
    window.addEventListener("unload", () => {
      dispatch({ type: "reset" });
    });
  }, []);

  return (
    <AudioContext.Provider
      value={{
        ...state,
        dispatch,
        volumnRef,
        progressRef,
        progressBgRef,
        lyricStageRef,
        visualStageRef,
        timeProgressRef,
        musicObjects,
        setMusicObjects,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

const useAudioContext = function () {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("This context is used outside of the provider");
  }
  return context;
};

export { useAudioContext, AudioContextProvider };
