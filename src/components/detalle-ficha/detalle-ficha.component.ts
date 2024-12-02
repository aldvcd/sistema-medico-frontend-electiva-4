import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-ficha',
  templateUrl: './detalle-ficha.component.html',
  styleUrls: ['./detalle-ficha.component.css']
})
export class DetalleFichaComponent implements OnInit {

  fichaId: number | null = null;
  ficha: any = {
    motivoConsulta: '',
    diagnostico: '',
    tratamiento: '',
    detallesConsulta: '',
    paciente: null,
    medico: null,
  };
  medicos: any[] = [];
  edicionHabilitada: boolean = false;
  private apiFichaUrl = 'http://localhost:4000/api/fichaMedica';
  private apiMedicosUrl = 'http://localhost:4000/api/medicos';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fichaId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.fichaId) {
      this.obtenerFicha();
    }
    this.obtenerMedicos();
  }

  obtenerFicha(): void {
    this.http.get<any>(`${this.apiFichaUrl}/${this.fichaId}`).subscribe({
      next: (data) => {
        this.ficha = data;
      },
      error: (error) => {
        console.error('Error al obtener la ficha médica:', error);
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

  habilitarEdicion(): void {
    console.log("SE HABILITA LA EDICIÓN")
    this.edicionHabilitada = true;
  }

  cancelarEdicion(): void {
    console.log("SE CANCELA LA EDICIÓN")
    this.obtenerFicha();
    this.edicionHabilitada = false;
  }

  actualizarFicha(): void {
    if (this.fichaId) {
      this.http.put(`${this.apiFichaUrl}/${this.fichaId}`, this.ficha).subscribe({
        next: () => {
          Swal.fire('Datos actualizados correctamente', '', 'success');
          this.edicionHabilitada = false;
          console.log("SE HA ACTUALIZADO EL REGISTRO")
        },
        error: (error) => {
          Swal.fire('No se pudieron actualizar los datos', '', 'error');
          console.error('Error al actualizar la ficha médica:', error);
        },
      });
    }
  }

  navigateToBack() {
    console.log("VOLVIENDO A LA PANTALLA ANTERIOR")
    this.router.navigate(['consulta-ficha']);
  }
}
