import { StyledLayout } from "../../ui/AuFormLayout";
import { FormLayout, FormRow } from "../../ui/MusicupLoadForm";
import { useForm } from "react-hook-form";

import ErrorMessage from "../../ui/ErrorMessage";
import FlexContainer from "../../ui/FlexContainer";
import CoverUpLoad from "./CoverUpLoad";
import LyricUpLoad from "./LyricUpLoad";
import MusicUpLoad from "./MusicUpLoad";

import { useState } from "react";
import useCreate from "./useCreate";
import SpinnerMini from "../../ui/SpinnerMini";
import useUser from "../authentication/useUser";

function MusicCreate() {
  const { register, formState, handleSubmit, reset, resetField } = useForm();
  const [imageUrl, setImageUrl] = useState();
  const [lyricArrive, setLyricArrive] = useState(false);
  const [musicArrive, setMusicArrive] = useState(false);
  const { user, isPending: PendingUser } = useUser();
  const { mutate, isPending } = useCreate(() => {
    reset();
    setImageUrl();
    setLyricArrive(false);
    setMusicArrive(false);
  });
  const [optimizeImg, setOptimizeImg] = useState();
  const { errors } = formState;
  const submit = (data) => {
    const newData = {
      ...data,
      cover: optimizeImg,
      lyric: data.lyric[0],
      music: data.music[0],
      createUserId: user.id,
    };
    mutate(newData);
  };
  return (
    <StyledLayout $hi={"100vh"}>
      <FormLayout onSubmit={handleSubmit(submit)}>
        <FlexContainer $gap={"60px"}>
          <CoverUpLoad
            register={register}
            errors={errors}
            setOptimizeImg={setOptimizeImg}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            disabled={isPending || PendingUser}
            resetField={resetField}
          />
          <FlexContainer $fd={"column"}>
            <FormRow>
              <div>name</div>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "name required",
                })}
                disabled={isPending || PendingUser}
              />
              {errors?.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </FormRow>
            <FormRow>
              <div>author</div>
              <input
                type="text"
                id="author"
                {...register("author", {
                  required: "author required",
                })}
                disabled={isPending || PendingUser}
              />
              {errors?.author && (
                <ErrorMessage>{errors.author.message}</ErrorMessage>
              )}
            </FormRow>
            <LyricUpLoad
              register={register}
              errors={errors}
              lyricArrive={lyricArrive}
              setLyricArrive={setLyricArrive}
              disabled={isPending || PendingUser}
            />
            <MusicUpLoad
              register={register}
              errors={errors}
              musicArrive={musicArrive}
              setMusicArrive={setMusicArrive}
              disabled={isPending || PendingUser}
            />
          </FlexContainer>
        </FlexContainer>
        <button
          style={{ width: "50%", height: "60px" }}
          disabled={isPending || PendingUser}
        >
          {isPending ? <SpinnerMini /> : "- SUBMIT -"}
        </button>
      </FormLayout>
    </StyledLayout>
  );
}

export default MusicCreate;
