import {Component, OnDestroy, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import {NgClass, NgIf} from '@angular/common';
import {MenuService} from '../../service/menu-service/menu.service';
import {Subscription} from 'rxjs';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-sider-menu',
  standalone: true,
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, NgIf, NgClass, RouterLink],
  templateUrl: './sider-menu.component.html',
  styleUrl: './sider-menu.component.css'
})
export class SiderMenuComponent implements OnInit, OnDestroy {

  items: MenuItem[] | undefined;
  isCollapsed = false;
  private sub!: Subscription;

  constructor(private menuService: MenuService, private router: Router) {}


  ngOnInit() {

    this.sub = this.menuService.collapsed$.subscribe(value => {
      this.isCollapsed = value;
    });


    this.items = [
      {
        separator: true
      },
      {
        label: 'Administrador',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            route: 'dashboard'
          },
          {
            label: 'Administracion de usuarios',
            icon: 'pi pi-id-card',
            route: 'manage-users'
          },
          {
            label: 'Reportes',
            icon: 'pi pi-address-book',
            route: 'reports'
          },
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Configuracion',
            icon: 'pi pi-cog',
          },
          {
            label: 'Cerrar sesion',
            icon: 'pi pi-sign-out',
            command: () => this.logout()
          }
        ]
      },
      {
        separator: true
      }
    ];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
