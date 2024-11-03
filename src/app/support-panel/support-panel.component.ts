import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panel-soporte',
  templateUrl: './support-panel.component.html',
  styleUrls: ['./support-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SupportPanelComponent implements OnInit {
  selectedOption: string = 'gestion-clientes';
  clientes: any[] = [];
  bitacoras: any[] = [];
  empleados: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.clientes = this.dataService.getClientes();
    this.bitacoras = this.dataService.getBitacoras();
    this.empleados = this.dataService.getEmpleados();
  }

  editarCliente(id: number): void {
    // Lógica para editar cliente
    console.log(`Editar cliente con ID: ${id}`);
  }

  eliminarCliente(id: number): void {
    // Lógica para eliminar cliente
    console.log(`Eliminar cliente con ID: ${id}`);
  }

  editarInstructor(id: number): void {
    // Lógica para editar instructor
    console.log(`Editar instructor con ID: ${id}`);
  }

  eliminarInstructor(id: number): void {
    // Lógica para eliminar instructor
    console.log(`Eliminar instructor con ID: ${id}`);
  }

  respaldarDatos(): void {
    // Lógica para realizar respaldo de datos
    console.log('Realizando respaldo de datos...');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
