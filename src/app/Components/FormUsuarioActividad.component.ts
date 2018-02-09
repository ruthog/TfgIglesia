import { Component, ViewChild, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GruposServicio } from '../Servicios/grupos.service';
import { Participante } from '../Modelos/Participante';
import { ActivParticipante } from '../Modelos/ActivParticipante';
import { ListActividadesByIdComponent } from '../Components/ListActividadesById.component';

// -- import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
// -- import { JsonpModule, Jsonp, Response } from '@angular/http';
// import { Http } from '@angular/http';   // ticker

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-UsuarioActividad',
    templateUrl: '../Views/FormUsuarioActividad.component.html'
})

export class FormUsuarioActividadComponent implements OnInit {
    private results: Observable<Participante[]>;
    public errorMessage: string;
    public grupos: Participante[];
    public grupo: Participante;

    // @ViewChild(ListActividadesByIdComponent) listActividadesByIdComponent: ListActividadesByIdComponent;
    // grupoSel: Grupo;

    // @ViewChild(DivComponent) divComponent: DivComponent;
    // @Input() idGrupo: number;
    // idGrupoSel: number;

    // -- en el constructor antes de VR : private jsonp: Jsonp, private _route: ActivatedRoute, private _router: Router,
    constructor(private servicio: GruposServicio
    ) { }

    // tslint:disable-next-line:one-line
    getGrupos() {
        this.servicio.getResultados().subscribe(
            result => {
                // tslint:disable-next-line:one-line
                if (result) {
                    this.grupos = result;
                }
            },
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getGrupos();
    }

}
