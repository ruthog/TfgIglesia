import { Component, Input, Output, EventEmitter } from '@angular/core';   // , Output, EventEmitter
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActividadesServicio } from '../Servicios/Actividades.service';
import { ActivParticipanteServicio } from '../Servicios/ActivParticipante.service';
import { Actividad } from '../Modelos/Actividad';
import { ActivParticipante } from '../Modelos/ActivParticipante';
import { UsuariosServicio } from '../Servicios/Usuarios.service';
import { Participante } from '../Modelos/Participante';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-ListActividades',
    templateUrl: '../Views/ListActividades.component.html'
})

export class ListActividadesComponent implements OnInit {   // , OnChanges
    private resultado: Observable<Actividad[]>;
    public mensajeError: string;
    public actividadesTotal: Actividad[];
    public actividadesMostrar: Actividad[] = [];
    public actUsuActual: ActivParticipante[]= [];
    public idUsuario: number;
    public participante: Participante;
    public titulo: string;

    constructor(private servicio: ActividadesServicio, private servicioAP: ActivParticipanteServicio,
        private servicioPart: UsuariosServicio, private _route: ActivatedRoute, private _router: Router) {
        this.titulo = 'Lista de Actividades en las que inscribirse';
        }

    getActivUsuarioActual(idUsuario: number) {

        let actPartTemp: ActivParticipante[];
        let i: number;

        this.servicioAP.getResultados().subscribe(
            result => {
                if (result) {
                    actPartTemp = result;
                    i = 0;
                    for (const temp of actPartTemp) {
                        if (temp.idParticipante.id === idUsuario) {
                            this.actUsuActual.push(temp);
                        }
                    }
                }
            });
    }

    getActividades() {
        let bExiste = false;
        this.servicio.getResultados().subscribe(
            resultado => {
                if (resultado) {
                    this.actividadesTotal = resultado;

                    if (typeof (this.actUsuActual) !== 'undefined') {
                        for (const ActivTotal of this.actividadesTotal) {
                            for (const ActUsuActual of this.actUsuActual) {
                                if (ActivTotal.id === ActUsuActual.idActividad.id) {
                                    bExiste = true;
                                    break;
                                }
                            }
                            if (!bExiste) { this.actividadesMostrar.push(ActivTotal); }
                            bExiste = false;
                        }
                    } else {
                        this.actividadesMostrar = this.actividadesTotal;
                    }
                }
            },
            error => this.mensajeError = <any>error);
    }

    onSubmit(idActividad: number) {    // private servicioP: UsuariosServicio,
        try {
            const actividad: Actividad = this.getActividadSelec(idActividad);
            const actPart: ActivParticipante = new ActivParticipante(null, actividad, this.participante);
            this.servicioAP.addActivParticipante(actPart).subscribe();
            // this._router.navigate(['/DatosUsuario/' + this.participante.id]);
            setTimeout(() => { this._router.navigate(['/DatosUsuario/' + this.participante.id]);  }, 3000);

        } catch (error) {
        }
    }

    getActividadSelec(idActividad: number): Actividad {
        for (const actividad of this.actividadesMostrar) {
            if (actividad.id === idActividad) {
                return actividad;
            }
        }
    }

    getUsuario(idUsuario: number) {
        this.servicioPart.getUsuario(idUsuario)
            .subscribe(result => { this.participante = result; });
    }

    ngOnInit() {
        let idUsuario = -1;

        this._route.params.forEach((params: Params) => {
            idUsuario = +params['id'];
        });
        // this.idUsuario = idUsuario;
        this.getUsuario(idUsuario);

        // this.servicioP.getUsuario(idUsuario).subscribe(result => { this.participanteActual = result; });

        this.getActivUsuarioActual(idUsuario);
        this.getActividades();
    }

}



/*

public actPartAdd: ActivParticipante[];
public actPartDelete: ActivParticipante[];

Anterior Submit:
this.servicioAP.addActivParticipante(this.actPartAdd).subscribe();
this.servicioAP.addActivParticipante(this.actPartDelete).subscribe();

updateSelectChecks(event: any) {
        let apTemp: ActivParticipante;

        if (event.target.checked) {
            for (const temp of this.actParts) {
                if (+event.target.name === temp.idActividad.id) {
                    break;
                }else {
                    apTemp = new ActivParticipante(null, temp.idActividad, this.participanteActual);
                    this.actPartAdd.push(apTemp);
                }
            }
        }else {
            for (const temp of this.actParts) {
                if (+event.target.name === temp.idActividad.id) {
                    apTemp = new ActivParticipante(null, temp.idActividad, this.participanteActual);
                    this.actPartDelete.push(apTemp);
                }
            }
        }

    }

    getActivUsuario(idUsuario: number) {
        let actPartTemp: ActivParticipante[];
        let actividadTemp: Actividad;
        let i: number;

        this._route.params.forEach((params: Params) => {
            idUsuario = +params['id'];
        });

        this.servicio.getResultados().subscribe(
            result => {
                if (result) {
                    actPartTemp = result;
                    i = 0;
                    for (const temp of actPartTemp) {
                        if (temp.idParticipante.id === idUsuario) {
                            actividadTemp = new Actividad(temp.idActividad.id,
                                temp.idActividad.nombre, temp.idActividad.fecha, temp.idActividad.idGrupo);
                            // this.actividades[i] = actividadTemp;
                            this.actParts[i] = temp;
                            i++;
                        }
                    }
                }
            });
    }
    */
