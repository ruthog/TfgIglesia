import { Component, ViewChild, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuariosServicio } from '../Servicios/Usuarios.service';
import { Participante } from '../Modelos/Participante';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Login',
    templateUrl: '../Views/Login.component.html'
})

export class LoginComponent implements OnInit {
    private results: Observable<Participante[]>;
    public errorLogin: string;
    public participante: Participante;
    public participantes: Participante[];
    public titulo: string;

    constructor(private servicio: UsuariosServicio, private _route: ActivatedRoute, private _router: Router
    ) {
        this.participante = new Participante(null, '', '', '', 0, '', '', '', '', '');
        this.titulo = 'Entrar';
    }

    onSubmit() {
    // getParticipantes() {
        this.servicio.getResultados().subscribe(
            result => {
                // tslint:disable-next-line:one-line
                if (result) {
                    this.participantes = result;
                    this.logar();
                }
            },
            error => this.errorLogin = <any>error);
    // }
}

    logar() {
        for (const usu of this.participantes) {
            if (usu.usuario.toLocaleLowerCase() === this.participante.usuario.toLocaleLowerCase()) {
                if (usu.password === this.participante.password) {
                    this._router.navigate(['/DatosUsuario/' + usu.id]);
                }else {
                    this.errorLogin = 'La contraseña no es correcta.';
                }
            }
        }
        this.errorLogin = 'No existe ninguna entrada con ese usuario en la base de datos.';
    }

    ngOnInit() {
        this.errorLogin = '';
        // this.getParticipantes();
     }

}
