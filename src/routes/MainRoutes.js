import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// main page routing
const MainPage = Loadable(lazy(() => import('views/main-page')));
// autorizaciones
const AutRegFormulario = Loadable(lazy(() => import('views/autorizaciones/aut-reg-de-formulario')));
const AutRegVacaciones = Loadable(lazy(() => import('views/autorizaciones/aut-reg-de-vacaciones')));
// administracion del personal
const EditarPersonal = Loadable(lazy(() => import('views/administracion-del-personal/personal/editar')));
const RegistroPersonal = Loadable(lazy(() => import('views/administracion-del-personal/personal/registro')));
const Cumpleanieros = Loadable(lazy(() => import('views/administracion-del-personal/cumpleanieros')));
const RelacionLaboral = Loadable(lazy(() => import('views/administracion-del-personal/relacion-laboral')));
const UbicacionFile = Loadable(lazy(() => import('views/administracion-del-personal/ubicacion-file')));
// ficha personal
const FichaPersonal = Loadable(lazy(() => import('views/ficha-personal')));
// gestion organizacional
const Organigramas = Loadable(lazy(() => import('views/gestion-organizacional/organigramas')));
const Cargos = Loadable(lazy(() => import('views/gestion-organizacional/cargos')));
// control de personal
const AprobacionFormulario = Loadable(lazy(() => import('views/control-de-personal/aprobacion-de-formulario')));
const Marcados = Loadable(lazy(() => import('views/control-de-personal/marcados')));
const MisMarcaciones = Loadable(lazy(() => import('views/control-de-personal/mis-marcaciones')));
const RecepcionFormulario = Loadable(lazy(() => import('views/control-de-personal/recepcion-de-formulario')));
const SolicitarFormulario = Loadable(lazy(() => import('views/control-de-personal/solicitar-formulario')));
const ViajesComision = Loadable(lazy(() => import('views/control-de-personal/viajes-de-comision')));
// vacaciones
const AprobacionVacaciones = Loadable(lazy(() => import('views/vacaciones/aprobacion-de-vacaciones')));
const AprobacionProgramacion = Loadable(lazy(() => import('views/vacaciones/aprobacion-programacion')));
const RecepcionVacaciones = Loadable(lazy(() => import('views/vacaciones/recepcion-de-vacaciones')));
const RecepcionProgramacionVac = Loadable(lazy(() => import('views/vacaciones/recepcion-programacion-vac')));
const RegistroVacacion = Loadable(lazy(() => import('views/vacaciones/registro-de-vacacion')));
const SolProgramacionVacacion = Loadable(lazy(() => import('views/vacaciones/sol-programacion-vacacion')));
const SolicitudVacaciones = Loadable(lazy(() => import('views/vacaciones/solicitud-de-vacaciones')));
// adm. seguridad
const CambioPassword = Loadable(lazy(() => import('views/adm-seguridad/usuarios/cambio-de-password')));
const RestablecerPassword = Loadable(lazy(() => import('views/adm-seguridad/usuarios/restablecer-password')));
const GestionUsuarios = Loadable(lazy(() => import('views/adm-seguridad/gestion-de-usuarios')));
const MiCuenta = Loadable(lazy(() => import('views/adm-seguridad/mi-cuenta')));
// parametros
const CalendariosLaborales = Loadable(
    lazy(() => import('views/parametros/asistencia/perfiles-laborales/gestion-de-calendarios-laborales'))
);
const GestionHorarios = Loadable(lazy(() => import('views/parametros/asistencia/gestion-horarios')));
const Maquinas = Loadable(lazy(() => import('views/parametros/asistencia/maquinas')));
const Tolerancias = Loadable(lazy(() => import('views/parametros/asistencia/tolerancias')));
const ConfiguracionesGenerales = Loadable(lazy(() => import('views/parametros/configuraciones-generales')));
const Documentos = Loadable(lazy(() => import('views/parametros/documentos')));
const Entidad = Loadable(lazy(() => import('views/parametros/entidad')));
const Feriados = Loadable(lazy(() => import('views/parametros/feriados')));
const FormularioSalida = Loadable(lazy(() => import('views/parametros/formulario-de-salida')));
const NivelAcademico = Loadable(lazy(() => import('views/parametros/nivel-academico')));
const NivelSalarial = Loadable(lazy(() => import('views/parametros/niveles-salariales')));
const Resoluciones = Loadable(lazy(() => import('views/parametros/resoluciones')));
const Ubicaciones = Loadable(lazy(() => import('views/parametros/ubicaciones')));
// planillas
const GenerarPlanillas = Loadable(lazy(() => import('views/planillas/generar-planillas')));
const Reportes = Loadable(lazy(() => import('views/planillas/reportes')));
const ReportesFormulario = Loadable(lazy(() => import('views/planillas/reportes-formulario')));
// notificaciones
const Notificaciones = Loadable(lazy(() => import('views/notificaciones')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <MainPage />
        },
        {
            path: 'main',
            children: [
                {
                    path: 'main-page',
                    element: <MainPage />
                },
                {
                    // ------------PARAMETROS-DOCUMENTO-------
                    path: 'archivo',
                    children: [
                        {
                            path: 'documento',
                            element: <Documentos />
                        }
                    ]
                },
                {
                    path: 'configuraciones',
                    children: [
                        {
                            // ------------PARAMETROS-ENTIDAD-------
                            path: 'entidad',
                            element: <Entidad />
                        },
                        {
                            // ------------PARAMETROS-RESOLUCIONES-------
                            path: 'resolucion',
                            element: <Resoluciones />
                        }
                    ]
                },
                {
                    // ------------PARAMETROS-CONFIGURACIONES-GENERALES-------
                    path: 'configuraciones_generales',
                    element: <ConfiguracionesGenerales />
                },
                {
                    path: 'contrataciones',
                    children: [
                        {
                            // ------------PARAMETROS-NIVEL SALARIAL-------
                            path: 'nivel_salarial',
                            element: <NivelSalarial />
                        }
                    ]
                },
                {
                    // -----------NOTIFICACIONES--------------
                    path: 'notificaciones',
                    element: <Notificaciones />
                },
                {
                    // ------------FICHA-PERSONAL-----------
                    path: 'ficha-personal',
                    element: <FichaPersonal />
                },
                {
                    path: 'incorporacion',
                    children: [
                        {
                            // ------------GESTION ORGANIZACIONAL-ORGANIGRAMAS-------
                            path: 'organigramas',
                            element: <Organigramas />
                        },
                        {
                            // ----------GESTION ORGNIZACIONAL-CARGOS------------
                            path: 'cargos',
                            element: <Cargos />
                        }
                    ]
                },
                {
                    path: 'rrhh',
                    children: [
                        {
                            path: 'administracion',
                            children: [
                                {
                                    // ------------PARAMETROS-UBICACIONES-------
                                    path: 'ubicaciones',
                                    element: <Ubicaciones />
                                },
                                {
                                    // ------------PARAMETROS-FERIADOS-------
                                    path: 'feriados',
                                    element: <Feriados />
                                }
                            ]
                        },
                        {
                            path: 'boletas',
                            children: [
                                {
                                    // --------AUTORIZACIONES-REG FORMULARIO-------
                                    path: 'regularizaciones',
                                    element: <AutRegFormulario />
                                },
                                {
                                    // ----CONTROL DE PERSONAL-APROBACION FORMULARIO----
                                    path: 'aprobacion_boletas',
                                    element: <AprobacionFormulario />
                                },
                                {
                                    // ----CONTROL DE PERSONAL-RECEPCION FORMULARIO-----
                                    path: 'recepcion_boletas',
                                    element: <RecepcionFormulario />
                                },
                                {
                                    // ----CONTROL DE PERSONAL-SOLICITUD FORMULARIO-----
                                    path: 'solicitud_boleta',
                                    element: <SolicitarFormulario />
                                },
                                {
                                    // ----PLANILLAS-RESPORTES FORMULARIO----
                                    path: 'reporte',
                                    element: <ReportesFormulario />
                                },
                                {
                                    // ----PARAMETROS-FORMULARIO SALIDA-------
                                    path: 'boletas',
                                    element: <FormularioSalida />
                                }
                            ]
                        },
                        {
                            // ----ADMINITRACION DEL PERSONAL-CUMPLEANIERO------
                            path: 'cumpleaniero',
                            element: <Cumpleanieros />
                        },
                        {
                            path: 'marcaciones',
                            children: [
                                {
                                    // ----PARAMETRO-CALENDARIOS LABORALES-----
                                    path: 'perfil_laboral',
                                    element: <CalendariosLaborales />
                                },
                                {
                                    // ----PARAMETROS-HORARIOS-------
                                    path: 'horario',
                                    element: <GestionHorarios />
                                },
                                {
                                    // ----PARAMETROS-MAQUINAS BIOMETRICOS-------
                                    path: 'maquinas_biometricos',
                                    element: <Maquinas />
                                },
                                {
                                    // ----PARAMETROS-TOLERANCIAS-------
                                    path: 'gestion_tolerancias',
                                    element: <Tolerancias />
                                },
                                {
                                    // ----CONTROL DE PERSONAL-MIS MARCACIONES------
                                    path: 'mis_marcaciones',
                                    element: <MisMarcaciones />
                                },
                                {
                                    // ----CONTROL DE PERSONAL-MARCADOS-------
                                    path: 'reporte',
                                    element: <Marcados />
                                },
                                {
                                    // ----CONTROL DE PERSONAL-VIAJES-------
                                    path: 'viajes',
                                    element: <ViajesComision />
                                }
                            ]
                        },
                        {
                            path: 'personal',
                            children: [
                                {
                                    // ----ADMINISTRACION DEL PERSONAL-EDITAR-------
                                    path: 'editar',
                                    element: <EditarPersonal />
                                },
                                {
                                    // ----ADMINISTRACION DEL PERSONAL-REGISTRAR-------
                                    path: 'registro',
                                    element: <RegistroPersonal />
                                },
                                {
                                    // ----PARAMETROS-NIVEL ACADEMICO-------
                                    path: 'nivel_academico',
                                    element: <NivelAcademico />
                                }
                            ]
                        },
                        {
                            path: 'planilla',
                            children: [
                                {
                                    // -----PLANILLAS-GENERAR-----
                                    path: 'generacion',
                                    element: <GenerarPlanillas />
                                },
                                {
                                    // -----PLANILLAS-REPORTES-----
                                    path: 'reportes',
                                    element: <Reportes />
                                }
                            ]
                        },
                        {
                            // -----ADMINISTRACION DEL PERSONAL-RELACION LABORAL----
                            path: 'relacion_laboral',
                            element: <RelacionLaboral />
                        },
                        {
                            // -----ADMINISTRACION DEL PERSONAL-UBICACIONES FILE----
                            path: 'ubicacion_file',
                            element: <UbicacionFile />
                        },
                        {
                            path: 'vacaciones',
                            children: [
                                {
                                    // ----AUTORIZACIONES-REG VACACIONES----
                                    path: 'regularizaciones',
                                    element: <AutRegVacaciones />
                                },
                                {
                                    // ----VACACIONES-REGISTRO----
                                    path: 'registro',
                                    element: <RegistroVacacion />
                                },
                                {
                                    path: 'programacion',
                                    children: [
                                        {
                                            // ----VACACIONES-SOL PROGRAMACION VAC----
                                            path: 'solicitud',
                                            element: <SolProgramacionVacacion />
                                        },
                                        {
                                            // ----VACACIONES-APROBACION PROGRAMACION VAC----
                                            path: 'aprobacion',
                                            element: <AprobacionProgramacion />
                                        },
                                        {
                                            // ----VACACIONES-RECEPCION PROGRAMACION VAC----
                                            path: 'recepcion',
                                            element: <RecepcionProgramacionVac />
                                        }
                                    ]
                                },
                                {
                                    // ----VACACIONES-SOLICITUD VACACION----
                                    path: 'solicitud',
                                    element: <SolicitudVacaciones />
                                },
                                {
                                    // ----VACACIONES-APROBACION VACACION----
                                    path: 'aprobacion',
                                    element: <AprobacionVacaciones />
                                },
                                {
                                    // ----VACACIONES-RECEPCION VACACION----
                                    path: 'recepcion',
                                    element: <RecepcionVacaciones />
                                }
                            ]
                        }
                    ]
                },
                {
                    path: 'seguridad',
                    children: [
                        {
                            // ----ADM. SEGURIDAD-CAMBIO PASSWORD----
                            path: 'change_password',
                            element: <CambioPassword />
                        },
                        {
                            // ----ADM. SEGURIDAD-RESTABLECER PASS----
                            path: 'reset_password',
                            element: <RestablecerPassword />
                        },
                        {
                            // ----ADM. SEGURIDAD-USUARIOS----
                            path: 'usuarios',
                            element: <GestionUsuarios />
                        },
                        {
                            // ----ADM. SEGURIDAD-MI CONFI----
                            path: 'mi_cuenta',
                            element: <MiCuenta />
                        }
                    ]
                }
            ]
        }
    ]
};

export default MainRoutes;
