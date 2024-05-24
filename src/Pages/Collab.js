import Base from "../components/Base";
import Dashboard from "../components/Patient/Grids/Dashboard";
import NavigationUser from "../components/Patient/Overview/NavigationUser";
import RecordingList from "../components/Patient/Collaboration/RecordingList";
import SpecialistInfo from "../components/Patient/Collaboration/SpecialistInfo";
import CollabStatsContainer from "../components/Patient/Collaboration/CollabStatsContainer";

function Collab(){
    return(
        <Base>
          <Dashboard>
              <NavigationUser/>
              <RecordingList/>
              <SpecialistInfo/>
              <CollabStatsContainer/>
          </Dashboard>
        </Base>
    );
}

export default Collab;