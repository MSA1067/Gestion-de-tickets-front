import { Component } from '@angular/core';
import {PrimeNgModule} from '../../../shared/module/primeNg/prime-ng.module';
import {NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AutoFocus} from 'primeng/autofocus';
import {LoginService} from '../../../service/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimeNgModule, AutoFocus],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isForgotPassword = false;
  username = '';
  password = '';

  constructor(
    private router: Router,
    private message: MessageService,
    private auth : LoginService
  ) {}

  toggleForgotPassword() {
    this.isForgotPassword = !this.isForgotPassword;
  }

  onLogin() {

    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.auth.loadUser().subscribe((user: any) => {

          const role = user?.role;
          console.log(role)

          this.auth.setRole(role);

          this.messageSuccess();

          setTimeout(() => {
            if (role === 'ROLE_ADMIN') this.router.navigate(['/ca-admin']);
            else if (role === 'ROLE_SUPPORT') this.router.navigate(['/ca-support']);
            else if (role === 'ROLE_USER') this.router.navigate(['/ca-user']);
          }, 700);

        });
      },

      error: () => {
        this.message.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Credenciales incorrectas'
        });
      }
    })
  }


  messageSuccess() {
    this.message.add({
      severity: 'success',
      summary: 'Inicio de sesión exitoso',
      detail: 'Usuario logueado correctamente'
    });
  }


  onRecover() {
    this.message.add({
      severity: 'info',
      summary: 'Correo enviado',
      detail: 'Revisa tu bandeja para restablecer la contraseña'
    });
  }

}
