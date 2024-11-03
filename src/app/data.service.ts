import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private gimnasios = [
    { id_gimnasio: 1, nombre: 'Gimnasio Central', direccion: 'Av. Principal', horario: '6 AM - 10 PM', telefono: '12345678', correo: 'central@gimnasio.com' },
    { id_gimnasio: 2, nombre: 'Gimnasio Norte', direccion: 'Calle Norte', horario: '7 AM - 9 PM', telefono: '23456789', correo: 'norte@gimnasio.com' },
  ];

  private cursos = [
    { id_curso: 1, nombre: 'Yoga', descripcion: 'Clase de yoga para todos los niveles', horario: new Date(), disponibilidad: 10 },
    { id_curso: 2, nombre: 'Entrenamiento Personal', descripcion: 'Entrenamiento personalizado', horario: new Date(), disponibilidad: 5 },
  ];

  private clientes = [
    { id_usuario: 1, nombre: 'Juan', cedula: '123456789', apellido1: 'Pérez', apellido2: 'Gómez', direccion: 'Calle 123', e_mail: 'juan@example.com', contrasena: 'contraseña1', tel_cel: '987654321', tel_habitacion: '123456789', fecha_inscripcion: new Date() },
    { id_usuario: 2, nombre: 'María', cedula: '987654321', apellido1: 'López', apellido2: 'Martínez', direccion: 'Calle 456', e_mail: 'maria@example.com', contrasena: 'contraseña2', tel_cel: '987654322', tel_habitacion: '123456790', fecha_inscripcion: new Date() },
  ];

  private empleados = [
    {
      id_usuario: 1,
      nombre: 'Carlos',
      cedula: '456789123',
      apellido1: 'Torres',
      apellido2: 'Sánchez',
      direccion: 'Calle 789',
      e_mail: 'carlos@example.com',
      contrasena: 'contraseña1',
      tel_cel: '987654321',
      tel_habitacion: '123456789',
      fecha_contratacion: new Date()
    },
    {
      id_usuario: 2,
      nombre: 'Ana',
      cedula: '987654321',
      apellido1: 'Gómez',
      apellido2: 'Pérez',
      direccion: 'Calle 456',
      e_mail: 'ana@example.com',
      contrasena: 'contraseña2',
      tel_cel: '123456789',
      tel_habitacion: '987654321',
      fecha_contratacion: new Date()
    },
    {
      id_usuario: 3,
      nombre: 'Carlos',
      cedula: '456789123',
      apellido1: 'Torres',
      apellido2: 'Sánchez',
      direccion: 'Calle 789',
      e_mail: 'carlos@example.com',
      contrasena: 'contraseña3',
      tel_cel: '987654323',
      tel_habitacion: '123456791',
      fecha_contratacion: new Date()
    },
    {
      id_usuario: 4,
      nombre: 'María',
      cedula: '159753486',
      apellido1: 'López',
      apellido2: 'Martínez',
      direccion: 'Avenida 123',
      e_mail: 'maria@example.com',
      contrasena: 'contraseña4',
      tel_cel: '456789123',
      tel_habitacion: '321654987',
      fecha_contratacion: new Date()
    },
    {
      id_usuario: 5,
      nombre: 'Luis',
      cedula: '321654987',
      apellido1: 'Hernández',
      apellido2: 'Rodríguez',
      direccion: 'Calle 321',
      e_mail: 'luis@example.com',
      contrasena: 'contraseña5',
      tel_cel: '654321789',
      tel_habitacion: '789123456',
      fecha_contratacion: new Date()
    },
    {
      id_usuario: 6,
      nombre: 'Sofía',
      cedula: '753159486',
      apellido1: 'Ramírez',
      apellido2: 'Salazar',
      direccion: 'Calle 654',
      e_mail: 'sofia@example.com',
      contrasena: 'contraseña6',
      tel_cel: '789123654',
      tel_habitacion: '456789123',
      fecha_contratacion: new Date()
    }
  ];


  private maquinas = [
    { id_maquina: 1, nombre: 'Máquina de Correr', descripcion: 'Máquina para correr', estado: 'Operativa' },
    { id_maquina: 2, nombre: 'Máquina de Pesas', descripcion: 'Máquina para levantar pesas', estado: 'En Mantenimiento' },
  ];

  private rutinas = [
    { id_rutina: 1, tipo_rutina: 'Cardio', cliente: 1, instructor: 3, maquina: 1, fecha: new Date(), horas: 1 },
    { id_rutina: 2, tipo_rutina: 'Fuerza', cliente: 2, instructor: 3, maquina: 2, fecha: new Date(), horas: 1 },
  ];

  private historialCursos = [
    { id_historial: 1, nombre: 'Curso de Yoga', cliente: 1, instructor: 3, curso: 1, fecha: new Date(), hora: 10, id_gimnasio: 1 },
    { id_historial: 2, nombre: 'Entrenamiento Personal', cliente: 2, instructor: 3, curso: 2, fecha: new Date(), hora: 11, id_gimnasio: 2 },
  ];

  private pagos = [
    { id_pago: 1, descripcion: 'Pago de membresía', total: 100, fecha_inicio: new Date(), fecha_final: new Date(), estado: 'Pagado' },
    { id_pago: 2, descripcion: 'Pago de curso', total: 50, fecha_inicio: new Date(), fecha_final: new Date(), estado: 'Pendiente' },
  ];

  private matriculas = [
    { id_matricula: 1, descripcion: 'Matrícula de Yoga', id_pago: 1, id_usuario: 1, id_curso: 1 },
    { id_matricula: 2, descripcion: 'Matrícula de Entrenamiento', id_pago: 2, id_usuario: 2, id_curso: 2 },
  ];

  private bitacoras = [
    { id_bitacora: 1, id_usuario: 1, tabla_afectada: 'cliente', tipo_accion: 'INSERT', descripcion: 'Registro de Juan', fecha_hora: new Date() },
    { id_bitacora: 2, id_usuario: 2, tabla_afectada: 'curso', tipo_accion: 'UPDATE', descripcion: 'Actualización de curso', fecha_hora: new Date() },
  ];

  getGimnasios() {
    return this.gimnasios;
  }

  getCursos() {
    return this.cursos;
  }

  getClientes() {
    return this.clientes;
  }

  getEmpleados() {
    return this.empleados;
  }

  getMaquinas() {
    return this.maquinas;
  }

  getRutinas() {
    return this.rutinas;
  }

  getHistorialCursos() {
    return this.historialCursos;
  }

  getPagos() {
    return this.pagos;
  }

  getMatriculas() {
    return this.matriculas;
  }

  getBitacoras() {
    return this.bitacoras;
  }
}
