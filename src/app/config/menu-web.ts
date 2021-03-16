import { ROUTES } from './routes';

export const MENU_WEB = [
    {
        id: null,
        nombre: "Seguridad",
        ruta: "/",
        habilitado: false,
        asignado: false,
        icono: "lock",
        claseIcono: "material-icons",
        idPadre: null,
        collapse: false,
        id_authority: null,
        submenu: [
            { id: null, nombre: "Perfiles", ruta: ROUTES.default + ROUTES.perfiles.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Usuarios", ruta: ROUTES.default + ROUTES.usuarios.lista, collapse: false, id_authority: null },
            { id: null, nombre: 'ClavesProfesores', ruta: ROUTES.default + ROUTES.clavesprofesor.lista, collapse: false, id_authority: null},
            { id: null, nombre: "Profesores", ruta: ROUTES.default + ROUTES.profesores.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Alumnos", ruta: ROUTES.default + ROUTES.alumnos.lista, collapse: false, id_authority: null }
        ]
    },
    {
        id: null,
        nombre: "Catalogos",
        ruta: "/",
        habilitado: false,
        asignado: false,
        icono: "list",
        claseIcono: "material-icons",
        idPadre: null,
        collapse: false,
        id_authority: null,
        submenu: [
            { id: null, nombre: "Anios", ruta: ROUTES.default + ROUTES.anios.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Ciclos", ruta: ROUTES.default + ROUTES.ciclos.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Sistemas", ruta: ROUTES.default + ROUTES.sistemas.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Planteles", ruta: ROUTES.default + ROUTES.planteles.lista, collapse: false, id_authority: null },
            { id: null, nombre: "AreasDisciplinarias", ruta: ROUTES.default + ROUTES.areas.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Materias", ruta: ROUTES.default + ROUTES.materias.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Bloques", ruta: ROUTES.default + ROUTES.bloques.lista, collapse: false, id_authority: null },
        ]
    },
    {
        id: null,
        nombre: "Administrar",
        ruta: "/",
        habilitado: false,
        asignado: false,
        icono: "assignment",
        claseIcono: "material-icons",
        idPadre: null,
        collapse: false,
        id_authority: null,
        submenu: [
            { id: null, nombre: "CodigosLibros", ruta: ROUTES.default + ROUTES.codigolibros, collapse: false, id_authority: null },
            { id: null, nombre: "Andamios", ruta: ROUTES.default + ROUTES.andamios.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Videotutoriales", ruta: ROUTES.default + ROUTES.videotutoriales.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Examenes", ruta: ROUTES.default + ROUTES.examenes.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Tareas", ruta: ROUTES.default + ROUTES.tareas.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Grupos", ruta: ROUTES.default + ROUTES.grupos.lista, collapse: false, id_authority: null },
            { id: null, nombre: "AlumnosProfesor", ruta: ROUTES.default + ROUTES.alumnosprofesor.lista, collapse: false, id_authority: null },
            { id: null, nombre: "ExamenesProfesor", ruta: ROUTES.default + ROUTES.examenesprofesor.lista, collapse: false, id_authority: null },
            { id: null, nombre: "TareasProfesor", ruta: ROUTES.default + ROUTES.tareasprofesor.lista, collapse: false, id_authority: null },
            { id: null, nombre: "Evaluaciones", ruta: ROUTES.default + ROUTES.evaluaciones, collapse: false, id_authority: null },
            { id: null, nombre: "LimpiarGrupos", ruta: ROUTES.default + ROUTES.limpiarGrupos, collapse: false, id_authority: null }
        ]
    },
    {
        id: null,
        nombre: "Recursos",
        ruta: "/",
        habilitado: false,
        asignado: false,
        icono: "folder_open",
        claseIcono: "material-icons",
        idPadre: null,
        collapse: false,
        id_authority: null,
        submenu: [
            { id: null, nombre: "AndamiosProfesor", ruta: ROUTES.default + ROUTES.andamiosprofesor, collapse: false, id_authority: null },
            { id: null, nombre: "AndamiosAlumno", ruta: ROUTES.default + ROUTES.andamiosalumno, collapse: false, id_authority: null },
            { id: null, nombre: "Tutoriales", ruta: ROUTES.default + ROUTES.tutoriales, collapse: false, id_authority: null }
        ]
    },
    {
        id: null,
        nombre: "Actividades",
        ruta: "/",
        habilitado: false,
        asignado: false,
        icono: "description",
        claseIcono: "material-icons",
        idPadre: null,
        collapse: false,
        id_authority: null,
        submenu: [
            { id: null, nombre: "MisExamenes", ruta: ROUTES.default + ROUTES.misexamenes.lista, collapse: false, id_authority: null },
            { id: null, nombre: "MisTareas", ruta: ROUTES.default + ROUTES.mistareas.lista, collapse: false, id_authority: null },
            { id: null, nombre: "MisEvaluaciones", ruta: ROUTES.default + ROUTES.misevaluaciones, collapse: false, id_authority: null },
        ]
    },
    {
        id: null,
        nombre: "Reportes",
        ruta: "/",
        habilitado: false,
        asignado: false,
        icono: "assessment",
        claseIcono: "material-icons",
        idPadre: null,
        collapse: false,
        id_authority: null,
        submenu: [
            { id: null, nombre: "ReporteCodigos", ruta: ROUTES.default + ROUTES.reporteCodigos, collapse: false, id_authority: null },
        ]
    }
];
