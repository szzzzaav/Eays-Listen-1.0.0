import { NavLink } from "react-router-dom";
import {
  HiLockClosed,
  HiLockOpen,
  HiOutlineMail,
  HiUser,
} from "react-icons/hi";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import {
  FormImg,
  FormLayout,
  FormRow,
  StyledLayout,
} from "../../ui/AuFormLayout";
import { useForm } from "react-hook-form";

import useJump from "../../hooks/useJump";
import Button from "../../ui/Button";
import ErrorMessage from "../../ui/ErrorMessage";
import useSignUp from "./useSignUp";
import SpinnerMini from "../../ui/SpinnerMini";

function SignUpForm() {
  const { setIsLoading } = useTransitionContext();
  const { jump } = useJump(setIsLoading);
  const { signUpFn, isSignUping } = useSignUp();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const submit = function (data) {
    signUpFn(data);
  };

  return (
    <StyledLayout $hi={"100vh"}>
      <FormLayout as="form" onSubmit={handleSubmit(submit)}>
        <FormImg src="/logo.png" />
        <span>JOIN US</span>
        <FormRow>
          <HiUser />
          <input
            type="text"
            id="name"
            placeholder="name"
            disabled={isSignUping}
            {...register("fullName", {
              required: "name required",
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
        <FormRow>
          <HiOutlineMail />
          <input
            type="text"
            id="email"
            placeholder="email"
            disabled={isSignUping}
            {...register("email", {
              required: "email require",
              pattern: {
                value:
                  /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                message: "Mailbox format error",
              },
            })}
          />
          {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormRow>
        <FormRow>
          <HiLockOpen />
          <input
            type="password"
            id="password"
            placeholder="password "
            disabled={isSignUping}
            {...register("password", {
              required: "password required",
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
          {errors?.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormRow>
        <FormRow>
          <HiLockClosed />
          <input
            type="password"
            id="passwordConfirm"
            placeholder="passwordConfirm"
            disabled={isSignUping}
            {...register("passwordConfirm", {
              required: true,
              validate: (value, formValues) =>
                value === formValues.password || "different from password",
            })}
          />
          {errors?.passwordConfirm && (
            <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
          )}
        </FormRow>
        <FormRow>
          <NavLink to="/login" onClick={(e) => jump(e, "/login")}>
            Login
          </NavLink>
        </FormRow>
        <FormRow>
          <Button disabled={isSignUping}>
            {isSignUping ? <SpinnerMini /> : "Sign Up"}
          </Button>
        </FormRow>
      </FormLayout>
    </StyledLayout>
  );
}

export default SignUpForm;
