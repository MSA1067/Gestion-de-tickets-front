import {Routes} from '@angular/router';
import {SearchManageUsersComponent} from './search-manage-users/search-manage-users.component';
import {CreateManageUsersComponent} from './create-manage-users/create-manage-users.component';
import {EditManageUsersComponent} from './edit-manage-users/edit-manage-users.component';
export const routes: Routes = [
  { path: 'search-users', component: SearchManageUsersComponent },
  { path: 'create-users', component: CreateManageUsersComponent },
  { path: 'detail-users', component: EditManageUsersComponent },
  { path: '' , redirectTo: 'search-users', pathMatch: 'full' },
  ]
