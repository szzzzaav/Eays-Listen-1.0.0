import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useUpdateUser(reset) {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => updateUser(data),
    mutationKey: ["user"],
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("user upLoad");
      navigate("/");
    },
  });
  return { mutate, isPending };
}

export default useUpdateUser;
