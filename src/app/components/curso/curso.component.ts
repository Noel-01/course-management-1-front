import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/services/curso.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { profesor } from 'src/app/model/profesor';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})


export class CursoComponent implements OnInit {

  public cursos: Array<curso>
  public profesores: Array<profesor>
  public cursoNuevo : curso
  public levels: Array<string>
  public pr: string
  public hoursLoop: any

  constructor(
    private _cursoService: CursoService,
    private _profesorService: ProfesorService
    ) {
    this.cursoNuevo = new curso();
    this.cursoNuevo.state=false;
    this.levels = ['Basico', 'Intermedio', 'Experto']
   }

  ngOnInit() {
    this.mostrarCursos()
    this.getProfesores()
    this.getHoras()
  }

  mostrarCursos(){
    this._cursoService.getCursos().subscribe((result) => {
      this.cursos = result;
      console.log(this.cursos)
    },
    error => {
      console.log("Error")
      console.log(error)
    });
  }

  getProfesores(){
    this._profesorService.getProfesores().subscribe((result)=>{
      this.profesores = result;
      console.log(this.profesores)
    },
    error => {
      console.log("Error")
      console.log(error)
    });
  }

  //pasarle por aqui el curso nuevo que voy a guardar
  guardarCurso(){
    console.log("llega a guardar curso")
    console.log(this.cursoNuevo.state)
    console.log(this.cursoNuevo.title)
    console.log(this.cursoNuevo.level)
    this._cursoService.createCurso(this.cursoNuevo).subscribe((result)=>{
      console.log("curso guardado")
   //   this.closeModal();
    },
    error => {
      console.log("Error")
      console.log(error)
   //   this.closeModal();
    });
    


  }

  closeModal() {
    console.log("llega a closeModal")
    this.mostrarCursos();
  }

  getHoras(){
    this.hoursLoop = new Array(); 
    for(let i = 0; i<250; i++){
      this.hoursLoop.push(i); 
    }
    console.log(this.hoursLoop)
  }
}
