// project imports
import MinimalLayout from 'layout/MinimalLayout';

// login option routing
import AuthLogin from '../views/pages/authentication/LoginPage';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <AuthLogin />
        }
    ]
};

export default AuthenticationRoutes;
