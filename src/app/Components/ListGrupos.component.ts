import { Component, ViewChild, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GruposServicio } from '../Servicios/grupos.service';
import { Grupo } from '../Modelos/Grupo';
import { ListActividadesByIdComponent } from '../Components/ListActividadesById.component';

// -- import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
// -- import { JsonpModule, Jsonp, Response } from '@angular/http';
// import { Http } from '@angular/http';   // ticker

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-ListGrupos',
    templateUrl: '../Views/ListGrupos.component.html',
    providers: [GruposServicio]
})

export class ListGruposComponent implements OnInit {
    private results: Observable<Grupo[]>;
    public errorMessage: string;
    public grupos: Grupo[];
    public grupo: Grupo;
    public titulo: string;

    // @ViewChild(ListActividadesByIdComponent) listActividadesByIdComponent: ListActividadesByIdComponent;
    // grupoSel: Grupo;

    // @ViewChild(DivComponent) divComponent: DivComponent;
    // @Input() idGrupo: number;
    // idGrupoSel: number;

// -- en el constructor antes de VR : private jsonp: Jsonp, private _route: ActivatedRoute, private _router: Router,
    constructor(private servicio: GruposServicio
    ) {
        this.titulo = 'Listado de Grupos';
    }

    getGrupos() {
        this.servicio.getResultados().subscribe(
            result => {
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

/*
    // tslint:disable-next-line:one-line
    showGrupo(event: any): void{
        alert(event.nombre);
    }
    */

    /*bindGrupo(grupo: Grupo) {
        this.grupoSel = grupo;
    }*/

    /*
    seleccionaGrupo(grupo: Grupo) { //  // idGrupo: number
        // -- this.listActividadesByIdComponent.grupo = grupo;
        this.grupoSel = grupo;
        // this.idGrupoSel = grupo.id;
        // this.listActividadesByIdComponent.idGrupo = this.grupoSel.id;
        // this.listActividadesByIdComponent.idGrupo = idGrupo;
        // this.divComponent.mostrar();
    }
    */
