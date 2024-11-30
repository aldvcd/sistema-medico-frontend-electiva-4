import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaFichasMedicasComponent } from 'src/components/consulta-fichas-medicas/consulta-fichas-medicas.component';
import { ConsultaMedicosComponent } from 'src/components/consulta-medicos/consulta-medicos.component';
import { ConsultaPacientesComponent } from 'src/components/consulta-pacientes/consulta-pacientes.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { DetalleFichaComponent } from 'src/components/detalle-ficha/detalle-ficha.component';
import { LoginComponent } from 'src/components/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'consulta-pacientes',component:ConsultaPacientesComponent},
  {path:'consulta-medico',component:ConsultaMedicosComponent},
  {path:'consulta-ficha',component:ConsultaFichasMedicasComponent},
  {path: 'ficha-detalle/:id', component: DetalleFichaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
