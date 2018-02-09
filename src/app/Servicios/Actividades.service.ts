import { Injectable } from '@angular/core';     // -- NgModule, Component,
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actividad } from '../Modelos/Actividad';
import { GLOBAL } from '../Servicios/Global';

@Injectable()
export class ActividadesServicio {
    _apiUrl: string;

    constructor(public http: HttpClient) {
        this._apiUrl = GLOBAL.url_ActividadesXML;
    }

    getResultados(): Observable<any> {           // getResultados(idGrupo: number)
        return this.http.get(this._apiUrl);        // + 'id=' + idGrupo);
    }

    getActividad(id: number): Observable<any> {
        return this.http.get(this._apiUrl + id);
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
