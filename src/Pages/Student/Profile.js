import Base from "../../components/Global/Base";
import NavigationUser from "../../components/Student/Navigation/NavigationUser";
import ProfileGrid from "../../components/Student/Grids/ProfileGrid";
import UserProfile from "../../components/Student/Profile/UserProfile";
import UserInfo from "../../components/Student/Profile/UserInfo";
import UserStats from "../../components/Student/Profile/UserStats";
import UserRank from "../../components/Student/Profile/UserRank";
import UserPass from "../../components/Student/Profile/UserPass";

function Profile(){
    return(
        <Base>
            <ProfileGrid>
                <NavigationUser/>
                {/*<UserProfile/>*/}
                {/*<UserInfo/>*/}
                {/*/!*<UserStats/>*!/*/}
                {/*/!*<UserRank/>*!/*/}
                {/*<UserPass/>*/}
            </ProfileGrid>
        </Base>
    );
}

export default Profile;