import './NavigationUserPro.css';
import Logo from "../../Global/Navigation/Logo";
import GroupBtn from "../../Global/Navigation/GroupBtn";
import SectionBtn from "../../Global/Navigation/SectionBtn";
import GroupBtnExtras from "../../Global/Navigation/GroupBtnExtras";
import overViewIcon from "../../../Assets/icons/iconmonstr-dashboard-lined.svg"
import overViewIconPro from "../../../Assets/icons/iconmonstr-dashboard-lined-blue.svg"
import todoIcon from "../../../Assets/icons/iconmonstr-layer-multiple-alt-lined.svg"
import todoIconPro from "../../../Assets/icons/iconmonstr-layer-multiple-alt-lined-blue.svg"
import reviewIcon from "../../../Assets/icons/iconmonstr-check-mark-lined.svg"
import reviewIconPro from "../../../Assets/icons/iconmonstr-check-mark-square-lined-blue.svg"
import profileIcon from "../../../Assets/icons/iconmonstr-user-6.svg"
import profileIconPro from "../../../Assets/icons/iconmonstr-user-6-blue.svg"
import settingIcon from "../../../Assets/icons/iconmonstr-gear-thin.svg"
import settingIconPro from "../../../Assets/icons/iconmonstr-gear-thin-blue.svg"
import themeIcon from "../../../Assets/icons/iconmonstr-contrast-filled.svg"
import themeIconPro from "../../../Assets/icons/iconmonstr-contrast-filled-blue.svg"
import logoutIcon from "../../../Assets/icons/iconmonstr-log-out-18.svg"
import logoutIconPro from "../../../Assets/icons/iconmonstr-log-out-18-blue.svg"
import {Link, useLocation} from "react-router-dom";

function NavigationUserPro(props) {
    const location = useLocation();
    const isActivated = (path) => location.pathname === path;
    return (
        <div className="navigation-user-pro-base rounderCorn dropShadow">
            <Logo/>
            <GroupBtn>
                <Link to={"/pro-overview"}>
                    <SectionBtn pro={true} activated={isActivated('/pro-overview')} title='OVERVIEW' icon={isActivated('/pro-overview') ? overViewIconPro : overViewIcon}/>
                </Link>
                <Link to={"/Todo"}>
                    <SectionBtn pro={true} activated={isActivated('/Todo')} title='TODO' icon={isActivated('/Todo') ? todoIconPro : todoIcon}/>
                </Link>
                <Link to={"/Review"}>
                    <SectionBtn pro={true} activated={isActivated('/Review')} title='REVIEW' icon={isActivated('/Review') ? reviewIconPro : reviewIcon}/>
                </Link>
                <Link to={"/Profile"}>
                    <SectionBtn pro={true} activated={isActivated('/Profile')} title='PROFILE' icon={isActivated('/Profile') ? profileIconPro : profileIcon}/>
                </Link>
                <Link to={"/Setting"}>
                    <SectionBtn pro={true} activated={isActivated('/Setting')} title='SETTING' icon={isActivated('/Setting') ? settingIconPro : settingIcon}/>
                </Link>
            </GroupBtn>
            <GroupBtnExtras>
                <SectionBtn pro={true} activated={false} title='DARK / LIGHT' icon={themeIcon}/>
                <Link to={"/Logout"}>
                    <SectionBtn pro={true} activated={false} title='LOGOUT' icon={logoutIcon}/>
                </Link>
            </GroupBtnExtras>

        </div>
    );
}

export default NavigationUserPro;