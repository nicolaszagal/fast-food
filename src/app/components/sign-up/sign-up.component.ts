import {Component} from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    email: string = '';
    password: string = '';
    confirm_password: string = '';
    userType: boolean = false;
    signUpError: boolean = false;
    passwordMismatch: boolean = false;
    formValid: boolean = true;

    constructor(private authService: UserService) {}

    signup(): void {
        if (this.password !== this.confirm_password) {
            this.passwordMismatch = true;
            this.formValid = false;
        } else {
            this.passwordMismatch = false;
            this.authService.signup(this.email, this.userType).subscribe(
                (user: any) => {
                    if (user) {
                        // Autenticación exitosa, puedes redirigir al usuario a la página principal
                        console.log('Se ha añadido el usuario correctamente');
                    } else {
                        // Autenticación fallida, muestra un mensaje de error
                        this.signUpError = true;
                        console.log('El usuario ya existe');
                    }
                },
                (error) => {
                    console.error('Error de inicio de sesión', error);
                }
            );
        }
    }
}


