import Base from "../../components/Global/Base";
import NavigationUser from "../../components/Student/Navigation/NavigationUser";
import ProfileGrid from "../../components/Student/Grids/ProfileGrid";

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