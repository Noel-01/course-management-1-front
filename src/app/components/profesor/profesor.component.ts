import { Component, OnInit } from '@angular/core';
import { profesor } from 'src/app/model/profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  public profesores: Array<profesor>

  constructor(private _profesorService: ProfesorService) { }

  ngOnInit() {

    this._profesorService.getProfesores().subscribe((result) => {
      this.profesores = result;
    });
    
  }



}
