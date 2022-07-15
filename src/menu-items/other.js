// assets
import HomeIcon from '@mui/icons-material/Home';
import PanToolIcon from '@mui/icons-material/PanToolOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FeedIcon from '@mui/icons-material/Feed';
import { IconBrandChrome } from '@tabler/icons';

// constant
const icons = {
    HomeIcon,
    PanToolIcon,
    GroupsIcon,
    PersonIcon,
    NightShelterIcon,
    SettingsIcon,
    LockIcon,
    AccountBalanceIcon,
    NotificationsActiveIcon,
    FeedIcon,
    IconBrandChrome
};

// ==============================|| MENU ITEMS ||============================== //

const other = {
    id: 'menu-items',
    type: 'group',
    children: [
        {
            id: 'main-page',
            title: 'Inicio',
            type: 'item',
            url: '/main-page',
            icon: icons.HomeIcon,
            breadcrumbs: false
        },
        {
            id: 'autorizaciones',
            title: 'Autorizaciones',
            type: 'collapse',
            icon: icons.PanToolIcon,
            children: [
                {
                    id: 'regformulario',
                    title: 'Aut. Reg. de Formulario',
                    type: 'item',
                    url: '/rrhh/boletas/regularizaciones',
                    breadcrumbs: false
                },
                {
                    id: 'regvacaciones',
                    title: 'Aut. Reg. de Vacaciones',
                    type: 'item',
                    url: '/rrhh/vacaciones/regularizaciones',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'admi-personal',
            title: 'Administración del Personal',
            type: 'collapse',
            icon: icons.GroupsIcon,
            children: [
                {
                    id: 'relacion-laboral',
                    title: 'Relación Laboral',
                    type: 'item',
                    url: '/rrhh/relacion_laboral',
                    breadcrumbs: false
                },
                {
                    id: 'personal',
                    title: 'Personal',
                    type: 'collapse',
                    children: [
                        {
                            id: 'editar',
                            title: 'Editar',
                            type: 'item',
                            url: '/rrhh/personal/editar',
                            breadcrumbs: false
                        },
                        {
                            id: 'registro',
                            title: 'Registro',
                            type: 'item',
                            url: '/rrhh/personal/registro',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'cumpleñeros',
                    title: 'Cumpleañeros',
                    type: 'item',
                    url: '/rrhh/cumpleaniero',
                    breadcrumbs: false
                },
                {
                    id: 'ubicacion-file',
                    title: 'Ubicación File',
                    type: 'item',
                    url: '/rrhh/ubicacion_file',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'ficha-personal',
            title: 'Ficha Personal',
            type: 'item',
            url: '/ficha-personal',
            icon: icons.PersonIcon,
            breadcrumbs: false
        },
        {
            id: 'gestion-organizacional',
            title: 'Gestión Organizacional',
            type: 'collapse',
            icon: icons.AccountBalanceIcon,
            children: [
                {
                    id: 'organigramas',
                    title: 'Organigramas',
                    type: 'item',
                    url: '/incorporacion/organigramas',
                    breadcrumbs: false
                },
                {
                    id: 'cargos',
                    title: 'Cargos',
                    type: 'item',
                    url: '/incorporacion/cargos',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'control-personal',
            title: 'Control de Personal',
            type: 'collapse',
            icon: icons.PanToolIcon,
            children: [
                {
                    id: 'mis-marcaciones',
                    title: 'Mis Marcaciones',
                    type: 'item',
                    url: '/rrhh/marcaciones/mis_marcaciones',
                    breadcrumbs: false
                },
                {
                    id: 'aprobacion-formulario',
                    title: 'Aprobación de Formulario',
                    type: 'item',
                    url: '/rrhh/boletas/aprobacion_boletas',
                    breadcrumbs: false
                },
                {
                    id: 'recepcion-formulario',
                    title: 'Recepción de Formulario',
                    type: 'item',
                    url: '/rrhh/boletas/recepcion_boletas',
                    breadcrumbs: false
                },
                {
                    id: 'solicitar-formulario',
                    title: 'Solicitar Formulario',
                    type: 'item',
                    url: '/rrhh/boletas/solicitud_boleta',
                    breadcrumbs: false
                },
                {
                    id: 'marcados',
                    title: 'Marcados',
                    type: 'item',
                    url: '/rrhh/marcaciones/reporte',
                    breadcrumbs: false
                },
                {
                    id: 'viajes-comision',
                    title: 'Viajes de Comisión',
                    type: 'item',
                    url: '/rrhh/marcaciones/viajes',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'vacaciones',
            title: 'Vacaciones',
            type: 'collapse',
            icon: icons.NightShelterIcon,
            children: [
                {
                    id: 'registro-vacacion',
                    title: 'Registro de Vacación',
                    type: 'item',
                    url: '/rrhh/vacaciones/registro',
                    breadcrumbs: false
                },
                {
                    id: 'sol-programacion-vacacion',
                    title: 'Solicitud Programación Vacación',
                    type: 'item',
                    url: '/rrhh/vacaciones/programacion/solicitud',
                    breadcrumbs: false
                },
                {
                    id: 'aprobacion-programacion',
                    title: 'Aprobación Programación',
                    type: 'item',
                    url: '/rrhh/vacaciones/programacion/aprobacion',
                    breadcrumbs: false
                },
                {
                    id: 'recepcion-programacion-vac',
                    title: 'Recepción Programación Vacaciones',
                    type: 'item',
                    url: '/rrhh/vacaciones/programacion/recepcion',
                    breadcrumbs: false
                },
                {
                    id: 'solicitud-vacaciones',
                    title: 'Solicitud de Vacaciones',
                    type: 'item',
                    url: '/rrhh/vacaciones/solicitud',
                    breadcrumbs: false
                },
                {
                    id: 'aprobacion-vacaciones',
                    title: 'Aprobación de Vacaciones',
                    type: 'item',
                    url: '/rrhh/vacaciones/aprobacion',
                    breadcrumbs: false
                },
                {
                    id: 'recepcion-vacaciones',
                    title: 'Recepción de Vacaciones',
                    type: 'item',
                    url: '/rrhh/vacaciones/recepcion',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'adm-seguridad',
            title: 'Adm. Seguridad',
            type: 'collapse',
            icon: icons.LockIcon,
            children: [
                {
                    id: 'usuarios',
                    title: 'Usuarios',
                    type: 'collapse',
                    children: [
                        {
                            id: 'restablecer-password',
                            title: 'Restablecer Password',
                            type: 'item',
                            url: '/seguridad/reset_password',
                            breadcrumbs: false
                        },
                        {
                            id: 'cambio-password',
                            title: 'Cambio de Password',
                            type: 'item',
                            url: '/seguridad/change_password',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'gestion-usuario',
                    title: 'Gestión de Usuarios',
                    type: 'item',
                    url: '/seguridad/usuarios',
                    breadcrumbs: false
                },
                {
                    id: 'mi-cuenta',
                    title: 'Mi Cuenta',
                    type: 'item',
                    url: '/seguridad/mi_cuenta',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'parametros',
            title: 'Parametros',
            type: 'collapse',
            icon: icons.SettingsIcon,
            children: [
                {
                    id: 'asistencia',
                    title: 'Asistencia',
                    type: 'collapse',
                    children: [
                        {
                            id: 'perfiles-laborales',
                            title: 'Perfiles Laborales',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'gestion-calendarios-laborales',
                                    title: 'Gestión de calendarios laborales',
                                    type: 'item',
                                    url: '/rrhh/marcaciones/perfil_laboral',
                                    breadcrumbs: false
                                }
                            ]
                        },
                        {
                            id: 'gestion-horarios',
                            title: 'Gestión Horarios',
                            type: 'item',
                            url: '/rrhh/marcaciones/horario',
                            breadcrumbs: false
                        },
                        {
                            id: 'maquinas',
                            title: 'Maquinas',
                            type: 'item',
                            url: '/rrhh/marcaciones/maquinas_biometricos',
                            breadcrumbs: false
                        },
                        {
                            id: 'tolerancias',
                            title: 'Tolerancias',
                            type: 'item',
                            url: '/rrhh/marcaciones/gestion_tolerancias',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'ubicaciones',
                    title: 'Ubicaciones',
                    type: 'item',
                    url: '/rrhh/administracion/ubicaciones',
                    breadcrumbs: false
                },
                {
                    id: 'configuraciones-generales',
                    title: 'Configuraciones Generales',
                    type: 'item',
                    url: '/configuraciones_generales',
                    breadcrumbs: false
                },
                {
                    id: 'formulario-salida',
                    title: 'Formulario de Salida',
                    type: 'item',
                    url: '/rrhh/boletas/boletas',
                    breadcrumbs: false
                },
                {
                    id: 'feriados',
                    title: 'Feriados',
                    type: 'item',
                    url: '/rrhh/administracion/feriados',
                    breadcrumbs: false
                },
                {
                    id: 'entidad',
                    title: 'Entidad',
                    type: 'item',
                    url: '/configuraciones/entidad',
                    breadcrumbs: false
                },
                {
                    id: 'documentos',
                    title: 'Documentos',
                    type: 'item',
                    url: '/archivo/documento',
                    breadcrumbs: false
                },
                {
                    id: 'resoluciones',
                    title: 'Resoluciones',
                    type: 'item',
                    url: '/configuraciones/resolucion',
                    breadcrumbs: false
                },
                {
                    id: 'niveles-salariales',
                    title: 'Niveles Salariales',
                    type: 'item',
                    url: '/contrataciones/nivel_salarial',
                    breadcrumbs: false
                },
                {
                    id: 'nivel-academico',
                    title: 'Nivel Académico',
                    type: 'item',
                    url: '/rrhh/personal/nivel_academico',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'planillas',
            title: 'Planillas',
            type: 'collapse',
            icon: icons.FeedIcon,
            children: [
                {
                    id: 'generar-planillas',
                    title: 'Generar Planillas',
                    type: 'item',
                    url: '/rrhh/planilla/generacion',
                    breadcrumbs: false
                },
                {
                    id: 'reportes',
                    title: 'Reportes',
                    type: 'item',
                    url: '/rrhh/planilla/reportes',
                    breadcrumbs: false
                },
                {
                    id: 'reportes-formulario',
                    title: 'Reportes Formulario',
                    type: 'item',
                    url: '/rrhh/boletas/reporte',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'notificaciones',
            title: 'Notificaciones',
            type: 'item',
            url: '/notificaciones',
            icon: icons.NotificationsActiveIcon,
            breadcrumbs: false
        }
    ]
};

export default other;
