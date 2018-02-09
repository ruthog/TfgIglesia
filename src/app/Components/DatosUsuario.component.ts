import { Component, ViewChild, Input } from '@angular/core';
import { OnInit, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuariosServicio } from '../Servicios/Usuarios.service';
import { Participante } from '../Modelos/Participante';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-DatosUsuario',
    templateUrl: '../Views/DatosUsuario.component.html'
})

export class DatosUsuarioComponent implements OnInit, AfterContentInit {
    public errorMessage: string;
    public participante: Participante;
    public idUsuario: number;
    public mostrar: boolean;
    public titulo: string;

    constructor(private servicio: UsuariosServicio, private _route: ActivatedRoute, private _router: Router
    ) {
        this.titulo = 'Datos Personales';
    }

    getUsuario(idUsuario: number) {
        this.servicio.getUsuario(idUsuario).subscribe(
            result => {
                if (result) {
                    this.participante = result;
                }
            },
            error => this.errorMessage = <any>error);
    }

    ngAfterContentInit() {
        this.mostrar = true;
    }

    ngOnInit() {
        this.mostrar =  false;
        let idUsuario = -1;

        this._route.params.forEach((params: Params) => {
            idUsuario = +params['id'];
        });
        this.getUsuario(idUsuario);
    }

}

/*
this.route.params
        .switchMap((params: Params) => this.bookService.getBook(+params['id']))
        .subscribe(book => this.book = book);
        */
