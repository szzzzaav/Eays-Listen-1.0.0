import { styled } from "styled-components";
import { TbMessageCircleCancel } from "react-icons/tb";
import SpinnerMini from "./SpinnerMini";
import StyledButton from "../features/music/MusicButton";
import { useState } from "react";
import useUser from "../features/authentication/useUser";
import useSendComments from "../features/music/useSendComment";
import toast from "react-hot-toast";

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 30%;
  & svg {
    display: none;
  }
  @media (min-width: 1300px) {
    width: 1200px;
    height: 200px;
  }
  @media (min-width: 700px) {
    & svg {
      display: block;
    }
  }

  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease-in-out;
  padding: 0 50px;
  gap: 12px;
`;

const StyledCommentCounts = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: var(--color--blue-80);
    gap: 5px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  line-height: 1.5rem;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  text-indent: 1em;
  font-size: 19px;
  font-weight: 500;
  background: linear-gradient(
      to right,
      var(--color--blue-100),
      var(--color--blue-60)
    )
    no-repeat left bottom;
  background-size: 0px 2px;
  transition: all 0.3s ease-in-out;
  &:focus {
    background-size: 100% 2px;
  }
`;

const StyledControler = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 30px;
`;

function CreateComment({ mid, len, isPending: isPendingComments }) {
  const [comment, setComment] = useState("");
  const { user } = useUser();

  const uid = user?.id;
  const { mutate, isPending } = useSendComments();
  return (
    <StyledContainer>
      <StyledCommentCounts>
        <span>
          {isPendingComments ? (
            <SpinnerMini />
          ) : (
            new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(len)
          )}
          <span>comments</span>
        </span>
      </StyledCommentCounts>
      <StyledInput
        value={comment}
        placeholder="write your comment..."
        onChange={(e) => setComment(e.target.value)}
      />
      <StyledControler>
        <StyledButton $w={"100px"} onClick={() => setComment("")}>
          <TbMessageCircleCancel />
          <span>Cancel</span>
        </StyledButton>
        <StyledButton
          $w={"100px"}
          $bg={"#fff"}
          $spancl={"#222"}
          $hvc={"#ebebeb"}
          onClick={(e) => {
            if (!comment) toast.error("comment is empty!");
            mutate({ content: comment, uid, mid });
            setComment("");
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isPending ? <SpinnerMini $bg={"#222"} /> : "Send"}
          </span>
        </StyledButton>
      </StyledControler>
    </StyledContainer>
  );
}

export default CreateComment;
