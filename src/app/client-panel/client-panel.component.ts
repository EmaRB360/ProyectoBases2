import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClientPanelComponent implements OnInit {
  selectedOption: string = 'perfil';
  cliente: any;
  cursosInscritos: any[] = [];
  cursosDisponibles: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.cliente = this.dataService.getClientes()[0]; // Assuming the first client is the logged-in user
    this.cursosInscritos = this.dataService.getCursos(); // Fetching all courses for simplicity
    this.cursosDisponibles = this.dataService.getCursos(); // Fetching all available courses
  }

  inscribirseCurso(cursoId: number) {
    // Lógica para inscribirse a un curso
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  salirDelCurso(id_curso: number) {
    // Lógica para salir del curso
    console.log(`Saliendo del curso con ID: ${id_curso}`);
    // Aquí puedes agregar la lógica para eliminar el curso de la lista de cursos inscritos
  }
}
