import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-fichas-medicas',
  templateUrl: './consulta-fichas-medicas.component.html',
  styleUrls: ['./consulta-fichas-medicas.component.css']
})
export class ConsultaFichasMedicasComponent {
  fichas: any[] = [];
  medicos: any[] = [];
  pacientes: any[] = [];
  filtros = {
    texto: '',
    especialidad: '',
    medicoId: null,
    pacienteId: null,
    fechaInicio: '',
    fechaFin: '',
  };

  private apiHistorialUrl = 'http://localhost:4000/api/historial';
  private apiMedicosUrl = 'http://localhost:4000/api/medicos';
  private apiPacientesUrl = 'http://localhost:4000/api/pacientes';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.obtenerFichas();
    this.obtenerMedicos();
    this.obtenerPacientes();
  }
  obtenerFichas(): void {
    let params = new HttpParams();
    if (this.filtros.texto) params = params.append('texto', this.filtros.texto);
    if (this.filtros.especialidad)
      params = params.append('especialidad', this.filtros.especialidad);
    if (this.filtros.medicoId)
      params = params.append('medicoId', this.filtros.medicoId);
    if (this.filtros.pacienteId)
      params = params.append('pacienteId', this.filtros.pacienteId);
    if (this.filtros.fechaInicio)
      params = params.append('fechaInicio', this.filtros.fechaInicio);
    if (this.filtros.fechaFin)
      params = params.append('fechaFin', this.filtros.fechaFin);

    this.http.get<any[]>(this.apiHistorialUrl, { params }).subscribe({
      next: (data) => {
        this.fichas = data;
        console.log("SE OBTIENEN LA CONSULTA CON FILTROS")
      },
      error: (error) => {
        console.error('Error al obtener las fichas médicas:', error);
      },
    });
  }
  obtenerMedicos(): void {
    this.http.get<any[]>(this.apiMedicosUrl).subscribe({
      next: (data) => {
        this.medicos = data;
      },
      error: (error) => {
        console.error('Error al obtener los médicos:', error);
      },
    });
  }
  obtenerPacientes(): void {
    this.http.get<any[]>(this.apiPacientesUrl).subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (error) => {
        console.error('Error al obtener los pacientes:', error);
      },
    });
  }
  limpiarFiltros(): void {
    console.log("SE LIMPIAN FILTROS")
    this.filtros = {
      texto: '',
      especialidad: '',
      medicoId: null,
      pacienteId: null,
      fechaInicio: '',
      fechaFin: '',
    };
    this.obtenerFichas();
  }

  navigateTo(id: any) {
    console.log("REDIRECCIONANDO AL DETALLE DEL CLIENTE")
    this.router.navigate(['/ficha-detalle', id]);
  
  }
  createNewFicha() {
    console.log("REDIRECCIONANDO A LA CRACIÓN DE PACIENTES")
    this.router.navigate(['crear-ficha']);
  }
  navigateToBack() {
    console.log("VOLVIENDO AL DASHBOARD")
    this.router.navigate(['dashboard']);
  }
}
