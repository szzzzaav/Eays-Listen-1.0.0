import { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, isAuth, isPending } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isPending) return;
    if (!isAuth || !user) {
      navigate("/login");
    }
  }, [isAuth, navigate, user, isPending]);

  return children;
}

export default ProtectedRoute;
