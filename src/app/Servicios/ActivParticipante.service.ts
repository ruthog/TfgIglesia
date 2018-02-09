import { Injectable } from '@angular/core';     // -- NgModule, Component,
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivParticipante } from '../Modelos/ActivParticipante';
import { GLOBAL } from '../Servicios/Global';

import 'rxjs/add/operator/map';
import { HttpResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class ActivParticipanteServicio {
    _apiUrl: string;

    constructor(public http: HttpClient) {
        this._apiUrl = GLOBAL.url_ActivParticipantesXML;
    }

    getResultados(): Observable<any> {
        return this.http.get(this._apiUrl);
    }

    getActivParticipante(id: number): Observable<any> {
        return this.http.get(this._apiUrl + id);
    }

    getLastIdActivParticipante(): Observable<any> {
        return this.http.get(this._apiUrl + 'findByLastId/');
    }

    addActivParticipante(activParticipante: ActivParticipante): Observable<any> {
        const json = JSON.stringify(activParticipante);
        const params = json;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this._apiUrl, params, { headers: headers });
    }

    deleteActivParticipante(id: number): Observable<any> {
        return this.http.delete(this._apiUrl + id);
    }

}



// const headers = new HttpHeaders().set('Access-Control-Allow-Headers', 'origin, x-requested-with, Accept, Authorization');
        // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        // headers.append('Origin', 'http://localhost:4200');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Access-Control-Max-Age', '3600');
        // , { headers: headers }
