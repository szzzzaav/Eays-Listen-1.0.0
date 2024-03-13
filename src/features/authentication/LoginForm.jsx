import { NavLink } from "react-router-dom";
import { HiLockClosed, HiOutlineMail } from "react-icons/hi";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import useJump from "../../hooks/useJump";
import {
  FormImg,
  FormLayout,
  FormRow,
  StyledLayout,
} from "../../ui/AuFormLayout";
import Button from "../../ui/Button";
import { useState } from "react";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoading, isLoading } = useTransitionContext();
  const { jump } = useJump(setIsLoading, isLoading);
  const { loginFn, isLogining } = useLogin();

  const handleLogin = function (e) {
    e.preventDefault();
    loginFn({ email, password });
  };

  return (
    <StyledLayout $hi={"100vh"}>
      <FormLayout as="form">
        <FormImg src="/logo.png" />
        <span>Login</span>
        <FormRow>
          <HiOutlineMail />
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLogining}
          />
        </FormRow>
        <FormRow>
          <HiLockClosed />
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLogining}
          />
        </FormRow>
        <FormRow $flex="flex-between">
          <NavLink to="/signup" onClick={(e) => jump(e, "/signup")}>
            Sign up
          </NavLink>
          <NavLink to="/signup">Forget Password</NavLink>
        </FormRow>
        <FormRow>
          <Button onClick={handleLogin} disabled={isLogining}>
            {isLogining ? <SpinnerMini /> : "Login"}
          </Button>
        </FormRow>
      </FormLayout>
    </StyledLayout>
  );
}

export default LoginForm;
