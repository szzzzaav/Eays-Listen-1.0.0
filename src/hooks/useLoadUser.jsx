import { useEffect } from "react";
import { useTransitionContext } from "../context/TransitionLoaderContext";
import useUser from "../features/authentication/useUser";
import useJump from "./useJump";

function useLoad({ initialState }) {
  const { isLoading, setIsLoading } = useTransitionContext(initialState);
  const { jump } = useJump(setIsLoading, isLoading);
  const { user, isPending: userLoading } = useUser();
  useEffect(() => {
    setIsLoading(userLoading);
  }, [userLoading, setIsLoading]);
  return { jump, user };
}

export default useLoad;
