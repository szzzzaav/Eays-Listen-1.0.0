import FlexContainer from "../../ui/FlexContainer";
import {
  StyledAvatar,
  StyledData,
  StyledDataContainer,
  StyledDynamic,
  StyledMessage,
  StyledProfile,
  StyledTitle,
} from "../../ui/PersonalProfile";
import useUser from "../authentication/useUser";

function Profile({ model = "auth", data = null }) {
  const { user: currentUser } = useUser();
  const user = model === "auth" ? currentUser : data;
  return (
    <FlexContainer $gap={"50px"} $sk={1} $ai={"flex-start"}>
      <StyledMessage>
        <StyledAvatar>
          <img
            src={user?.user_metadata?.avatar || user?.avatar || "/logo.png"}
            alt=""
          />
        </StyledAvatar>
        <span>{user?.user_metadata?.fullName || user?.fullName || ""}</span>
      </StyledMessage>
      <StyledProfile>
        <StyledTitle>
          <span>{model === "auth" ? "HELLO" : "This is"}</span>
          <span>{user?.user_metadata?.fullName || user?.fullName || ""}</span>
        </StyledTitle>
        <StyledDataContainer>
          <div>
            <StyledData>
              <span>1</span>
            </StyledData>
            <span>FRIENDS</span>
          </div>
          <div>
            <StyledData>
              <span>2</span>
            </StyledData>
            <span>PUBLISH</span>
          </div>
        </StyledDataContainer>
        <StyledDynamic></StyledDynamic>
      </StyledProfile>
    </FlexContainer>
  );
}

export default Profile;
