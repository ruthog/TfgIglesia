import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Home',
    templateUrl: '../Views/Home.component.html'
})

export class HomeComponent {
    public titulo: string;

    constructor(private _route: ActivatedRoute, private _router: Router
    ) {
        this.titulo = 'Hago nuevas todas las cosas';
    }

}

