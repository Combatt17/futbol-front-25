export interface Partidos {
    id:             string;
    usuario:        Usuario;
    local:          Equipo;
    visitante:      Equipo;
    fecha:          string;
    goleslocal:     number;
    golesvisitante: number;
}

export interface Equipo {
    id?:     string;
    nombre: string;
}

export interface Usuario {
    id:       string;
    nombre:   string;
    correo:   string;
    username: string;
    password?: string;
    hash?:     string;
}