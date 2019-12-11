import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../model/Profesor';

@Injectable({
    providedIn: 'root'
})

export class ProfesorService {

    public url = "http://localhost:8080/rest/teacher";

    constructor(private httpClient: HttpClient) { }

    public getProfesores(){
        return this.httpClient.get<Profesor[]>(this.url + '/getAll');
    }
}

