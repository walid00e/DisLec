import Base from "../components/Base";
import NavigationUser from "../components/Patient/Overview/NavigationUser";
import ProfileGrid from "../components/Patient/Grids/ProfileGrid";
import UserProfile from "../components/Patient/Profile/UserProfile";
import UserInfo from "../components/Patient/Profile/UserInfo";
import UserStats from "../components/Patient/Profile/UserStats";
import UserRank from "../components/Patient/Profile/UserRank";
import UserPass from "../components/Patient/Profile/UserPass";

function Profile(){
    return(
        <Base>
            <ProfileGrid>
                <NavigationUser/>
                <UserProfile/>
                <UserInfo/>
                <UserStats/>
                <UserRank/>
                <UserPass/>
            </ProfileGrid>
        </Base>
    );
}

export default Profile;