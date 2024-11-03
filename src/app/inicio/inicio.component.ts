import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

interface Gimnasio {
  id_gimnasio: number;
  nombre: string;
  direccion: string;
  horario: string;
  telefono: string;
  correo: string;
}

interface Curso {
  id_curso: number;
  nombre: string;
  descripcion: string;
  horario: Date;
  disponibilidad: number;
}

interface Empleado {
  id_usuario: number;
  nombre: string;
  cedula: string;
  apellido1: string;
  apellido2: string;
  direccion: string;
  e_mail: string;
  contrasena: string;
  tel_cel: string;
  tel_habitacion: string;
  fecha_contratacion: Date;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InicioComponent {
  gimnasios: Gimnasio[] = [];
  cursos: Curso[] = [];
  empleados: Empleado[] = [];
  selectedOption: string = 'gimnasios';

  constructor(private dataService: DataService) {
    this.gimnasios = this.dataService.getGimnasios();
    this.cursos = this.dataService.getCursos();
    this.empleados = this.dataService.getEmpleados();
  }
}
