import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useJump(setIsLoading, isLoading) {
  const navigate = useNavigate();
  useEffect(
    function () {
      const timer = setInterval(() => {
        if (document.readyState === "complete") {
          setIsLoading(false);
          clearInterval(timer);
        }
      }, 800);
      return () => clearInterval(timer);
    },
    [setIsLoading, isLoading]
  );
  const jump = (e, target) => {
    e?.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate(target);
    }, 500);
  };
  return { jump };
}

export default useJump;
