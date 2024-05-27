import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const UnauthenticatedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/Overview" replace />;
    }

    return children;
};

export default UnauthenticatedRoute;
