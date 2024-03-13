import styled from "styled-components";

import { AiOutlineMessage, AiOutlineProfile } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const StyledNav = styled.div`
  width: 400px;
  height: 70px;
  background-color: #fff;
  position: fixed;
  z-index: 99;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #333333;
  & ul {
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  }
  & ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
  }
  & ul li div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: 700;
  }
  & .text {
    position: absolute;
    color: #222;
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform: translateY(20px);
  }
  & li:nth-child(1).active ~ .indicator {
    transform: translateX(calc(70px * 0));
  }
  & li:nth-child(2).active ~ .indicator {
    transform: translateX(calc(70px * 1 + 40px));
  }
  & li:nth-child(3).active ~ .indicator {
    transform: translateX(calc(70px * 2 + 80px));
  }
`;

const StyledList = styled.li`
  &.active .icon {
    transform: translateY(-50px);
  }
  &.active .icon svg {
    color: #fff;
  }
  &.active .text {
    opacity: 1;
    transform: translateY(10px);
  }
`;

const StyledSvgContainer = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  & svg {
    width: 1.3em;
    height: 1.3em;
    font-size: 1.3em;
    text-align: center;
    color: #222;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

const StyledIndicator = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background: var(--color--blue-100);
  top: -50px;
  border-radius: 50%;
  border: 6px solid var(--color-purple);
  transition: all 0.3s ease-in-out;
`;

function Menu({ active, setActive }) {
  const handleClick = function (_, num) {
    setActive(num);
  };
  return (
    <StyledNav>
      <ul>
        <StyledList
          className={active === 1 ? "active" : ""}
          onClick={(e) => {
            handleClick(e, 1);
          }}
        >
          <div>
            <StyledSvgContainer className="icon">
              <AiOutlineProfile />
            </StyledSvgContainer>
            <span className="text">Profile</span>
          </div>
        </StyledList>
        <StyledList
          className={active === 2 ? "active" : ""}
          onClick={(e) => {
            handleClick(e, 2);
          }}
        >
          <div>
            <StyledSvgContainer className="icon">
              <AiOutlineMessage />
            </StyledSvgContainer>
            <span className="text">Message</span>
          </div>
        </StyledList>
        <StyledList
          className={active === 3 ? "active" : ""}
          onClick={(e) => {
            handleClick(e, 3);
          }}
        >
          <div>
            <StyledSvgContainer className="icon">
              <RxAvatar />
            </StyledSvgContainer>
            <span className="text">Avatar</span>
          </div>
        </StyledList>
        <StyledIndicator className="indicator" />
      </ul>
    </StyledNav>
  );
}

export default Menu;
