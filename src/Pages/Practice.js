import Base from "../components/Base";
import NavigationUser from "../components/Patient/Overview/NavigationUser";
import ProfileGrid from "../components/Patient/Grids/ProfileGrid";

function Practice(){
    return(
        <Base>
            <ProfileGrid>
                <NavigationUser/>
            </ProfileGrid>
        </Base>
    );
}

export default Practice;