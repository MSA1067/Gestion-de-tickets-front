import {Routes} from '@angular/router';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {ReportsComponent} from './reports/reports.component';

export const routes: Routes = [
  {path: 'dashboard' , component: DashboardAdminComponent},
  {path: 'manage-users' , component: ManageUsersComponent},
  {path: 'reports' , component: ReportsComponent},
  {path: '' , redirectTo: 'dashboard', pathMatch: 'full' },
]
