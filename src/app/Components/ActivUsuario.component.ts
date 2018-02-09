import { Component, ViewChild, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActivParticipanteServicio } from '../Servicios/ActivParticipante.service';
import { UsuariosServicio } from '../Servicios/Usuarios.service';
import { ActividadesServicio } from '../Servicios/Actividades.service';
import { ActivParticipante } from '../Modelos/ActivParticipante';
import { Actividad } from '../Modelos/Actividad';
import { Participante } from '../Modelos/Participante';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-ActivUsuario',
    templateUrl: '../Views/ActivUsuario.component.html'
})

export class ActivUsuarioComponent implements OnInit {
    private results: Observable<ActivParticipante[]>;
    public errorMessage: string;
    public actividades: Actividad[] = [];
    public participante: Participante;
    public activParticipante: ActivParticipante[];

    constructor(private servicio: ActivParticipanteServicio, private servicioAct: ActividadesServicio,
        private servicioPart: UsuariosServicio, private _route: ActivatedRoute, private _router: Router
    ) { }

    getActivUsuario() {
        let actPartTemp: ActivParticipante[] = [];  // = [] Miercoles a las 4:38
        let actividadTemp: Actividad;
        let idUsuario = -1;

        this._route.params.forEach((params: Params) => {
            idUsuario = +params['id'];
        });

        this.servicio.getResultados().subscribe(
            result => {
                if (result) {
                    actPartTemp = result;
                    this.activParticipante = actPartTemp;
                    if (typeof (actPartTemp) !== 'undefined') {
                        for (const temp of actPartTemp) {
                            if (temp.idParticipante.id === idUsuario) {
                                actividadTemp = new Actividad(temp.idActividad.id,
                                    temp.idActividad.nombre, temp.idActividad.idGrupo, temp.idActividad.fecha1);
                                this.actividades.push(actividadTemp);
                            }
                        }
                    }
                }
            },
            error => this.errorMessage = <any>error);
    }

    getActividadSelec(idActividad: number): Actividad {
        for (const actividad of this.actividades) {
            if (actividad.id === idActividad) {
                return actividad;
            }
        }
    }

    getUsuario(idUsuario: number) {
        this.servicioPart.getUsuario(idUsuario)
            .subscribe(result => { this.participante = result; });
    }

    onSubmit(idActividad: number) {
        try {
            let apSelected: ActivParticipante;
            if (typeof(this.activParticipante !== undefined)) {
                for (const ap of this.activParticipante) {
                    if (ap.idActividad.id === idActividad) {
                        apSelected = ap;
                        break;
                    }
                }
                if (typeof (apSelected !== undefined)) {
                    this.servicio.deleteActivParticipante(apSelected.id).subscribe();
                    const id = this.participante.id;
                    setTimeout(() => { this._router.navigate(['/DatosUsuario/' + id]); }, 5000);
                }
            }
        } catch (error) {
        }
    }

    ngOnInit() {
        this.getActivUsuario();
    }

}



// this._router.navigate(['/DatosUsuario/' + this.participante.id]);
            // this._router.navigated = false;
            // this._router.navigate([this._router.url]);



/*

// import { DivComponent } from '../Components/Div.component';
// import { ListActividadesComponent } from '../Components/ListActividades.Component';


// @ViewChild(ListActividadesComponent) ventanaActividades: ListActividadesComponent;

    /*public mostrarAdd: boolean;
    public mostrarUpdate: boolean;
    public mostrarDelete: boolean;*/

    // @Input() grupoSel: Grupo;
    // @Output() onResult = new EventEmitter<any>(null);



    /*
    abrirListActividades(idUsuario: any) {
        // this.ventanaActividades.idUsuario = idUsuario;
        // this.ventanaModal.abrir();
    }
    */



        /*const subRuta = this._router.url.substring(0, this._router.url.lastIndexOf('/'));
        if (subRuta === '/DatosUsuario') {
            this.mostrarUpdate = true;
            this.mostrarDelete = true;
        }else {
            this.mostrarUpdate = false;
            this.mostrarDelete = false;
        }*/
