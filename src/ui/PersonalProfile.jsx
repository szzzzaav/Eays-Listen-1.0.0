import styled from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 150px;
  width: 300px;
  height: 350px;
  background-color: var(--color--blue-80);
  border-radius: 20px;
  & span {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #fff;
  }
`;

const StyledAvatar = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 6px solid var(--color-purple);
  box-shadow: 2px 2px 5px #333333;
  top: -20%;
  left: calc(50% - 100px);
  overflow: hidden;
  & img {
    width: 200px;
    height: 100%;
  }
`;

const StyledProfile = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  gap: 60px;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  gap: 20px;
  & span {
    font-size: 55px;
    font-weight: 700;
    color: #fff;
  }
`;

const StyledDataContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  & > div {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: var(--color--blue-100);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 0;
    align-items: center;
  }
  & span {
    font-size: 20px;
    color: #fff;
  }
`;

const StyledData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px !important;
  height: 100px !important;
  border-radius: 50%;
  border: 6px solid var(--color-purple);
  & span {
    font-size: 20px;
    color: #fff;
  }
`;

const StyledDynamic = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export {
  StyledMessage,
  StyledProfile,
  StyledAvatar,
  StyledTitle,
  StyledDataContainer,
  StyledData,
  StyledDynamic,
};
