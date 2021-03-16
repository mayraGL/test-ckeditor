export const ConfigTablas = {
    //Perfiles
    perfiles: {
        vista: "perfiles",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'descripcion', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'enabled', sort: 'enable', columnOrder: 2, visible: true, search: false },
            { objectKey: 'editar', sort: 'disable', columnOrder: 3 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 4 },
            { objectKey: 'permisos', sort: 'disable', columnOrder: 5 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "descripcion", equivalente: "descripcion" },
            { nombre: "enabled", equivalente: "enabled" }
        ]
    },
    //Usuarios
    usuarios: {
        vista: "usuarios",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'email', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'username', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'enabled', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 5 },
            { objectKey: 'contrasena', sort: 'disable', columnOrder: 6 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 7 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "apellidos", equivalente: "apellidos" },
            { nombre: "email", equivalente: "email" },
            { nombre: "username", equivalente: "username" },
            { nombre: "enabled", equivalente: "enabled" }
        ]
    },
    codigos: {
        vista: "codigos",
        columnas: [
            { objectKey: 'codigo', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'anno', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'enabled', sort: 'disable', columnOrder: 4, visible: true },
            { objectKey: 'alumno', sort: 'enable', columnOrder: 5, visible: true },
            { objectKey: 'profesor', sort: 'enable', columnOrder: 6, visible: true },
            { objectKey: 'grupo', sort: 'enable', columnOrder: 7, visible: true },
            { objectKey: 'modificationDate', sort: 'enable', columnOrder: 7, visible: true }
        ],
        equivalencias: [
            { nombre: "codigo", equivalente: "codigo" },
            { nombre: "materia", equivalente: "materia.nombre" },
            { nombre: "ciclo", equivalente: "ciclo.nombre" },
            { nombre: "anno", equivalente: "anno.anno" },
            { nombre: "alumno", equivalente: "alumno.user.nombre, alumno.user.nombre" },
            { nombre: "profesor", equivalente: "grupo.profesor.user.nombre, grupo.profesor.user.apellidos" },
            { nombre: "grupo", equivalente: "grupo.nombre" },
            { nombre: "modificationDate", equivalente: "modificationDate" }
        ]
    },
    //Claves profesores
    clavesprofesor: {
        vista: "clavesprofesor",
        columnas: [
            { objectKey: 'codigo', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'nombre', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'asignada', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'registro', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 5 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 6 }
        ],
        equivalencias: [
            { nombre: "codigo", equivalente: "codigo" },
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "apellidos", equivalente: "apellidos" },
            { nombre: "registro", equivalente: "modificationDate" },
            { nombre: "asignada", equivalente: "enabled" }
        ]
    },
    //Profesores
    profesores: {
        vista: "profesores",
        columnas: [
            { objectKey: 'clave', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'nombre', sort: 'enable', columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'username', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'creado', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'totalGrupos', sort: 'disable', columnOrder: 4, visible: true },
            { objectKey: 'totalAlumnos', sort: 'disable', columnOrder: 5, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 6 },
            { objectKey: 'grupos', sort: 'disable', columnOrder: 7 },
            { objectKey: 'contrasena', sort: 'disable', columnOrder: 8 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 9 }
        ],
        equivalencias: [
            { nombre: "clave", equivalente: "codigoProfesor" },
            { nombre: "nombre", equivalente: "user.nombre" },
            { nombre: "apellidos", equivalente: "user.apellidos" },
            { nombre: "username", equivalente: "user.username" },
            { nombre: "creado", equivalente: "user.insertionDate" }
        ]
    },
    profesoresGrupos: {
        vista: "profesoresGrupos",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true, search: false },
            { objectKey: 'anio', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'creado', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'totalAlumnos', sort: 'disable', columnOrder: 5, visible: true },
            { objectKey: 'alumnos', sort: 'disable', columnOrder: 6 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "materia.nombre" },
            { nombre: "anio", equivalente: "materia.anno.anno" },
            { nombre: "ciclo", equivalente: "materia.ciclo.nombre" },
            { nombre: "creado", equivalente: "insertionDate" }
        ]
    },
    profesoresGruposAlumnos: {
        vista: "profesoresGruposAlumnos",
        columnas: [
            { objectKey: 'codigo', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'nombre', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'email', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'username', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'modificationDate', sort: 'enable', columnOrder: 5, visible: true },
            { objectKey: 'insertionDate', sort: 'enable', columnOrder: 5, visible: true },
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "alumno.user.nombre" },
            { nombre: "apellidos", equivalente: "alumno.user.apellidos" },
            { nombre: "email", equivalente: "alumno.user.email" },
            { nombre: "username", equivalente: "alumno.user.username" },
            { nombre: "modificationDate", equivalente: "modificationDate" },
            { nombre: "insertionDate", equivalente: "alumno.user.insertionDate" }
        ]
    },
    //Alumnos
    alumnos: {
        vista: "alumnos",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'email', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'username', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'insertionDate', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 6 },
            { objectKey: 'detalle', sort: 'disable', columnOrder: 7 },
            { objectKey: 'contrasena', sort: 'disable', columnOrder: 8 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 9 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "user.nombre" },
            { nombre: "apellidos", equivalente: "user.apellidos" },
            { nombre: "email", equivalente: "user.email" },
            { nombre: "username", equivalente: "user.username" },
            { nombre: "insertionDate", equivalente: "user.insertionDate" }
        ]
    },
    //Alumnos
    alumnosprofesor: {
        vista: "alumnosprofesor",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'email', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'username', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'insertionDate', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'auxiliar', sort: 'enable', columnOrder: 5, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 6 },
            { objectKey: 'hacerAux', sort: 'disable', columnOrder: 7 },
            { objectKey: 'contrasena', sort: 'disable', columnOrder: 8 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "user.nombre" },
            { nombre: "apellidos", equivalente: "user.apellidos" },
            { nombre: "email", equivalente: "user.email" },
            { nombre: "username", equivalente: "user.username" },
            { nombre: "insertionDate", equivalente: "user.insertionDate" }
        ]
    },
    //Planteles
    planteles: {
        vista: "planteles",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'sistema', sort: 'enable', columnOrder: 0, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 1 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 2 },
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
        ]
    },
    //Turnos
    turnos: {
        vista: "turnos",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 1 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 2 },
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
        ]
    },
    //anios
    anios: {
        vista: "anios",
        columnas: [
            { objectKey: 'anno', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'enabled', sort: 'enable', columnOrder: 1, visible: true, search: false },
            { objectKey: 'editar', sort: 'disable', columnOrder: 2 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 3 }
        ],
        equivalencias: [
            { nombre: "anno", equivalente: "anno" },
            { nombre: "enabled", equivalente: "enabled" }
        ]
    },
    //ciclos
    ciclos: {
        vista: "ciclos",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'enabled', sort: 'enable', columnOrder: 1, visible: true, search: false },
            { objectKey: 'editar', sort: 'disable', columnOrder: 2 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 3 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "enabled", equivalente: "enabled" }
        ]
    },
    //Areas
    areas: {
        vista: "areas",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'enabled', sort: 'enable', columnOrder: 1, visible: true, search: false },
            { objectKey: 'editar', sort: 'disable', columnOrder: 2 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 3 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "enabled", equivalente: "enabled" }
        ]
    },
    //Materias
    materias: {
        vista: "materias",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'codigo', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'area', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'anno', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 5 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 6 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "codigo", equivalente: "codigo" },
            { nombre: "area", equivalente: "areasDiciplinarias.nombre" },
            { nombre: "anno", equivalente: "anno.anno" },
            { nombre: "ciclo", equivalente: "ciclo.nombre" }
        ]
    },
    //Bloques
    bloques: {
        vista: "bloques",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'anio', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 4 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 5 },
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "materia.nombre" },
            { nombre: "anio", equivalente: "materia.anno.anno" },
            { nombre: "ciclo", equivalente: "materia.ciclo.nombre" }
        ]
    },
    //Andamios
    andamios: {
        vista: "andamios",
        columnas: [
            { objectKey: 'bloque', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'anio', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'tipo', sort: 'disable', columnOrder: 4, visible: true },
            { objectKey: 'preview', sort: 'disable', columnOrder: 5 },
            { objectKey: 'descargar', sort: 'disable', columnOrder: 6 },
            { objectKey: 'editar', sort: 'disable', columnOrder: 7 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 8 }
        ],
        equivalencias: [
            { nombre: "materia", equivalente: "bloque.materia.nombre" },
            { nombre: "bloque", equivalente: "bloque.nombre" },
            { nombre: "anio", equivalente: "bloque.materia.anno.anno" },
            { nombre: "ciclo", equivalente: "bloque.materia.ciclo.nombre" }
        ]
    },
    //Grupos
    grupos: {
        vista: "grupos",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true, search: false },
            { objectKey: 'anio', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'totalAlumnos', sort: 'disable', columnOrder: 4, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 5 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 6 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "materia.nombre" },
            { nombre: "anio", equivalente: "materia.anno.anno" },
            { nombre: "ciclo", equivalente: "materia.ciclo.nombre" }
        ]
    },
    //Videotutoriales
    videotutoriales: {
        vista: "videotutoriales",
        columnas: [
            { objectKey: 'titulo', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'bloque', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'anio', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'preview', sort: 'disable', columnOrder: 5 },
            { objectKey: 'editar', sort: 'disable', columnOrder: 6 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 7 },
        ],
        equivalencias: [
            { nombre: "titulo", equivalente: "titulo" },
            { nombre: "bloque", equivalente: "bloque.nombre" },
            { nombre: "materia", equivalente: "bloque.materia.nombre" },
            { nombre: "anio", equivalente: "bloque.materia.anno.anno" },
            { nombre: "ciclo", equivalente: "bloque.materia.ciclo.nombre" }
        ]
    },
    //Examenes
    examenes: {
        vista: "examenes",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'bloque', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'anno', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'preguntas', sort: 'disable', columnOrder: 5, visible: true },
            { objectKey: 'uso', sort: 'disable', columnOrder: 6, visible: true },
            { objectKey: 'porcentaje', sort: 'disable', columnOrder: 7, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 8 },
            { objectKey: 'reactivos', sort: 'disable', columnOrder: 9 },
            { objectKey: 'preview', sort: 'disable', columnOrder: 10 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 11 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "bloque.materia.nombre" },
            { nombre: "bloque", equivalente: "bloque.nombre" },
            { nombre: "anio", equivalente: "bloque.materia.anno.anno" },
            { nombre: "ciclo", equivalente: "bloque.materia.ciclo.nombre" }
        ]
    },
    preguntasExamenes: {
        vista: "preguntasExamenes",
        columnas: [
            { objectKey: 'consecutivo', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 1 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 2 }
        ],
        equivalencias: [
            { nombre: "consecutivo", equivalente: "consecutivo" },
        ]
    },
    //Examenes profesor
    examenesProfesorPlantilla: {
        vista: "examenesProfesorPlantilla",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'bloque', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'preguntas', sort: 'disable', columnOrder: 5, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 6 },
            { objectKey: 'reactivos', sort: 'disable', columnOrder: 7 },
            { objectKey: 'preview', sort: 'disable', columnOrder: 8 },
            { objectKey: 'generar', sort: 'disable', columnOrder: 9 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 10 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "bloque.materia.nombre" },
            { nombre: "bloque", equivalente: "bloque.nombre" }
        ]
    },
    examenesProfesorActivos: {
        vista: "examenesProfesorActivos",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'bloque', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'activo', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'grupo', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'preguntas', sort: 'disable', columnOrder: 5, visible: true },
            { objectKey: 'preview', sort: 'disable', columnOrder: 6 },
            { objectKey: 'activar', sort: 'disable', columnOrder: 7 },
            { objectKey: 'desactivar', sort: 'disable', columnOrder: 8 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 9 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "bloque.materia.nombre" },
            { nombre: "bloque", equivalente: "bloque.nombre" },
            { nombre: "anio", equivalente: "bloque.materia.anno.anno" }
        ]
    },
    //Tareas
    tareas: {
        vista: "tareas",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'bloque', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'anno', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'preguntas', sort: 'disable', columnOrder: 5, visible: true },
            { objectKey: 'uso', sort: 'disable', columnOrder: 6, visible: true },
            { objectKey: 'porcentaje', sort: 'disable', columnOrder: 7, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 8 },
            { objectKey: 'reactivos', sort: 'disable', columnOrder: 9 },
            { objectKey: 'preview', sort: 'disable', columnOrder: 10 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 11 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "bloque.materia.nombre" },
            { nombre: "bloque", equivalente: "bloque.nombre" },
            { nombre: "anio", equivalente: "bloque.materia.anno.anno" },
            { nombre: "ciclo", equivalente: "bloque.materia.ciclo.nombre" }
        ]
    },
    preguntasTareas: {
        vista: "preguntasTareas",
        columnas: [
            { objectKey: 'consecutivo', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'editar', sort: 'disable', columnOrder: 2 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 3 }
        ],
        equivalencias: [
            { nombre: "consecutivo", equivalente: "consecutivo" },
            { nombre: "pregunta", equivalente: "pregunta" }
        ]
    },
    tareasProfesorActivos: {
        vista: "tareasProfesorActivos",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'bloque', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'activo', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'grupo', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'preguntas', sort: 'disable', columnOrder: 5, visible: true },
            { objectKey: 'preview', sort: 'disable', columnOrder: 6 },
            { objectKey: 'activar', sort: 'disable', columnOrder: 7 },
            { objectKey: 'desactivar', sort: 'disable', columnOrder: 8 },
            { objectKey: 'eliminar', sort: 'disable', columnOrder: 9 }
        ],
        equivalencias: [
            { nombre: "nombre", equivalente: "nombre" },
            { nombre: "materia", equivalente: "bloque.materia.nombre" },
            { nombre: "bloque", equivalente: "bloque.nombre" },
            { nombre: "anio", equivalente: "bloque.materia.anno.anno" }
        ]
    },
    //Evaluaciones
    evaluacionesExamen: {
        vista: "evaluacionesExamen",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'examen', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'fechaHora', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'calificacion', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'activar', sort: 'disable', columnOrder: 5 }
        ]
    },
    evaluacionesTarea: {
        vista: "evaluacionesTarea",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'tarea', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'fechaHora', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'calificacion', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'descargar', sort: 'enable', columnOrder: 5 },
            { objectKey: 'activar', sort: 'disable', columnOrder: 6 }
        ]
    },
    //Revisar examenes (Auxiliar)
    revisarExamen: {
        vista: "revisarExamen",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'examen', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'realizado', sort: 'enable', columnOrder: 3, visible: true }
        ]
    },
    //Revisar tareas (Auxiliar)
    revisarTarea: {
        vista: "revisarTarea",
        columnas: [
            { objectKey: 'nombre', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'apellidos', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'tarea', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'realizado', sort: 'enable', columnOrder: 3, visible: true }
        ]
    },
    //Reporte cantidad codigos
    reporteCantidadCodigos: {
        vista: "reporteCantidadCodigos",
        columnas: [
            { objectKey: 'plantel', sort: 'asc', sortOrder: 0, columnOrder: 0, visible: true },
            { objectKey: 'materia', sort: 'enable', columnOrder: 1, visible: true },
            { objectKey: 'ciclo', sort: 'enable', columnOrder: 2, visible: true },
            { objectKey: 'anno', sort: 'enable', columnOrder: 3, visible: true },
            { objectKey: 'profesor', sort: 'enable', columnOrder: 4, visible: true },
            { objectKey: 'cantidad', sort: 'enable', columnOrder: 5, visible: true }
        ]
    }
};