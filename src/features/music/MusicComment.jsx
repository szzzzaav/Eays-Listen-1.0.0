import { useLocation } from "react-router-dom";
import CreateComment from "../../ui/CreateComment";
import useComments from "./useComments";
import Comments from "./Comments";

function MusicComment() {
  const location = useLocation();
  const mid = location.pathname.split("/").at(-1);
  const { data: comments, isPending } = useComments(mid);
  const len = comments?.length;
  return (
    <>
      <CreateComment mid={mid} len={len} isPending={isPending} />;
      <Comments comments={comments} isPending={isPending} />
    </>
  );
}

export default MusicComment;
