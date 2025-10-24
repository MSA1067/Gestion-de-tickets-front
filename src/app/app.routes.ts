import { Routes } from '@angular/router';
import {AdminComponent} from './components/dashboard/ca/admin/admin.component';
import {SupportComponent} from './components/dashboard/ca/support/support.component';
import {UserComponent} from './components/dashboard/ca/user/user.component';
import {LoginComponent} from './components/dashboard/login/login.component';

export const routes: Routes = [
  { path: 'ca-admin' , component: AdminComponent, loadChildren: () => import("./components/dashboard/ca/admin/admin.routes").then((m) => m.routes) },
  { path: 'ca-support' , component: SupportComponent, loadChildren: () => import("./components/dashboard/ca/support/support.routes").then((m) => m.routes) },
  { path: 'ca-user' , component: UserComponent, loadChildren: () => import("./components/dashboard/ca/user/user.routes").then((m) => m.routes) },
  { path: 'login' , component: LoginComponent},
  { path: '' , redirectTo: 'login' , pathMatch: 'full' },
];
