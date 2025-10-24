import {DashboardSupportComponent} from './dashboard-support/dashboard-support.component';
import {ProfileSupportComponent} from './profile-support/profile-support.component';
import {TicketsSupportComponent} from './tickets-support/tickets-support.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'dashboard' , component: DashboardSupportComponent},
  {path: 'profile' , component: ProfileSupportComponent},
  {path: 'tickets' , component: TicketsSupportComponent},
  {path: '' , redirectTo: 'dashboard', pathMatch: 'full' },
]
