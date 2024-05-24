import Base from "../components/Base";
import NavigationUser from "../components/Patient/Overview/NavigationUser";
import Dashboard from "../components/Patient/Grids/Dashboard";
import DashboardTop from "../components/Patient/Overview/DashboardTop";
import LeaderBoard from "../components/Patient/Overview/LeaderBoard";
import RankStats from "../components/Patient/Overview/RankStats";
import ExercisesStats from "../components/Patient/Overview/ExercisesStats";
import HoursStats from "../components/Patient/Overview/HoursStats";
import ActivityStats from "../components/Patient/Overview/ActivityStats";
import FocusStats from "../components/Patient/Overview/FocusStats";


function Overview() {
    return (
        <Base>
            <Dashboard>
                <NavigationUser/>
                <DashboardTop/>
                <LeaderBoard/>
                <RankStats name="" desc="" img=""/>
                <ExercisesStats/>
                <HoursStats/>
                <ActivityStats/>
                <FocusStats/>
            </Dashboard>
        </Base>
    );
}

export default Overview;