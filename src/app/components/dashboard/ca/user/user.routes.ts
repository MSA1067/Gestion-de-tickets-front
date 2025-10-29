import {Routes} from '@angular/router';
import {ProfileUserComponent} from './profile-user/profile-user.component';
import { RequestsComponent } from './requests/requests.component';

export const routes: Routes = [
  {path: 'profile' , component: ProfileUserComponent},
  {path: 'requests' , component: RequestsComponent},
  {path: '' , redirectTo: 'dashboard', pathMatch: 'full' },
]
