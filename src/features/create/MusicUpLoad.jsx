import { FaMixer, FaPlus } from "react-icons/fa";
import { FormRow } from "../../ui/MusicupLoadForm";
import ErrorMessage from "../../ui/ErrorMessage";
function LyricUpLoad({
  register,
  errors,
  musicArrive: arrive,
  setMusicArrive: setArrive,
}) {
  return (
    <FormRow
      $hiI={1}
      onClick={(e) => {
        const musicInput = document.getElementById("music");
        if (!arrive) {
          musicInput.click();
          setArrive(true);
        } else {
          musicInput.value = "";
          setArrive(false);
        }
      }}
    >
      <div>music File</div>
      <button onClick={(e) => e.preventDefault()}>
        {arrive ? <FaMixer /> : <FaPlus />}
      </button>
      <input
        type="file"
        id="music"
        accept=".mp3,.mp4"
        {...register("music", {
          required: "music required",
        })}
      />
      {errors?.music && <ErrorMessage>{errors.music.message}</ErrorMessage>}
    </FormRow>
  );
}

export default LyricUpLoad;
