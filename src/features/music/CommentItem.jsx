import { NavLink } from "react-router-dom";

import { styled } from "styled-components";
import FlexContainer from "../../ui/FlexContainer";
import { useState } from "react";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0;
  width: 90%;
  height: auto;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledAvatar = styled.div`
  position: relative;
  top: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 60px;
    height: 100%;
    border-radius: 50%;
  }
`;

const StyledAuth = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: var(--color--blue-80);
  word-break: break-word;
`;

const StyledComment = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: var(--color--blue-100);
  word-wrap: break-word;
  & > span {
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    color: var(--color-purple);
  }
`;

const StyledTime = styled.div`
  & span {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.3);
  }
  height: 100%;
  display: none;
  @media (min-width: 700px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

function CommentItem({ comment }) {
  const isLong = comment.content.length > 30;

  const { users } = comment;
  const [commentSlice, setCommentSlice] = useState(
    String(comment.content).slice(0, 30) + (isLong ? "..." : "")
  );
  const [expend, setExpend] = useState(false);
  return (
    <StyledContainer>
      <FlexContainer $ai={"flex-start"} $hi={"100%"}>
        <NavLink to={`/view/user/${users.uid}`}>
          <StyledAvatar>
            <img src={users.avatar || "/logo.png"} alt="" />
          </StyledAvatar>
        </NavLink>
      </FlexContainer>
      <FlexContainer
        $ai={"flex-start"}
        $fd={"column"}
        $wd={"100%"}
        $jc={"space-around"}
        $gap={"0"}
      >
        <StyledAuth>{users.fullName}</StyledAuth>
        <StyledComment>
          {commentSlice}
          {isLong && (
            <span
              onClick={() => {
                if (expend) {
                  setExpend(false);
                  setCommentSlice(String(comment.content).slice(0, 30) + "...");
                } else {
                  setExpend(true);
                  setCommentSlice(String(comment.content));
                }
              }}
            >
              {!expend && "   Expend"}
              {expend && "   Close"}
            </span>
          )}
        </StyledComment>
      </FlexContainer>
      <FlexContainer $hi={"100%"} $ai={"flex-start"}>
        <StyledTime>
          <span>
            {new Date(comment.created_at).toLocaleString("en-GB", {
              timeZone: "UTC",
            })}
          </span>
        </StyledTime>
      </FlexContainer>
    </StyledContainer>
  );
}

export default CommentItem;
