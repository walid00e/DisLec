import './App.css';
import DashboardTop from "./components/Patient/DashboardTop";
import Base from "./components/Base";
import Dashboard from "./components/Patient/Dashboard";
import NavigationUser from "./components/Patient/NavigationUser";
import RankStats from "./components/Patient/RankStats";
import ExercisesStats from "./components/Patient/ExercisesStats";
import HoursStats from "./components/Patient/HoursStats";
import ActivityStats from "./components/Patient/ActivityStats";
import FocusStats from "./components/Patient/FocusStats";
import LeaderBoard from "./components/Patient/LeaderBoard";
import RecordingList from "./components/Patient/RecordingList";
import SpecialistInfo from "./components/Patient/SpecialistInfo";
import CollabStatsContainer from "./components/Patient/CollabStatsContainer";

function App() {
  return (
      <Base>
        <Dashboard>
            <NavigationUser selcected='2'/>
            <RecordingList/>
            <SpecialistInfo/>
            <CollabStatsContainer/>
            {/*<DashboardTop/>*/}
            {/*<LeaderBoard/>*/}
            {/*<RankStats name="" desc="" img=""/>*/}
            {/*<ExercisesStats/>*/}
            {/*<HoursStats/>*/}
            {/*<ActivityStats/>*/}
            {/*<FocusStats/>*/}
        </Dashboard>
      </Base>
  );
}

export default App;
