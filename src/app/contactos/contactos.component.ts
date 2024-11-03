import { Component } from '@angular/core';
import { DataService } from '../data.service';
import {CommonModule} from '@angular/common';

interface Gimnasio {
  id_gimnasio: number;
  nombre: string;
  direccion: string;
  horario: string;
  telefono: string;
  correo: string;
}

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ContactosComponent {
  gimnasios: Gimnasio[] = [];

  constructor(private dataService: DataService) {
    this.gimnasios = this.dataService.getGimnasios();
  }
}
