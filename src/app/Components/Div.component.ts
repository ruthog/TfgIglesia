// yo:import { Component } from '@angular/core';
import { Component, Input } from '@angular/core'; // --> yo


// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { ActividadesServicio } from '../Servicios/Actividades.service';
// import { Actividad } from '../Modelos/Actividad';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Div',
    template: `
    <div [hidden]="hidden">
       <ng-content></ng-content>
    </div>
  `
})
export class DivComponent {
    @Input() hidden: boolean;   // --> yo

    constructor() { this.hidden = true; }

    mostrar() {
        this.hidden = !this.hidden;
    }

    abrir() {
        this.hidden = false;
    }

    cerrar() {
        this.hidden = true;
    }

}
//
