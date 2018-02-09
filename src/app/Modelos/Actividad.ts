import { Grupo } from './Grupo';

export class Actividad {
    constructor(
        public id: number,
        public nombre: string,
        public idGrupo: Grupo,
        public fecha1: string
    ) {
    }
}
