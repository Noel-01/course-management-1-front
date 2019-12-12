import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from 'src/app/services/curso.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from 'src/app/model/Profesor';
import { ModalService } from 'src/app/services/modal.service';
import { Pageable } from 'src/app/model/pageable';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})


export class CursoComponent implements OnInit {

  public cursos: Array<Curso>
  public profesores: Array<Profesor>
  public cursoNuevo: Curso
  public levels: Array<string>
  public hoursLoop: any
  public page: Pageable;
  public pageNumber: number = 0;
  public totalPaginas: number;

  constructor(
    private cursoService: CursoService,
    private profesorService: ProfesorService,
    private modalService: ModalService
  ) {
    this.cursoNuevo = new Curso();
    this.cursoNuevo.state = false;
    this.levels = ['Basico', 'Intermedio', 'Experto']
  }

  ngOnInit() {
    this.mostrarCursos("")
  }

  closeModal() {
    this.modalService.close('test-modal');
  }

  mostrarCursos(event: string) {

    if (event == "previous") {
      this.pageNumber = this.pageNumber - 1;
    } else if (event == "next") {
      this.pageNumber = this.pageNumber + 1;
    }

    this.cursoService.getCursos(this.pageNumber).subscribe((result) => {
      this.page = result;
      this.cursos = this.page.list;
      this.totalPaginas = this.page.totalPaginas;
    },
      error => {
      });
  }

  getDatosModal() {
    this.getProfesores();
    this.getHoras()
    this.cursoNuevo = new Curso();
  }

  getProfesores() {
    this.modalService.open('test-modal');
    this.profesorService.getProfesores().subscribe((result) => {
      this.profesores = result;
    },
      error => {
      });
  }

  guardarCurso() {
    this.cursoService.createCurso(this.cursoNuevo).subscribe((result) => {
    },
      error => {
      });
    this.mostrarCursos("")
    this.closeModal()
    window.location.reload()
  }

  getHoras() {
    this.hoursLoop = new Array();
    for (let i = 0; i < 250; i++) {
      this.hoursLoop.push(i);
    }
  }
}
