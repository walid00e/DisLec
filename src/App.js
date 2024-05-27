import './App.css';
import Home from './Pages/Overview'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Overview from "./Pages/Overview";
import Collab from "./Pages/Collab";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Practice from "./Pages/Practice";
import {AuthProvider} from "./components/authentication/AuthContext";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Logout from "./Pages/Logout";
import UnauthenticatedRoute from "./components/authentication/UnauthenticatedRoute";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="Overview" element={
                        <ProtectedRoute>
                            <Overview/>
                        </ProtectedRoute>
                    }/>
                    {/*<Route index element={<Home/>} />*/}
                    <Route path="Practice" element={<Practice />} />
                    <Route path="Profile" element={<Profile/>}/>
                    <Route path="Collab" element={<Collab/>}/>
                    {/*<Route path="Enreg" element={<Enreg />} />*/}
                    {/*<Route path="settings" element={<Settings />} />*/}
                    {/*<Route path="*" element={<NotFound />} />*/}
                    <Route path="Login" element={
                        <UnauthenticatedRoute>
                            <Login/>
                        </UnauthenticatedRoute>
                    }/>
                    <Route path="/logout" element={
                        <ProtectedRoute>
                            <Logout/>
                        </ProtectedRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>


    );
}

export default App;
