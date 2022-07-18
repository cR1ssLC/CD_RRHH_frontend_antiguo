// material-ui
import {
    Box,
    Button,
    ButtonGroup,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Chip,
    Typography,
    Grid,
    Stack,
    Paper,
    Autocomplete
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { DataGrid, GridToolbarQuickFilter, GridLinkOperator, esES } from '@mui/x-data-grid';
// dialog form
import * as React from 'react';
import { styled } from '@mui/material/styles';
// ==============================|| PAGE ||============================== //
const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .ant-empty-img-1': {
        fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626'
    },
    '& .ant-empty-img-2': {
        fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959'
    },
    '& .ant-empty-img-3': {
        fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343'
    },
    '& .ant-empty-img-4': {
        fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c'
    },
    '& .ant-empty-img-5': {
        fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
        fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff'
    }
}));
function CustomNoRowsOverlay() {
    return (
        <StyledGridOverlay>
            <Box sx={{ mt: 1 }}>No hay registros que mostrar</Box>
        </StyledGridOverlay>
    );
}
function QuickSearchToolbar() {
    return (
        <Box
            sx={{
                p: 0.5,
                pb: 0
            }}
        >
            <GridToolbarQuickFilter
                quickFilterParser={(searchInput) =>
                    searchInput
                        .split(',')
                        .map((value) => value.trim())
                        .filter((value) => value !== '')
                }
            />
        </Box>
    );
}
const columns = [
    {
        field: 'id',
        headerName: 'NRO. CI',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 90,
        type: 'number'
    },
    {
        field: 'apepaterno',
        headerName: 'AP. PATERNO',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'apematerno',
        headerName: 'AP. MATERNO',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'nombres',
        headerName: 'NOMBRES',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'motivo',
        headerName: 'MOTIVO',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'descripcion',
        headerName: 'DESCRIPCION',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'fechainicio',
        headerName: 'FECHA INICIO',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 110,
        type: 'date',
        editable: true
    },
    {
        field: 'fechafin',
        headerName: 'FECHA FIN',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 100,
        type: 'date'
    },
    {
        field: 'fregistro',
        headerName: 'F. REGISTRO',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        headerAlign: 'center',
        width: 100,
        type: 'date'
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        headerClassName: 'cabecera',
        cellClassName: 'contenido',
        width: 160,
        valueGetter: (params) => `${params.row.nombres || ''} ${params.row.apepaterno || ''}`
    }
];
const rows = [
    { id: 1, apepaterno: 'Snow', nombres: 'Jon', motivo: 'motivo', descripcion: 'descripcion', fechainicio: '7/29/2022' },
    { id: 2, apepaterno: 'Lannister', apematerno: 'Lannister', nombres: 'Cersei', motivo: 'motivo', descripcion: 'descripcion' },
    { id: 3, apepaterno: 'Lannister', apematerno: 'Lannister', nombres: 'Jaime', motivo: 'motivo', descripcion: 'descripcion' },
    { id: 4, apepaterno: 'Stark', apematerno: 'Stark', nombres: 'Arya', motivo: 'motivo', descripcion: 'descripcion' },
    { id: 5, apepaterno: 'Targaryen', apematerno: 'Targaryen', nombres: 'Daenerys', motivo: 'motivo', descripcion: 'descripcion' },
    { id: 6, apepaterno: 'Melisandre', apematerno: 'Melisandre', nombres: null, motivo: 'motivo', descripcion: 'descripcion' },
    { id: 7, apepaterno: 'Clifford', apematerno: 'Clifford', nombres: 'Ferrara', motivo: 'motivo', descripcion: 'descripcion' },
    { id: 8, apepaterno: 'Frances', apematerno: 'Frances', nombres: 'Rossini', motivo: 'motivo', descripcion: 'descripcion' },
    { id: 9, apepaterno: 'Roxie', apematerno: 'Roxie', nombres: 'Harvey', motivo: 'motivo', descripcion: 'descripcion' }
];
const motivos = [
    {
        id: 1,
        value: 'OLVIDO LLENAR LA BOLETA EN EL TIEMPO ESTABLECIDO'
    },
    {
        id: 2,
        value: 'OLVIDO ENVIAR LA BOLETA EN EL TIEMPO ESTABLECIDO'
    },
    {
        id: 3,
        value: 'PERSONA CON CAPACIDADES ESPECIALES'
    },
    {
        id: 4,
        value: 'CORRECCION DE BOLETA'
    },
    {
        id: 5,
        value: 'OTROS (DESCRIBIR DETALLADAMENTE)'
    }
];
const AutRegFormulario = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <MainCard title="AUTORIZACIONES DE REGULARIZACIÓN DE FORMULARIOS" height="650">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    '& > *': {
                        m: 1
                    }
                }}
            >
                <ButtonGroup disableElevation variant="contained" aria-label="outlined button group">
                    <Button onClick={handleClickOpen}>
                        <AddIcon /> NUEVO
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle variant="h3" color="primary.800">
                            REGISTRO DE REGULARIZACION DE&nbsp;
                            <Chip label="FORMULARIOS" variant="outlined" color="error" size="small" />
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Typography color="error" display="inline">
                                    (*)&nbsp;
                                </Typography>
                                <Typography color="grey.900" display="inline">
                                    Funcionario
                                </Typography>
                            </DialogContentText>
                            <Autocomplete
                                id="funcionario"
                                disablePortal
                                fullWidth
                                options={rows}
                                getOptionLabel={(option) => `${option.id || ''} - ${option.nombres || ''} ${option.apepaterno || ''}`}
                                renderOption={(props, option) => (
                                    <Box sx={{ color: 'grey.900' }} component="li" {...props}>
                                        {option.id} - {option.nombres} {option.apepaterno}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="---SELECCIONE---"
                                        required
                                        margin="dense"
                                        variant="standard"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password' // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                            <DialogContentText>
                                <Typography color="error" display="inline">
                                    (*)&nbsp;
                                </Typography>
                                <Typography color="grey.900" display="inline">
                                    Motivo
                                </Typography>
                            </DialogContentText>
                            <Autocomplete
                                id="funcionario"
                                disablePortal
                                fullWidth
                                options={motivos}
                                getOptionLabel={(option) => option.value}
                                renderOption={(props, option) => (
                                    <Box sx={{ color: 'grey.900' }} component="li" {...props}>
                                        {option.value}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="---SELECCIONE---"
                                        required
                                        margin="dense"
                                        variant="standard"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password' // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                            <DialogContentText>
                                <Typography color="error" display="inline">
                                    (*)&nbsp;
                                </Typography>
                                <Typography color="grey.900" display="inline">
                                    Descripción&nbsp;
                                </Typography>
                                <Typography sx={{ color: '#FF0000', bgcolor: '#F4DFDB' }} display="inline">
                                    ( Mínimo de 50 caracteres )
                                </Typography>
                            </DialogContentText>
                            <TextField
                                id="descripcion"
                                required
                                margin="dense"
                                multiline
                                rows={4}
                                maxRows={4}
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Paper elevation={0} />
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack direction="column" spacing={1} justifyContent="center" alignItems="flex-start">
                                        <DialogContentText>
                                            <Typography color="error" display="inline">
                                                (*)&nbsp;
                                            </Typography>
                                            <Typography color="grey.900" display="inline">
                                                Fecha Inicio
                                            </Typography>
                                        </DialogContentText>
                                        <TextField
                                            name="fechaini"
                                            label="Fecha Inicio"
                                            InputLabelProps={{ shrink: true, required: true }}
                                            type="date"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack direction="column" spacing={1} justifyContent="center" alignItems="flex-start">
                                        <DialogContentText>
                                            <Typography color="error" display="inline">
                                                (*)&nbsp;
                                            </Typography>
                                            <Typography color="grey.900" display="inline">
                                                Fecha Fin
                                            </Typography>
                                        </DialogContentText>
                                        <TextField
                                            name="fechafin"
                                            label="Fecha Fin"
                                            InputLabelProps={{ shrink: true, required: true }}
                                            type="date"
                                        />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <DialogActions>
                            <Button color="success" onClick={handleClose}>
                                AGREGAR
                            </Button>
                            <Button color="warning" onClick={handleClose}>
                                CANCELAR
                            </Button>
                        </DialogActions>
                        <Typography align="center" sx={{ color: '#FF0000', bgcolor: '#F4DFDB' }}>
                            NOTA: Los campos con (*) son requeridos
                        </Typography>
                    </Dialog>
                    <Button color="warning" sx={{ color: '#FFFFFF', bgcolor: '#FFCE10' }}>
                        <FontAwesomeIcon icon={faPenToSquare} /> MODIFICAR
                    </Button>
                    <Button color="success" sx={{ color: '#FFFFFF', bgcolor: '#00DA6F' }}>
                        <FontAwesomeIcon icon={faFileExcel} /> EXCEL
                    </Button>
                </ButtonGroup>
            </Box>
            <Box
                sx={{
                    height: 420,
                    width: '100%',
                    '& .cabecera': {
                        backgroundColor: 'primary.800',
                        color: 'primary.light'
                    },
                    '& .contenido': {
                        color: 'grey.900'
                    }
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={45}
                    pageSize={5}
                    disableColumnSelector
                    hideFooterSelectedRowCount
                    disableSelectionOnClick={false}
                    localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                    initialState={{
                        filter: {
                            filterModel: {
                                items: [],
                                quickFilterLogicOperator: GridLinkOperator.Or
                            }
                        }
                    }}
                    components={{
                        Toolbar: QuickSearchToolbar,
                        NoRowsOverlay: CustomNoRowsOverlay
                    }}
                />
            </Box>
        </MainCard>
    );
};

export default AutRegFormulario;
