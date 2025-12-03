import { Component } from '@angular/core';
import {PrimeNgModule} from '../../../../../shared/module/primeNg/prime-ng.module';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent {
  categorias = [
    { label: 'Soporte Técnico', value: 1 },
    { label: 'Accesos', value: 2 },
    { label: 'Mantenimiento', value: 3 }
  ];

  prioridades = [
    { label: 'Baja', value: 'low' },
    { label: 'Media', value: 'medium' },
    { label: 'Alta', value: 'high' }
  ];


}
