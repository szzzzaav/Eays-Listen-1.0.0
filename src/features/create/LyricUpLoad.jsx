import { FaMixer, FaPlus } from "react-icons/fa";
import { FormRow } from "../../ui/MusicupLoadForm";

import ErrorMessage from "../../ui/ErrorMessage";
function LyricUpLoad({
  register,
  errors,
  lyricArrive: arrive,
  setLyricArrive: setArrive,
}) {
  return (
    <FormRow
      $hiI={1}
      onClick={(e) => {
        const lyricInput = document.getElementById("lyric");
        if (!arrive) {
          setArrive(true);
          lyricInput.click();
        } else {
          lyricInput.value = "";
          setArrive(false);
        }
      }}
    >
      <div>lyric File</div>
      <button onClick={(e) => e.preventDefault()}>
        {arrive ? <FaMixer /> : <FaPlus />}
      </button>
      <input
        type="file"
        id="lyric"
        accept=".lrc"
        {...register("lyric", {
          required: "lyric required",
        })}
      />
      {errors?.lyric && <ErrorMessage>{errors.lyric.message}</ErrorMessage>}
    </FormRow>
  );
}

export default LyricUpLoad;
