import { Component } from '@angular/core';
import {PrimeNgModule} from '../../../shared/module/primeNg/prime-ng.module';
import {NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AutoFocus} from 'primeng/autofocus';

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

  constructor(private router: Router, private message: MessageService) {}

  toggleForgotPassword() {
    this.isForgotPassword = !this.isForgotPassword;
  }

  onLogin() {
    this.messageSuccess()

    setTimeout(() => {
      this.router.navigate(['/ca-admin'], {
        state:
        {
          role: 'Admin'
        }
      });
    }, 1000);
  }

  onLoginSupport() {
    this.messageSuccess()

    setTimeout(() => {
      this.router.navigate(['/ca-support'], {
        state:
        {
          role: 'Soporte'
        }
      });
    }, 1000);
  }

  onLoginUser() {
    this.messageSuccess()

    setTimeout(() => {
      this.router.navigate(['/ca-user'], {
        state:
        {
          role: 'Usuario'
        }
      });
    }, 1000);
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
