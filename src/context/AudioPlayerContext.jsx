import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AudioPlayerContext = createContext();

function AudioPlayerContextProvider({ children }) {
  const [playList, setPlayList] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <AudioPlayerContext.Provider
      value={{ playList, setPlayList, open, setOpen }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

function useAudioProviderContext() {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error("This context is used outside of the provider");
  }
  return context;
}

export { AudioPlayerContextProvider, useAudioProviderContext };
