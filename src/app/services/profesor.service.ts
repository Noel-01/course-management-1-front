import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profesor } from '../model/profesor';

@Injectable({
    providedIn: 'root'
})

export class ProfesorService {

    public url = "http://localhost:8080/rest/teacher";

    constructor(private httpClient: HttpClient) { }

    public getProfesores(){
        console.log("llegasadfasfdadfadfafasdfasfasdfasdfsad");
        return this.httpClient.get<profesor[]>(this.url + '/getAll');
    }
}

