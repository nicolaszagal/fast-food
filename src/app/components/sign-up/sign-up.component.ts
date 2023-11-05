import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string;
  userType: string;
  registrationError: boolean = false;

  onSubmit() {
    if (this.password === this.confirmPassword) {
      // Las contraseñas coinciden, puedes realizar la lógica de registro aquí.
      console.log('Registro exitoso');
    } else {
      // Las contraseñas no coinciden, muestra un mensaje de error.
      this.registrationError = true;
    }
  }
}
