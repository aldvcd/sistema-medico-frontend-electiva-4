import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario:any;
  password:any;
  isLoggedIn: boolean=false;

  constructor(private router: Router,
    private http: HttpClient
    ) {}


  async iniciarSesion() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      }),
    };
    const data ={
      usuario:this.usuario,
      password:this.password
    }

    try {
      console.log(data.usuario)
      console.log(data.password)
      const response = await this.http.post<any>('http://localhost:4000/api/medicos/login', data,httpOptions).toPromise();
      if (response.success) {
        localStorage.setItem('medicoId', response.medicoId.toString());
        localStorage.setItem('medicoUsuario', response.medicoUsuario.toString());
        this.isLoggedIn = true;
        if (this.isLoggedIn) {
          this.router.navigate(['/dashboard']);
        }
      } else {
        console.log(response);
        Swal.fire(response.error, '', 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Inicio de sesión fallido', '', 'error');
    }
  }

}
