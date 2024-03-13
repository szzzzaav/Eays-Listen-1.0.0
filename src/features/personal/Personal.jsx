import AvatarForm from "./AvatarForm";
import Menu from "./Menu";
import Profile from "./Profile";
import Message from "./Message";
import { useState } from "react";
import { StyledLayout } from "../../ui/AuFormLayout";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  animation: ${appear} 0.5s ease-in-out forwards;
`;

function Personal() {
  const [active, setActive] = useState(1);
  return (
    <StyledLayout $oh={1}>
      {active === 1 && (
        <StyledDiv>
          <Profile />
        </StyledDiv>
      )}
      {active === 2 && (
        <StyledDiv>
          <Message />
        </StyledDiv>
      )}
      {active === 3 && <AvatarForm />}
      <Menu active={active} setActive={setActive} />
    </StyledLayout>
  );
}

export default Personal;
