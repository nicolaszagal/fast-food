import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: UserService) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (user: any) => {
        if (user) {
          // Autenticación exitosa, puedes redirigir al usuario a la página principal
          console.log('Inicio de sesión exitoso');
        } else {
          // Autenticación fallida, muestra un mensaje de error
          this.loginError = true;
          console.log('Credenciales incorrectas');
        }
      },
      (error) => {
        // Manejo de errores, si es necesario
        console.error('Error de inicio de sesión', error);
      }
    );
  }
}
