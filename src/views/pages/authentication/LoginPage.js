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
// validacion formik
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    username: yup.string('INGRESE SU USUARIO').required('USUARIO ES REQUERIDO'),
    password: yup.string('INGRESE SU CONTRASEÑA').min(6, 'CONTRASEÑA TIENE UN MINO DE 6 CARACTERES').required('CONTRASEÑA ES REQUERIDA')
});
const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            // api call
            // eslint-disable-next-line
            alert(JSON.stringify(values, null, 2));
            console.log('logged in');
        }
    });
    // estado para mostrar u ocultar la contraseña
    const [values, setValues] = useState({
        showPass: false
    });
    // muestra u oculta la contraseña
    const handlePassVisibilty = () => {
        setValues({
            showPass: !values.showPass
        });
    };
    const [open, setOpen] = useState(false); // estado para mostrar alerta
    // muestra la alaerta
    // eslint-disable-next-line
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    <AlertTitle>Login Error</AlertTitle>
                    No puede iniciar sesión con las credenciales proporcionadas.
                </Alert>
            </Snackbar>

            <Container maxWidth="sm">
                <Grid container spacing={2} direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
                    <Paper elelvation={2} sx={{ padding: 3, bgcolor: 'grey.700' }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item sx={{ width: '100%', maxWidth: 500 }}>
                                    <Typography variant="h3" color="#FFFFFF" component="div" gutterBottom align="center">
                                        SISTEMA DE RRHH
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="username"
                                        name="username"
                                        type="text"
                                        fullWidth
                                        label="INGRESE SU USUARIO"
                                        placeholder="INGRESE SU USUARIO"
                                        color="secondary"
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        error={formik.touched.username && Boolean(formik.errors.username)}
                                        helperText={formik.touched.username && formik.errors.username}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="password"
                                        name="password"
                                        type={values.showPass ? 'text' : 'password'}
                                        fullWidth
                                        label="INGRESE SU CONTRASEÑA"
                                        placeholder="INGRESE SU CONTRASEÑA"
                                        color="secondary"
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
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
