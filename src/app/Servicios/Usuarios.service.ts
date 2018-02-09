import { Injectable } from '@angular/core';     // -- NgModule, Component,
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participante } from '../Modelos/Participante';
import { GLOBAL } from '../Servicios/Global';

import 'rxjs/add/operator/map';
import { HttpResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

// -- import { Http, Headers, RequestOptions } from '@angular/http';
// import { HttpModule } from '@angular/http';                             // Victor Robles
// import { HttpClientModule } from '@angular/common/http';    // Victor Robles    // , HttpClient
// import { BrowserModule } from '@angular/platform-browser';
// -- import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// -- import { JsonpModule, Jsonp, Response } from '@angular/http';
// -- import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Injectable()
export class UsuariosServicio {
    _apiUrl: string;

    constructor(public http: HttpClient) {
        this._apiUrl = GLOBAL.url_ParticipantesXML;
    }

    getResultados(): Observable<any> {
        return this.http.get(this._apiUrl);
    }

    getUsuario(id: number): Observable<any> {
        return this.http.get(this._apiUrl + id);    // .map((res: any) => res.json());
    }

    getLastIdUsuario(): Observable<any> {
        return this.http.get(this._apiUrl + 'findByLastId/');
    }

    addUsuario(usuario: Participante): Observable<any> {
        const json = JSON.stringify(usuario);   // params = 'json=' + json;
        const params = json;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');  // 'application/x-www-form-urlencoded'

        return this.http.post(this._apiUrl, params, { headers: headers });
            // Antes: .map((res: any) => res.json());
    }

    edit(usuario: Participante): Observable<any> {
        const json = JSON.stringify(usuario);
        const params = json;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.put(this._apiUrl + usuario.id, params, { headers: headers });
    }

}


    /*
    getUsuarioByUsuario(usuario: string): Observable<any> {
        return this.http.get(this._apiUrl + usuario);
    }
    */

/*
        return this.http.post(this._apiUrl, params, {headers: headers})
        .map((res: any) => res.json());
        */

        /*
let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        */

/*
    private getHeaders() {
        const headers = new HttpHeaders();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST');

        return headers;
    }
*/
 /*

        const headers = new HttpHeaders(
                                { 'Content-Type': 'application/json' },
                                { 'Accept': 'application/json' },
                                { 'Access-Control-Allow-Methods': 'POST' }
                        );
 */

 /*
 private getHeaders(): HttpHeaders {
        const headers = new HttpHeaders();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Accept', 'application/json');
        // AHORA:
        headers.append('Content-Type', 'application/json');
        // headers.append('Content-Type', 'x-www-form-urlencoded');

        // headers.append('Access-Control-Allow-Origin', '*');

        return headers;
    }
    */


