import styled, { css } from "styled-components";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import useLogout from "../features/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";
const StyledAvatarContainer = styled.div`
  cursor: pointer;
`;

const StyledAvatar = styled.img`
  position: relative;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  ${(props) =>
    props.$show &&
    css`
      right: 74.5px;
      top: 75px;
      width: 100px;
      height: 100px;
      border-radius: 20px;
      border: none;
    `}
`;

StyledAvatar.defaultProps = {
  $show: 0,
};

const StyledPop = styled.div`
  display: none;
  ${(props) =>
    props.$show &&
    css`
      display: flex;
    `}
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  z-index: 0;
  padding-bottom: 20px;
  top: 60px;
  right: 20px;
  width: 300px;
  height: 250px;
  gap: 10px;
  background-color: #fff;
  border-radius: 20px;
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
  transition: all 0.3s ease;

  & button {
    position: relative;
    z-index: 5;
    cursor: pointer;
    color: #222;
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    border-radius: 10px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    transition: all 0.3s ease;
  }
  & button:hover {
    background-color: rgba(180, 180, 180, 0.5) !important;
  }
  & button span,
  & button a {
    color: #222;
    font-size: 15px;
  }
  & button svg {
    color: #222;
    width: 15px;
    height: 15px;
  }
`;

StyledPop.defaultProps = {
  $show: 0,
};

function Avatar({ user, jump }) {
  const [show, setShow] = useState(false);
  const { mutate: logout, isPending: isLogouting } = useLogout();
  const avatar = user?.user_metadata.avatar;
  const fullName = user?.user_metadata.fullName;
  return (
    <StyledAvatarContainer
      onMouseEnter={(e) => setShow(true)}
      onMouseLeave={(e) => setShow(false)}
    >
      <StyledAvatar
        className="avatar"
        $show={show ? 1 : 0}
        src={avatar || "/logo.png"}
      />
      <StyledPop $show={show ? 1 : 0}>
        <button>
          <span>-</span>
          <span>{fullName}</span>
          <span>-</span>
        </button>
        <button
          onClick={(e) => {
            jump(e, `/user/${user.id}`);
          }}
        >
          <IoPersonOutline />
          <span>Personal Center</span>
        </button>
        <button
          onClick={() => {
            logout();
          }}
        >
          <IoMdLogOut />
          <span>{isLogouting ? <SpinnerMini /> : "Logout"}</span>
        </button>
      </StyledPop>
    </StyledAvatarContainer>
  );
}

export default Avatar;

export { StyledAvatar };
