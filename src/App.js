import './App.css';
import Home from './Pages/Student/Overview'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Overview from "./Pages/Student/Overview";
import Collab from "./Pages/Student/Collab";
import Profile from "./Pages/Student/Profile";
import Login from "./Pages/Login";
import Practice from "./Pages/Student/Practice";
import OverviewPro from "./Pages/Professional/Overview";
import {AuthProvider} from "./components/authentication/AuthContext";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Logout from "./Pages/Logout";
import UnauthenticatedRoute from "./components/authentication/UnauthenticatedRoute";
import Todo from "./Pages/Professional/Todo";
import Review from "./Pages/Professional/Review";

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
                    // professional routes
                    <Route path="/pro-overview" element={<OverviewPro/>}/>
                    <Route path="/Todo" element={<Todo/>}/>
                    <Route path="/Review" element={<Review/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>


    );
}

export default App;
