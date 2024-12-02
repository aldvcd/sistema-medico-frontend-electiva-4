import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  usuarioMedico:any;
  url:any =''
  ngOnInit(){
    this.usuarioMedico = localStorage.getItem('medicoUsuario');
  }
  constructor(private router: Router) {}
  opciones = [
    {id:1,nombre:"Consulta pacientes"},
    {id:2,nombre:"Consulta medicos"},
    {id:3,nombre:"Consulta ficha"}
  ]
  
  navigate(id: any) {
    switch (id) {
      case 1:
        this.router.navigate(['consulta-pacientes']);
        console.log("REDIRECCIONANDO A LA CONSULTA DE PACIENTES")
        break;
      case 2:
        this.router.navigate(['consulta-medico']);
        console.log("REDIRECCIONANDO A LA CONSULTA DE MEDICOS")
        break;
      case 3:
        this.router.navigate(['consulta-ficha']);
        console.log("REDIRECCIONANDO A LA CONSULTA DE FICHAS")
        break;
      default:
        console.log('Ruta no definida');
        return;
    }
  }
}