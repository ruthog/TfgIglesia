import { Injectable } from '@angular/core';     // -- NgModule, Component,
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grupo } from '../Modelos/Grupo';
import { GLOBAL } from '../Servicios/Global';

// -- import { Http, Headers, RequestOptions } from '@angular/http';
// import { HttpModule } from '@angular/http';                             // Victor Robles
// import { HttpClientModule } from '@angular/common/http';    // Victor Robles    // , HttpClient
// import { BrowserModule } from '@angular/platform-browser';
// -- import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// -- import { JsonpModule, Jsonp, Response } from '@angular/http';
// -- import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Injectable()
export class GruposServicio {
    _apiUrl: string;

    constructor(public http: HttpClient) {
       this._apiUrl = GLOBAL.url_GruposXML;
    }

    getResultados(): Observable<any> {
        return this.http.get(this._apiUrl);
    }

    private getHeaders() {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET');

        return headers;
    }

}
