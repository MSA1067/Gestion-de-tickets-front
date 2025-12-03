import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {FloatLabel} from 'primeng/floatlabel';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {ReactiveFormsModule} from '@angular/forms';
import {Select} from 'primeng/select';
import {Toast} from 'primeng/toast';
import {UsersService} from '../../../../../../service/users/users.service';
import {MessageService} from 'primeng/api';
import {PrimeNgModule} from '../../../../../../shared/module/primeNg/prime-ng.module';
import {UserPaginationDatum} from '../../../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-edit-manage-users',
  standalone: true,
  imports: [
    PrimeNgModule,
    Select
  ],
  providers:[MessageService],
  templateUrl: './edit-manage-users.component.html',
  styleUrl: './edit-manage-users.component.css'
})
export class EditManageUsersComponent implements OnInit, OnChanges {

  constructor(private readonly messageService: MessageService) {
  }


  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();
  @Input() userToEdit: any;

  form = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  };

  ngOnInit(): void {
    console.log("🟩 ngOnInit → userToEdit:", this.userToEdit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userToEdit'] && this.userToEdit) {

      console.log("🟨 ngOnChanges → userToEdit:", this.userToEdit);

      // Cargar datos en el formulario
      this.form.fullName = this.userToEdit.name;
      this.form.username = this.userToEdit.username;
      this.form.email = this.userToEdit.email;
      this.form.role = this.userToEdit.role;

      console.log("🟨 Form cargado:", this.form);
    }
  }




  roles = [
    { name: 'Administrador', value: 'ADMIN' },
    { name: 'Usuario', value: 'USER' },
    { name: 'Soporte', value: 'SUPPORT' }
  ];






  toCancel(): void {
    this.close.emit();
  }

  updateUser() {
    this.messageService.add({
      severity: 'success',
      summary: 'Usuario actualizado'
    });

    this.saved.emit();
  }

}
