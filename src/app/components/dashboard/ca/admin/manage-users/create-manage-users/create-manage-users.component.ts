import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PrimeNgModule} from '../../../../../../shared/module/primeNg/prime-ng.module';
import {Router} from '@angular/router';
import {Select} from 'primeng/select';
import {UsersService} from '../../../../../../service/users/users.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-create-manage-users',
  standalone: true,
  imports: [
    PrimeNgModule,
    Select
  ],
  providers: [MessageService],
  templateUrl: './create-manage-users.component.html',
  styleUrl: './create-manage-users.component.css'
})
export class CreateManageUsersComponent implements OnInit{

  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  constructor(private readonly userService: UsersService,
              private messageService: MessageService) {
  }

  form = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: null
  };

  roles = [
    { name: 'Administrador', value: 'ADMIN' },
    { name: 'Usuario', value: 'USER' },
    { name: 'Soporte', value: 'SUPPORT' }
  ];


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  toCancel(): void {
    this.close.emit();
  }

  save(): void {

    if (this.form.password !== this.form.confirmPassword) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Contraseñas no coinciden',
        detail: 'Verifica que ambas contraseñas sean iguales'
      });
      return;
    }

    const body = {
      username: this.form.username,
      password: this.form.password,
      email: this.form.email,
      name: this.form.fullName,
      role: this.form.role
    };

    this.userService.createUser(body).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Usuario creado',
          detail: `El usuario ${this.form.username} fue creado correctamente`
        });
        this.saved.emit();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al crear usuario',
          detail: err?.error?.message ?? 'No se pudo completar el registro'
        });
      }
    });
  }

}
