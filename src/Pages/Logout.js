import { useEffect } from 'react';
import { useAuth } from '../components/authentication/AuthContext';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, [logout]);

    return <Navigate to="/Login" replace />;
};

export default Logout;
