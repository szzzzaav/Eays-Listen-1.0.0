import { useMutation } from "@tanstack/react-query";
import { sendComments } from "../../services/apiMusic";
import toast from "react-hot-toast";

function useSendComments() {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ content, mid, uid }) => sendComments({ content, mid, uid }),
    onError: (err) => toast.error(err.message),
    onSuccess: () => toast.success("recommend success"),
  });
  return { mutate, isPending };
}

export default useSendComments;
