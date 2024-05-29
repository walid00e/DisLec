import './NavigationUser.css';
import Logo from "../../Global/Navigation/Logo";
import GroupBtn from "../../Global/Navigation/GroupBtn";
import SectionBtn from "../../Global/Navigation/SectionBtn";
import GroupBtnExtras from "../../Global/Navigation/GroupBtnExtras";
import overViewIcon from "../../../Assets/icons/iconmonstr-dashboard-lined.svg"
import overViewIconStud from "../../../Assets/icons/iconmonstr-dashboard-lined-pink.svg"
import todoIcon from "../../../Assets/icons/iconmonstr-layer-multiple-alt-lined.svg"
import todoIconStud from "../../../Assets/icons/iconmonstr-layer-multiple-alt-lined-pink.svg"
import reviewIcon from "../../../Assets/icons/iconmonstr-check-mark-lined.svg"
import reviewIconStud from "../../../Assets/icons/iconmonstr-check-mark-square-lined-pink.svg"
import profileIcon from "../../../Assets/icons/iconmonstr-user-6.svg"
import profileIconStud from "../../../Assets/icons/iconmonstr-user-6-pink.svg"
import settingIcon from "../../../Assets/icons/iconmonstr-gear-thin.svg"
import settingIconStud from "../../../Assets/icons/iconmonstr-gear-thin-pink.svg"
import themeIcon from "../../../Assets/icons/iconmonstr-contrast-filled.svg"
import themeIconStud from "../../../Assets/icons/iconmonstr-contrast-filled-pink.svg"
import logoutIcon from "../../../Assets/icons/iconmonstr-log-out-18.svg"
import logoutIconStud from "../../../Assets/icons/iconmonstr-log-out-18-pink.svg"
import {Link, useLocation} from "react-router-dom";
import todoIconPro from "../../../Assets/icons/iconmonstr-layer-multiple-alt-lined-blue.svg";
import reviewIconPro from "../../../Assets/icons/iconmonstr-check-mark-square-lined-blue.svg";
import profileIconPro from "../../../Assets/icons/iconmonstr-user-6-blue.svg";
import settingIconPro from "../../../Assets/icons/iconmonstr-gear-thin-blue.svg";

function NavigationUser(props) {
    const location = useLocation();
    const isActivated = (path) => location.pathname === path;
    return (
        <div className="navigation-user-base rounderCorn dropShadow">
            <Logo/>
            <GroupBtn>
                <Link to={"/Overview"}>
                    <SectionBtn activated={isActivated('/Overview')} title='OVERVIEW' icon={isActivated('/Overview') ? overViewIconStud : overViewIcon}/>
                </Link>
                <Link to={"/Practice"}>
                    <SectionBtn activated={isActivated('/Practice')} title='PRACTICE' icon={isActivated('/Practice') ? todoIconStud : todoIcon}/>
                </Link>
                <Link to={"/Collab"}>
                    <SectionBtn activated={isActivated('/Collab')} title='COLLAB' icon={isActivated('/Collab') ? reviewIconStud : reviewIcon}/>
                </Link>
                <Link to={"/Profile"}>
                    <SectionBtn activated={isActivated('/Profile')} title='PROFILE' icon={isActivated('/Profile') ? profileIconStud : profileIcon}/>
                </Link>
                <Link to={"/Setting"}>
                    <SectionBtn activated={isActivated('/Setting')} title='SETTING' icon={isActivated('/Setting') ? settingIconStud : settingIcon}/>
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