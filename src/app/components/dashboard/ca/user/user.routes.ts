import {Routes} from '@angular/router';
import { RequestsComponent } from './requests/requests.component';

export const routes: Routes = [
  {path: 'requests' , component: RequestsComponent},
  {path: '' , redirectTo: 'requests', pathMatch: 'full' },
]
