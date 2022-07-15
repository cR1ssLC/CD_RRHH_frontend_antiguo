// material-ui
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/logocd.png';

const Logo = () => {
    // eslint-disable-next-line
    const theme = useTheme();

    return <img src={logo} alt="LOGO" width="110" />;
};

export default Logo;
