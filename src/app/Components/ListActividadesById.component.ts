import { Component, Input } from '@angular/core';   // , Output, EventEmitter
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActividadesServicio } from '../Servicios/Actividades.service';
import { Actividad } from '../Modelos/Actividad';
import { Grupo } from '../Modelos/Grupo';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-ListActividades',
    templateUrl: '../Views/ListActividadesById.component.html'
})

export class ListActividadesByIdComponent implements OnInit {   // , OnChanges
    private results: Observable<Actividad[]>;
    public errorMessage: string;
    public activTemp: Actividad[];
    public actividades: Actividad[]= [];
    public Titulo: string;
    // private idGrupo: number;
    // @Input() grupoSel: Grupo;

    // idGrupoSel grupo: Grupo;
    // @Output() onResult = new EventEmitter<any>(null);

    constructor(private servicio: ActividadesServicio, private _route: ActivatedRoute, private _router: Router ) {
        this.Titulo = 'Listado de Actividades por grupo';
    }

    getActividades() {
        let idGrupo: number;
        idGrupo = -1;

        this._route.params.forEach((params: Params) => {
            idGrupo = +params['idGrupo'];
        });

        this.servicio.getResultados().subscribe(    // getResultados(this.grupoSel.id)
            result => {
                // tslint:disable-next-line:one-line
                if (result) {
                    this.activTemp = result;
                    // let i: number;
                    let j: number;
                    // i = 0;
                    j = 0;
                    for (const temp of this.activTemp) {
                        if (temp.idGrupo.id === idGrupo) {
                            this.actividades[j] = temp;
                            j++;
                        }
                        // i++;
                    }
                }
            },
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getActividades();
    }

}

    /*
    ngOnChanges(changes: any) {
        if (changes['grupo']) {
            this.getActividades(this.idGrupo);
        }
    }*/

    /*this.servicio.getParameter(changes.grupo.currentValue).subscribe(
        (grupoParameter: any) => this.grupoParameter = grupoParameter
    );*/
