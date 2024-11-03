import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

interface Curso {
  id_curso: number;
  nombre: string;
  descripcion: string;
  horario: Date;
  disponibilidad: number;
}

interface Maquina {
  id_maquina: number;
  nombre: string;
  descripcion: string;
  estado: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ServiciosComponent {
  cursos: Curso[] = [];
  maquinas: Maquina[] = [];
  selectedOption: string = 'maquinas';

  constructor(private dataService: DataService) {
    this.cursos = this.dataService.getCursos();
    this.maquinas = this.dataService.getMaquinas();
  }

  inscribirUsuario(formValue: any) {
    const { nombre, curso, horario } = formValue;
    const empleadoExistente = this.dataService.getEmpleados().find(empleado => empleado.nombre === nombre);
    const cursoSeleccionado = this.cursos.find(c => c.id_curso === curso);

    if (empleadoExistente) {
      console.log('El empleado ya está registrado.');
      return;
    }

    if (!cursoSeleccionado || cursoSeleccionado.disponibilidad <= 0) {
      console.log('El curso no está disponible en el horario seleccionado.');
      return;
    }

    console.log(`Empleado ${nombre} inscrito en el curso ${cursoSeleccionado.nombre}`);
  }
}
