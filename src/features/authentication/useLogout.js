import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import useJump from "../../hooks/useJump";
import { logout } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useLogout() {
  const { isLoading, setIsLoading } = useTransitionContext();
  const { jump } = useJump(setIsLoading, isLoading);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("User logout");
      queryClient.removeQueries();
      jump(null, "/login");
    },
  });
  return { mutate, isPending };
}

export default useLogout;
