import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { ConsultaPacientesComponent } from 'src/components/consulta-pacientes/consulta-pacientes.component';
import { ConsultaMedicosComponent } from 'src/components/consulta-medicos/consulta-medicos.component';
import { ConsultaFichasMedicasComponent } from 'src/components/consulta-fichas-medicas/consulta-fichas-medicas.component';
import { DetalleFichaComponent } from 'src/components/detalle-ficha/detalle-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ConsultaPacientesComponent,
    ConsultaMedicosComponent,
    ConsultaFichasMedicasComponent,
    DetalleFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
