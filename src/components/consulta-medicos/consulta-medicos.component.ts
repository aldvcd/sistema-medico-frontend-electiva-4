import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-medicos',
  templateUrl: './consulta-medicos.component.html',
  styleUrls: ['./consulta-medicos.component.css']
})
export class ConsultaMedicosComponent {

  medicos: any[] = [];
  medicoSeleccionado: any = null;
  nuevoMedico = {
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    especialidad: '',
    usuario: '',
    password: '',
  };

  private apiUrl = 'http://localhost:4000/api/medicos';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.obtenerMedicos();
  }

  obtenerMedicos(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.medicos = data;
      },
      error: (error) => {
        console.error('Error al obtener los médicos:', error);
      },
    });
  }

  obtenerMedicoPorId(id: number): void {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.medicoSeleccionado = data;
        Swal.fire(
          'Médico encontrado',
          `Nombre: ${data.nombre} ${data.apellido}`,
          'info'
        );
      },
      error: (error) => {
        console.error('Error al obtener el médico:', error);
        Swal.fire('Error', 'No se pudo encontrar el médico.', 'error');
      },
    });
  }

  crearMedico(): void {
    this.http.post<any>(this.apiUrl, this.nuevoMedico).subscribe({
      next: () => {
        Swal.fire('Éxito', 'El médico fue creado correctamente.', 'success');
        this.obtenerMedicos();
        this.limpiarFormulario();
        console.log("SE HA CREADO EL PACIENTE CON EXITO")
      },
      error: (error) => {
        console.error('Error al crear el médico:', error);
        Swal.fire('Error', 'No se pudo crear el médico.', 'error');
      },
    });
  }

  limpiarFormulario(): void {
    this.nuevoMedico = {
      nombre: '',
      apellido: '',
      cedula: '',
      email: '',
      telefono: '',
      fechaNacimiento: '',
      especialidad: '',
      usuario: '',
      password: '',
    };
  }
  navigateToBack() {
  
      console.log("VOLVIENDO AL DASHBOARD")
      this.router.navigate(['dashboard']);
  }
}
