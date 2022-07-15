// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment,
    Typography,
    Alert,
    Snackbar,
    AlertTitle
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import StartIcon from '@mui/icons-material/Start';
import { useState } from 'react';
import fondo from 'assets/images/auth/background.png';

const Login = () => {
    // eslint-disable-next-line
    const theme = useTheme();
    // variables para el login
    // const {http,setToken} = AuthUser();
    // eslint-disable-next-line
    const [username, setUserName] = useState();
    // eslint-disable-next-line
    const [password, setPassword] = useState();
    // estado para mostrar u ocultar la contraseña
    const [values, setValues] = useState({
        showPass: false
    });
    const [open, setOpen] = useState(false); // estado para mostrar alerta
    const vertical = 'top'; // posicion vertical del alert
    const horizontal = 'right'; // posicion horizontal del alert
    // envio de credenciales a la api
    /*
    const submitForm = () =>{
    	http.post('/login',{username:username,password:password}).then((res)=>{
    		setToken(res.data.user,res.data.access_token);
    	}).catch((err) => console.error(err));
    };
    */
    // muestra u oculta la contraseña
    const handlePassVisibilty = () => {
        setValues({
            showPass: !values.showPass
        });
    };
    // muestra la alaerta
    const handleClick = () => {
        setOpen(true);
    };
    // cerrar alerta con boton x
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    <AlertTitle>Login Error</AlertTitle>
                    No puede iniciar sesión con las credenciales proporcionadas.
                </Alert>
            </Snackbar>

            <Container maxWidth="sm">
                <Grid container spacing={2} direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
                    <Paper elelvation={2} sx={{ padding: 3, bgcolor: 'grey.700' }}>
                        <form /* onSubmit={submitForm} */>
                            <Grid container direction="column" spacing={2}>
                                <Grid item sx={{ width: '100%', maxWidth: 500 }}>
                                    <Typography variant="h3" color="#FFFFFF" component="div" gutterBottom align="center">
                                        SISTEMA DE RRHH
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        type="text"
                                        fullWidth
                                        label="INGRESE SU USUARIO"
                                        placeholder="INGRESE SU USUARIO"
                                        color="secondary"
                                        variant="outlined"
                                        required
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        type={values.showPass ? 'text' : 'password'}
                                        fullWidth
                                        label="INGRESE SU CONTRASEÑA"
                                        placeholder="INGRESE SU CONTRASEÑA"
                                        color="secondary"
                                        variant="outlined"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handlePassVisibilty} aria-label="toggle password" edge="end">
                                                        {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="success"
                                        sx={{ color: 'grey.50', bgcolor: 'success.700' }}
                                        onClick={/* submitForm */ handleClick}
                                    >
                                        INGRESAR <StartIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;
