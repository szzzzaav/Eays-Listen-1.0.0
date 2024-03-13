import useUser from "../viewUsers/useUser";
import Profile from "../features/personal/Profile";
import { useLocation } from "react-router-dom";
import { StyledLayout } from "../ui/AuFormLayout";

function ViewUser() {
  const location = useLocation();
  const id = location.pathname.split("/").at(-1);
  const { data } = useUser(id);
  return (
    <StyledLayout $oh={1}>
      <Profile model="view" data={data} />
    </StyledLayout>
  );
}

export default ViewUser;
