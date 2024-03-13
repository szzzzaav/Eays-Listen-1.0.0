import { useState } from "react";
import { shrinkImage } from "shrinkpng";
import { StyledImgUpLoad } from "../../ui/MusicupLoadForm";
import { FaPlus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

import ErrorMessage from "../../ui/ErrorMessage";
import SpinnerMini from "../../ui/SpinnerMini";
function CoverUpLoad({
  register,
  errors,
  setOptimizeImg,
  imageUrl,
  setImageUrl,
  resetField,
}) {
  const [upLoading, setUpLoading] = useState(false);
  const handleCoverUpload = async function (e) {
    setImageUrl("");
    setUpLoading(true);
    const image = e.target.files[0];
    let _image = image;
    setOptimizeImg(image);
    if (image.size >= 1600000) {
      _image = await shrinkImage(image, {
        quality: 80,
      });
      setOptimizeImg(_image);
    }
    const fr = new FileReader();
    fr.readAsDataURL(_image);
    fr.onload = () => {
      setUpLoading(false);
      setImageUrl(fr.result);
    };
  };
  return (
    <>
      <StyledImgUpLoad
        onClick={(e) => {
          e.target.querySelector("input")?.click();
        }}
      >
        {upLoading ? <SpinnerMini /> : <FaPlus />}
        {imageUrl && <img src={imageUrl} alt="" />}
        <span>Cover</span>
        <span>png Format</span>
        <input
          type="file"
          id="cover"
          accept=".png"
          {...register("cover", {
            required: "cover required",
          })}
          onChange={handleCoverUpload}
        />
        {errors?.cover && <ErrorMessage>{errors.cover.message}</ErrorMessage>}
      </StyledImgUpLoad>
      {imageUrl && (
        <GrPowerReset
          style={{ cursor: "pointer" }}
          onClick={() => {
            setImageUrl();
            resetField("cover");
          }}
        />
      )}
    </>
  );
}

export default CoverUpLoad;
