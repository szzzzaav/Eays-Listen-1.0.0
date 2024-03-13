import { useMutation } from "@tanstack/react-query";
import { CreateMusic } from "../../services/apiMusic";
import toast from "react-hot-toast";

function useCreate(reset) {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      CreateMusic(data);
    },
    onSuccess: () => {
      reset();
      toast.success("success");
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}

export default useCreate;
