// material-ui
import { styled } from '@mui/material/styles';

// assets
import fondo from 'assets/images/auth/background.png';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //
// eslint-disable-next-line
const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundImage: `url(${fondo})`,
    minHeight: '100vh'
}));

export default AuthWrapper1;
