import Base from "../../components/Global/Base";
import NavigationUserPro from "../../components/Professional/Navigation/NavigationUserPro";
import Dashboard from "../../components/Student/Grids/Dashboard";
import DashboardTop from "../../components/Professional/Overview/DashboardTop";

function Overview() {

    return (
        <Base>
            <Dashboard>
                <NavigationUserPro/>
                <DashboardTop imgSrc=""/>

            </Dashboard>
        </Base>
    );
}

export default Overview;