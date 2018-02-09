import { Participante } from './Participante';
import { Actividad } from './Actividad';

export class ActivParticipante {
    constructor(
        public id: number,
        public idActividad: Actividad,
        public idParticipante: Participante
    ) {
    }
}
