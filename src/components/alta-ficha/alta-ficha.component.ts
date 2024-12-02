import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-ficha',
  templateUrl: './alta-ficha.component.html',
  styleUrls: ['./alta-ficha.component.css'],
})
export class AltaFichaComponent implements OnInit {
  ficha: any = {
    motivoConsulta: '',
    diagnostico: '',
    tratamiento: '',
    detallesConsulta: '',
    pacienteId: null,
    medicoId: null,
  };
  pacientes: any[] = [];
  medicos: any[] = [];
  filtro: string = '';
  mostrarPopup: boolean = false;
  pacienteSeleccionado: any = null;

  private apiFichaUrl = 'http://localhost:4000/api/fichaMedica';
  private apiPacientesUrl = 'http://localhost:4000/api/pacientes';
  private apiMedicosUrl = 'http://localhost:4000/api/medicos';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obtenerPacientes();
    this.obtenerMedicos();
  }

  obtenerPacientes(): void {
    this.http.get<any[]>(this.apiPacientesUrl).subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (error) => {
        console.error('Error al obtener la lista de pacientes:', error);
      },
    });
  }

  obtenerMedicos(): void {
    this.http.get<any[]>(this.apiMedicosUrl).subscribe({
      next: (data) => {
        this.medicos = data;
      },
      error: (error) => {
        console.error('Error al obtener la lista de médicos:', error);
      },
    });
  }

  abrirModal(): void {
    console.log("Se abre el model pacientes")
    this.mostrarPopup = true;
  }

  cerrarModal(): void {
    console.log("Se cierra el model pacientes")
    this.mostrarPopup = false;
  }

  pacientesFiltrados(): any[] {
    return this.pacientes.filter((p) =>
      `${p.nombre} ${p.apellido}`.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  seleccionarPaciente(paciente: any): void {
    console.log("Se selecciona el pacientes")
    this.pacienteSeleccionado = paciente;
    this.ficha.pacienteId = paciente.id;
    this.cerrarModal();
  }

  crearFicha(): void {
    this.http.post(this.apiFichaUrl, this.ficha).subscribe({
      next: () => {
        Swal.fire('Ficha creada correctamente', '', 'success').then(() => {
          this.router.navigate(['/consulta-ficha']);
        });
        console.log("FICHA CREADA")
      },
      error: (error) => {
        Swal.fire('No se pudo crear la ficha', '', 'error');
        console.error('Error al crear la ficha médica:', error);
      },
    });
  }
}
