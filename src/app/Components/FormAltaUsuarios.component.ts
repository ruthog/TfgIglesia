import { Component, ViewChild, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuariosServicio } from '../Servicios/Usuarios.service';
import { Participante } from '../Modelos/Participante';
import { Location } from '@angular/common';

import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';     // COMPROBAR

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-AltaUsuario',
    templateUrl: '../Views/FormAltaUsuarios.component.html'
})

export class FormAltaUsuariosComponent implements OnInit {
    private results: Observable<Participante[]>;
    public errorMessage: string;
    public participante: Participante;
    public titulo: string;

    constructor(private servicio: UsuariosServicio, private _route: ActivatedRoute, private _router: Router, private location: Location
    ) {
        this.titulo = 'Alta de Usuario';
        // this.participante = new Participante(null, '', '', '', 0, '', '', '', '', '');
    }

    getUsuario(idUsuario: number) {

        if (typeof (idUsuario) !== 'undefined') {

            this.servicio.getUsuario(+idUsuario).subscribe(
                result => {
                    if (result) {
                        this.participante = result;
                    }
                },
                error => this.errorMessage = <any>error);
        }
    }

    onSubmit() {
        let idUsuario = '';

        this._route.params.forEach((params: Params) => {
            idUsuario = params['id'];
        });

        if (typeof (idUsuario) === 'undefined') {
            this.addUsuario();
        }else {
            this.updateUsuario();
        }
    }

    addUsuario() {
        try {
            this.servicio.addUsuario(this.participante).subscribe();
            this._router.navigate(['/Login/']);
        } catch (error) {
        }
    }

    updateUsuario() {
        try {
            this.servicio.edit(this.participante).subscribe();
            // this.location.back();
            this._router.navigate(['/Blanco/' + this.participante.id]);     // DatosUsuario
        } catch (error) {
        }
    }

    ngOnInit() {
        let idUsuario = '';

        this._route.params.forEach((params: Params) => {
            idUsuario = params['id'];
        });

        if (typeof (idUsuario) !== 'undefined') {
            this.getUsuario(+idUsuario);
        }else {
            this.participante = new Participante(null, '', '', '', 0, '', '', '', '', '');
        }
    }

}


// -- import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
// -- import { JsonpModule, Jsonp, Response } from '@angular/http';
// import { Http } from '@angular/http';   // ticker

    // @ViewChild(ListActividadesByIdComponent) listActividadesByIdComponent: ListActividadesByIdComponent;
    // @Input() idGrupo: number;

    /*
    // tslint:disable-next-line:one-line
    getUsuarios() {
        this.servicio.getResultados().subscribe(
            result => {
                // tslint:disable-next-line:one-line
                if (result) {
                    this.usuarios = result;
                }
            },
            error => this.errorMessage = <any>error);
    }
    */

