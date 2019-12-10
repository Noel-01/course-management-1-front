import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { curso } from '../model/curso';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})

export class CursoService {

    public url = "http://localhost:8080/rest/course";

    constructor(private _http: Http) { }

    httpOptions = {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };

    getCursos() {
        console.log("llega");
        return this._http.get(this.url + '/activeCourses').map(res => res.json())
    }

    createCurso(curso: curso) {
        console.log("createeee")
        console.log(curso)
        return this._http.post(this.url + '/create', JSON.stringify(curso), this.httpOptions)
    }
}