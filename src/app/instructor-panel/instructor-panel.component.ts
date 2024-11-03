import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instructor-panel',
  templateUrl: './instructor-panel.component.html',
  styleUrls: ['./instructor-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InstructorPanelComponent {
  selectedOption: string = 'cursosAsignados';
  cursos: any[] = [];
  clientes: any[] = [];
  historialCursos: any[] = [];
  rutinas: any[] = [];
  maquinas: any[] = [];
  instructores: any[] = [];
  instructor: any;
  clientesPorCurso: { [cursoId: number]: any[] } = {};
  nuevoCurso: any = {
    nombre: '',
    descripcion: '',
    horario: '',
    disponibilidad: true // Suponiendo que los cursos son inicialmente disponibles
  };
  nuevoCliente: any = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    cedula: '',
    e_mail: '',
    tel_cel: ''
  };
  nuevaRutina: any = {};

  constructor(private router: Router, private dataService: DataService) {
    this.cursos = this.dataService.getCursos();
    this.clientes = this.dataService.getClientes();
    this.historialCursos = this.dataService.getHistorialCursos();
    this.rutinas = this.dataService.getRutinas();
    this.maquinas = this.dataService.getMaquinas();
    this.instructores = this.dataService.getEmpleados();
    this.agruparClientesPorCurso();
    this.instructor = this.dataService.getEmpleados()[0];
  }

  // Método para crear un nuevo curso
  crearCurso(): void {
    //this.dataService.crearCurso(this.nuevoCurso);
    this.nuevoCurso = { nombre: '', descripcion: '', horario: '', disponibilidad: true }; // Reiniciar formulario
  }

  // Método para editar un curso
  editarCurso(curso: any): void {
    // Lógica para editar curso (puedes implementar un modal para editar)
  }

  // Método para eliminar un curso
  eliminarCurso(idCurso: number): void {
    //this.dataService.eliminarCurso(idCurso);
  }

  // Método para agregar un nuevo cliente
  agregarCliente(): void {
    //this.dataService.agregarCliente(this.nuevoCliente);
    this.nuevoCliente = { nombre: '', apellido1: '', apellido2: '', cedula: '', e_mail: '', tel_cel: '' }; // Reiniciar formulario
  }

  // Método para obtener el nombre del cliente a partir del ID
  getClienteNombre(clienteId: number): string {
    const cliente = this.clientes.find(c => c.id_usuario === clienteId);
    return cliente ? `${cliente.nombre} ${cliente.apellido1} ${cliente.apellido2}` : 'Desconocido';
  }

  crearRutina() {
    /*this.dataService.crearRutina(this.nuevaRutina).subscribe(rutina => {
      this.rutinas.push(rutina);
      this.nuevaRutina = {}; // Reiniciar el formulario
    });*/
  }

  editarRutina(rutina: any) {
    // Implementar lógica para editar una rutina
  }

  eliminarRutina(id: number) {
    /*this.dataService.eliminarRutina(id).subscribe(() => {
      this.rutinas = this.rutinas.filter(r => r.id_rutina !== id);
    });*/
  }

  // Método para obtener el nombre de un instructor por su ID
  getInstructorNombre(instructorId: number): string {
    const instructor = this.instructores.find(i => i.id_instructor === instructorId);
    return instructor ? instructor.nombre : 'Desconocido';
  }

  // Método para obtener el nombre de una máquina por su ID
  getMaquinaNombre(maquinaId: number): string {
    const maquina = this.maquinas.find(m => m.id_maquina === maquinaId);
    return maquina ? maquina.nombre : 'Desconocido';
  }

  agruparClientesPorCurso(): void {
    this.clientesPorCurso = {}; // Reiniciar el objeto

    this.historialCursos.forEach(historial => {
      if (!this.clientesPorCurso[historial.curso]) {
        this.clientesPorCurso[historial.curso] = [];
      }
      const cliente = this.clientes.find(c => c.id_usuario === historial.cliente);
      if (cliente) {
        this.clientesPorCurso[historial.curso].push(cliente);
      }
    });
  }

  // Método para editar un cliente
  editarCliente(cliente: any): void {
    // Aquí puedes implementar la lógica para editar un cliente
    // Por ejemplo, abrir un modal con el formulario de edición
    console.log('Editar cliente:', cliente);
  }

// Método para eliminar un cliente
  eliminarCliente(idUsuario: number): void {
    // Implementa la lógica para eliminar un cliente
    // Esto puede incluir una confirmación antes de eliminar
    console.log('Eliminar cliente con ID:', idUsuario);
    this.clientes = this.clientes.filter(cliente => cliente.id_usuario !== idUsuario);
    this.agruparClientesPorCurso(); // Reagrupamos los clientes por curso después de eliminar
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
