import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Error',
    templateUrl: '../Views/Error.component.html'
})

export class ErrorComponent {
    public titulo: string;

    constructor() {
        this.titulo = 'Error: Página no encontrada.';
    }
}

