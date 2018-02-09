import { Component, ViewChild, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuariosServicio } from '../Servicios/Usuarios.service';
import { Participante } from '../Modelos/Participante';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Blanco',
    templateUrl: '../Views/Blanco.component.html'
})

export class BlancoComponent implements OnInit {
    public errorMessage: string;
    public participante: Participante;

    constructor(private servicio: UsuariosServicio, private _route: ActivatedRoute, private _router: Router
    ) {}

    getUsuario(idUsuario: number) {
        this.servicio.getUsuario(idUsuario).subscribe(
            result => {
                if (result) {
                    this.participante = result;
                    this._router.navigate(['/DatosUsuario/' + this.participante.id]);
                }
            },
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        let idUsuario = -1;

        this._route.params.forEach((params: Params) => {
            idUsuario = +params['id'];
        });
        this.getUsuario(idUsuario);
    }
}
