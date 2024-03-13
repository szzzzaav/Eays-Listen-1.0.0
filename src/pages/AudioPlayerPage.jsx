import useChannel from "../hooks/useChannel";
import { useLocation } from "react-router-dom";
import useMusicObjects from "../hooks/useMusicObjects";
import AudioPlayer from "../features/audioPlayer/AudioPlayer";
import PlayList from "../features/audioPlayer/PlayList";

function AudioPlayerPage() {
  const location = useLocation();
  const mid = location.pathname.split("/").at(-1);
  const { data } = useChannel("listener", mid);
  const { musicObjects, setMusicObjects } = useMusicObjects({
    mid,
    data,
  });
  return (
    <>
      <AudioPlayer />
      <PlayList musicObjects={musicObjects} setMusicObjects={setMusicObjects} />
    </>
  );
}

export default AudioPlayerPage;
