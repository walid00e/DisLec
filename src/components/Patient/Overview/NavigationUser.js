import './NavigationUser.css';
import Logo from "../Navigation/Logo";
import GroupBtn from "../Navigation/GroupBtn";
import SectionBtn from "../Navigation/SectionBtn";
import GroupBtnExtras from "../Navigation/GroupBtnExtras";
import overViewIcon from "../../../Assets/icons/iconmonstr-dashboard-lined.svg"
import practiceIcon from "../../../Assets/icons/iconmonstr-layer-multiple-alt-lined.svg"
import collabIcon from "../../../Assets/icons/iconmonstr-school-28.svg"
import profileIcon from "../../../Assets/icons/iconmonstr-user-6.svg"
import settingIcon from "../../../Assets/icons/iconmonstr-gear-thin.svg"
import themeIcon from "../../../Assets/icons/iconmonstr-contrast-filled.svg"
import logoutIcon from "../../../Assets/icons/iconmonstr-log-out-18.svg"
import {Link, useLocation} from "react-router-dom";

function NavigationUser(props) {
    const location = useLocation();
    const isActivated = (path) => location.pathname === path;
    return (
        <div className="navigation-user-base rounderCorn dropShadow">
            <Logo/>
            <GroupBtn>
                <Link to={"/Overview"}>
                    <SectionBtn activated={isActivated('/Overview')} title='OVERVIEW' icon={overViewIcon}/>
                </Link>
                <Link to={"/Practice"}>
                    <SectionBtn activated={isActivated('/Practice')} title='PRACTICE' icon={practiceIcon}/>
                </Link>
                <Link to={"/Collab"}>
                    <SectionBtn activated={isActivated('/Collab')} title='COLLAB' icon={collabIcon}/>
                </Link>
                <Link to={"/Profile"}>
                    <SectionBtn activated={isActivated('/Profile')} title='PROFILE' icon={profileIcon}/>
                </Link>
                <Link to={"/Setting"}>
                    <SectionBtn activated={isActivated('/Setting')} title='SETTING' icon={settingIcon}/>
                </Link>
            </GroupBtn>
            <GroupBtnExtras>
                <SectionBtn activated={false} title='DARK / LIGHT' icon={themeIcon}/>
                <Link to={"/Logout"}>
                    <SectionBtn activated={false} title='LOGOUT' icon={logoutIcon}/>
                </Link>
            </GroupBtnExtras>

        </div>
    );
}

export default NavigationUser;