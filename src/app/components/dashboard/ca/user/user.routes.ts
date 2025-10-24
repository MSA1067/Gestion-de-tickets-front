import {Routes} from '@angular/router';
import {DashboardUserComponent} from './dashboard-user/dashboard-user.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';
import {TicketsUserComponent} from './tickets-user/tickets-user.component';

export const routes: Routes = [
  {path: 'dashboard' , component: DashboardUserComponent},
  {path: 'profile' , component: ProfileUserComponent},
  {path: 'tickets' , component: TicketsUserComponent},
  {path: '' , redirectTo: 'dashboard', pathMatch: 'full' },
]
