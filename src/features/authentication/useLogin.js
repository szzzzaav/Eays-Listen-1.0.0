import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import useJump from "../../hooks/useJump";

function useLogin() {
  const queryClient = useQueryClient();
  const { setIsLoading, isLoading } = useTransitionContext();
  const { jump } = useJump(setIsLoading, isLoading);
  const { mutate: loginFn, isPending: isLogining } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      jump(null, "/easyListen");
    },
    onError: () => toast.error("email or password wrong"),
  });
  return { loginFn, isLogining };
}

export default useLogin;
