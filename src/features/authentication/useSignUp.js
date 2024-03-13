import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup } from "../../services/apiAuth";
import { useTransitionContext } from "../../context/TransitionLoaderContext";
import useJump from "../../hooks/useJump";

function useSignUp() {
  const { isLoading, setIsLoading } = useTransitionContext();
  const { jump } = useJump(setIsLoading, isLoading);
  const queryClient = useQueryClient();
  const { mutate: signUpFn, isPending: isSignUping } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signup({ email, password, fullName }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      jump(null, "/");
    },
    onError: (err) => toast.error(err.message),
  });
  return { signUpFn, isSignUping };
}

export default useSignUp;
