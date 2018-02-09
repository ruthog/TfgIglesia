import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SearchItem } from '../Modelos/SearchItem';   // Ruth
import { SearchService } from '../Servicios/search.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'search-tag',
    templateUrl: '../Views/search.component.html'        // ListadoGA.html
})

export class SearchComponent implements OnInit {
    public Titulo: string;
    public Subtitulo: string;

    private loading: boolean;
    private results: Observable<SearchItem[]>;
    private searchField: FormControl;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private itunes: SearchService
    ) {
        this.Titulo = 'Mierda';
        this.Subtitulo = 'Remierda';

        this.loading = false;
    }

    ngOnInit() {
        this.searchField = new FormControl();
        /*
        this.results = this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .do(_ => this.loading = true)
            .switchMap(term => this.itunes.search(term))
            .do(_ => this.loading = false);
*/
    }

}
