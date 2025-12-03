import {TicketsSupportComponent} from './tickets-support/tickets-support.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'tickets' , component: TicketsSupportComponent},
  {path: '' , redirectTo: 'tickets', pathMatch: 'full' },
]
