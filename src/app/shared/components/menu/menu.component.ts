import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router} from '@angular/router';
import {PrimeNgModule} from '../../module/primeNg/prime-ng.module';
import {MenuService} from '../../../service/menu-service/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    PrimeNgModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  items: MenuItem[] = [];

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit() {

    this.menuService.collapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed;
    })


    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        route: 'dashboard'
      },
      {
        label: 'Administrar usuarios',
        icon: 'pi pi-users',
        route: 'manage-users'
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-line',
        route: '/reports'
      },
      {
        separator: true
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        route: 'settings'
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
  }

  toggleCollapsed() {
    this.menuService.toggleCollapsed();
  }


  logout() {
    console.log('Sesión cerrada');
    this.router.navigate(['/login']);
  }

}
