export const ROUTES = {
    ninguna: "/",
    default: "/#",
    principal: "/principal",
    validarUsuario: "/login",
    validarContrasena: "/validar",
    recuperarUsuario: '/recuperarUsuario',
    recuperarContrasena: '/recuperarContrasena',
    restaurarContrasena: '/restablecer',
    misuaurio: "/miusuario",
    tutoriales: "/tutoriales",
    mensajes: "/mensajes",
    //Seguridad
    perfiles: {
        lista: "/perfiles",
        agregar: "/perfiles/agregar",
        editar: "/perfiles/editar",
        permisos: "/perfiles/permisos"
    },
    usuarios: {
        lista: "/usuarios",
        agregar: "/usuarios/agregar",
        editar: "/usuarios/editar",
        editarContrasena: "/usuarios/contrasena"
    },
    clavesprofesor: {
        lista: "/claves-profesores",
    },
    profesores: {
        lista: "/profesores",
        editar: "/profesores/editar",
        editarContrasena: "/profesores/contrasena",
        verGrupos: "/profesores/grupos",
        verAlumnos: "/profesores/alumnos"
    },
    alumnos: {
        lista: "/alumnos",
        editar: "/alumnos/editar",
        editarContrasena: "/alumnos/contrasena"
    },
    //Catalogos
    anios: {
        lista: "/anios",
    },
    ciclos: {
        lista: "/ciclos",
    },
    sistemas: {
        lista: "/sistemas",
    },
    planteles: {
        lista: "/planteles",
    },
    areas: {
        lista: "/areas",
    },
    materias: {
        lista: "/materias",
    },
    bloques: {
        lista: "/bloques",
        agregar: "/bloques/agregar",
        editar: "/bloques/editar"
    },
    //Administrar
    alumnosprofesor: {
        lista: "/alumnos-profesor",
        editar: "/alumnos-profesor/editar",
        editarContrasena: "/alumnos-profesor/contrasena"
    },
    grupos: {
        lista: "/grupos",
        agregar: "/grupos/agregar",
        editar: "/grupos/editar"
    },
    examenes: {
        lista: "/examenes",
        agregar: "/examenes/agregar",
        editar: "/examenes/editar",
        preguntas: "/examenes/preguntas",
        agregarPregunta: "/examenes/agregar-pregunta",
        editarPregunta: "/examenes/editar-pregunta",
        vistaprevia: "/examenes/vistaprevia"
    },
    examenesprofesor: {
        lista: "/examenes-profesor",
        agregar: "/examenes-profesor/agregar",
        editar: "/examenes-profesor/editar",
        preguntas: "/examenes-profesor/preguntas",
        agregarPregunta: "/examenes-profesor/agregar-pregunta",
        editarPregunta: "/examenes-profesor/editar-pregunta",
        vistapreviaplantilla: "/examenes-profesor/vistapreviaplantilla",
        generar: "/examenes-profesor/generar",
        vistaprevia: "/examenes-profesor/vistaprevia"
    },
    tareas: {
        lista: "/tareas",
        agregar: "/tareas/agregar",
        editar: "/tareas/editar",
        preguntas: "/tareas/preguntas",
        agregarpregunta: "/tareas/agregar-pregunta",
        editarpregunta: "/tareas/editar-pregunta",
        agregarPregunta: "/tareas/agregar-pregunta",
        editarPregunta: "/tareas/editar-pregunta",
        vistaprevia: "/tareas/vistaprevia"
    },
    tareasprofesor: {
        lista: "/tareas-profesor",
        agregar: "/tareas-profesor/agregar",
        editar: "/tareas-profesor/editar",
        preguntas: "/tareas-profesor/preguntas",
        agregarPregunta: "/tareas-profesor/agregar-pregunta",
        editarPregunta: "/tareas-profesor/editar-pregunta",
        vistapreviaplantilla: "/tareas-profesor/vistapreviaplantilla",
        generar: "/tareas-profesor/generar",
        vistaprevia: "/tareas-profesor/vistaprevia"
    },
    andamios: {
        lista: "/andamios",
        agregar: "/andamios/agregar",
        editar: "/andamios/editar",
    },
    codigolibros: "/codigos-libros",
    evaluaciones: "/evaluaciones",
    limpiarGrupos: "/limpiar-grupos",
    //Recursos
    andamiosalumno: "/andamios-alumno",
    andamiosprofesor: "/andamios-profesor",
    //Actividades
    misexamenes: {
        lista: "/mis-examenes",
        contestar: "/mis-examenes/contestar",
    },
    mistareas: {
        lista: "/mis-tareas",
        contestar: "/mis-tareas/contestar",
    },
    misevaluaciones: "mis-evaluaciones",
    //Soporte
    videotutoriales: {
        lista: "/videotutoriales",
        agregar: "/videotutoriales/agregar",
        editar: "/videotutoriales/editar"
    },
    reporteCodigos: "/cantidadcodigos"
};
