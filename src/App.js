import './App.css';
import Home from './Pages/Overview'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Overview from "./Pages/Overview";
import Collab from "./Pages/Collab";
import Profile from "./Pages/Profile";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="Overview" element={<Overview />} />
              {/*<Route index element={<Home/>} />*/}
              {/*<Route path="Practice" element={<Practice />} />*/}
              <Route path="Profile" element={<Profile />} />
              <Route path="Collab" element={<Collab />} />
              {/*<Route path="Enreg" element={<Enreg />} />*/}
              {/*<Route path="settings" element={<Settings />} />*/}
              {/*<Route path="*" element={<NotFound />} />*/}
          </Routes>
      </BrowserRouter>

  );
}

export default App;
