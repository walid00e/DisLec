import Base from "../../components/Global/Base";
import Dashboard from "../../components/Student/Grids/Dashboard";
import NavigationUser from "../../components/Student/Navigation/NavigationUser";
import RecordingList from "../../components/Student/Collaboration/RecordingList";
import SpecialistInfo from "../../components/Student/Collaboration/SpecialistInfo";
import CollabStatsContainer from "../../components/Student/Collaboration/CollabStatsContainer";

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