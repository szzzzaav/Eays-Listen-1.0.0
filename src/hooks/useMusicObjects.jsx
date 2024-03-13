import { useEffect } from "react";
import { decodeAudioData, decodeLyric, getMusic } from "../services/apiMusic";
import { useAudioContext } from "../context/useAudioPlayer";

function useMusicObjects({ mid, data }) {
  const {
    dispatch,
    volumnRef,
    progressRef,
    lyricStageRef,
    progressBgRef,
    visualStageRef,
    timeProgressRef,
    musicObjects,
    setMusicObjects,
  } = useAudioContext();

  useEffect(
    function () {
      if (!data.length) return;
      async function getData() {
        dispatch({ type: "setPending" });
        if (data.length === 1) {
          dispatch({ type: "setFirstLoading" });
        }
        try {
          let music;
          if (data.at(-1).music) {
            music = data.at(-1).music;
          } else {
            const { music: audioData } = await getMusic(data.at(-1), false);
            music = audioData;
          }
          let find = false;
          musicObjects.forEach((e) => {
            if (e.music.id === music.id) {
              find = true;
            }
          });
          if (find) return;
          const newMusicObject = await decodeAudioData(music.audio, {
            visualStageRef,
            progressRef,
            progressBgRef,
            volumnRef,
            timeProgressRef,
          });
          const newLyric = await decodeLyric(
            music.lyric,
            music.id,
            lyricStageRef
          );
          setMusicObjects((m) => [
            ...m,
            { musicObject: newMusicObject, music, lyric: newLyric },
          ]);
          newMusicObject.register({
            showlryonlrcstage: newLyric.showlryonlrcstage.bind(newLyric),
          });
          if (data.length === 1) {
            dispatch({
              type: "setMusic",
              payload: { musicObject: newMusicObject, music, lyric: newLyric },
            });
          }
        } catch (error) {
          alert(error);
        } finally {
          dispatch({ type: "finishPending" });
          if (data.length === 1) {
            dispatch({ type: "finishFirstLoad" });
          }
        }
      }
      getData();
    },
    [data]
  );

  return {
    musicObjects,
    setMusicObjects,
  };
}

export default useMusicObjects;
