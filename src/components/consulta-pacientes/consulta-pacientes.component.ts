import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-consulta-pacientes',
  templateUrl: './consulta-pacientes.component.html',
  styleUrls: ['./consulta-pacientes.component.css']
})
export class ConsultaPacientesComponent {

  pacientes: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }
  altaPaciente = {
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    telefono: '',
    fechaNacimiento: ''
  };

  obtenerPacientes(): void {
    this.http.get<any[]>('http://localhost:4000/api/pacientes').subscribe({
      next: (data) => {
        this.pacientes = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al obtener los pacientes:', error);
        this.errorMessage = 'No se pudo cargar la lista de pacientes.';
        this.isLoading = false;
      }
    });
  }
  crearPaciente(): void {
    this.http.post('http://localhost:4000/api/pacientes', this.altaPaciente).subscribe({
      next: (response) => {
        Swal.fire('Paciente creado', 'El paciente se creó correctamente.', 'success');
        this.obtenerPacientes();
        this.limpiarFormulario();
        console.log("SE HA CREADO EL PACIENTE")
      },
      error: (error) => {
        Swal.fire('Error', 'No se pudo crear el paciente.', 'error');
        console.error('Error al crear el paciente:', error);
      }
    });
  }
  limpiarFormulario(): void {
    this.altaPaciente = {
      nombre: '',
      apellido: '',
      cedula: '',
      email: '',
      telefono: '',
      fechaNacimiento: ''
    };
  }
  navigateToBack() {
  
    console.log("VOLVIENDO AL DASHBOARD")
    this.router.navigate(['dashboard']);
  }
}
