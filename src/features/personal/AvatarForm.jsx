import { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css, keyframes } from "styled-components";

import ErrorMessage from "../../ui/ErrorMessage";
import { FormLayout, FormRow } from "../../ui/MusicupLoadForm";

import FlexContainer from "../../ui/FlexContainer";
import SpinnerMini from "../../ui/SpinnerMini";
import Avatar from "./Avatar";
import useUpdateUser from "./useUpdateUser";

const appear = keyframes`
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  animation: ${appear} 0.5s ease-in-out forwards;
`;

const StyledPath = styled.path`
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
  ${(props) =>
    props.$check &&
    css`
      stroke-dasharray: 70.5096664428711 9999999;
      stroke-dashoffset: -262.2723388671875;
    `}
`;

function AvatarForm() {
  const [image, setImage] = useState("");
  const [changePass, setChangePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutate, isPending: uploadingUser } = useUpdateUser(() => {
    reset();
    setImage();
    setChangePass(false);
  });
  return (
    <StyledFormContainer>
      <FormLayout
        $wi={"60%"}
        onSubmit={handleSubmit((data) => {
          mutate(data);
        })}
      >
        <FlexContainer $gap={"60px"}>
          <Avatar register={register} image={image} setImage={setImage} />
          <FlexContainer $fd={"column"}>
            <FormRow>
              <div style={{ fontSize: "22px", letterSpacing: 0 }}>NEW name</div>
              <input
                type="text"
                id="name"
                disabled={uploadingUser}
                {...register("fullName", {
                  required: false,
                  minLength: {
                    value: 3,
                    message: "The length should be between 3 and 8",
                  },
                  maxLength: {
                    value: 10,
                    message: "The length should be between 3 and 10",
                  },
                })}
              />
              {errors?.fullName && (
                <ErrorMessage>{errors.fullName.message}</ErrorMessage>
              )}
            </FormRow>
            <FormRow $frd={1}>
              <div style={{ fontSize: "22px", letterSpacing: 0 }}>
                Change Password
              </div>
              <label style={{ cursor: "pointer" }}>
                <input
                  type="checkbox"
                  style={{ display: "none" }}
                  value={changePass}
                  onChange={() => setChangePass((changePass) => !changePass)}
                />
                <svg
                  viewBox="0 0 64 64"
                  height="2em"
                  width="2em"
                  style={{ overflow: "visible" }}
                >
                  <StyledPath
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    $check={changePass ? 1 : 0}
                  ></StyledPath>
                </svg>
              </label>
            </FormRow>
            <FormRow>
              <div style={{ fontSize: "22px", letterSpacing: 0 }}>
                OLD password
              </div>
              <input
                type="password"
                id="oldpassword"
                disabled={!changePass || uploadingUser}
              />
            </FormRow>
            <FormRow>
              <div style={{ fontSize: "22px", letterSpacing: 0 }}>
                NEW password
              </div>
              <input
                type="password"
                id="newpassword"
                disabled={!changePass || uploadingUser}
                {...register("password", {
                  required: false,
                  minLength: {
                    value: 8,
                    message: "The length should be between 8 and 14",
                  },
                  maxLength: {
                    value: 14,
                    message: "The length should be between 8 and 14",
                  },
                })}
              />
            </FormRow>
          </FlexContainer>
        </FlexContainer>
        <button style={{ width: "50%", height: "60px" }}>
          {uploadingUser ? <SpinnerMini /> : "- SUBMIT -"}
        </button>
      </FormLayout>
    </StyledFormContainer>
  );
}

export default AvatarForm;
