import {Component, OnDestroy, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import {NgClass, NgIf} from '@angular/common';
import {MenuService} from '../../service/menu-service/menu.service';
import {filter, Subscription} from 'rxjs';
import {NavigationEnd, Router, RouterLink} from '@angular/router';

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
  private routerSub!: Subscription;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.sub = this.menuService.collapsed$.subscribe(value => {
      this.isCollapsed = value;
    });

    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadMenuByRoute();
      });

    this.loadMenuByRoute();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routerSub.unsubscribe();
  }

  private loadMenuByRoute() {
    const url = this.router.url;

    if (url.startsWith('/ca-admin')) {
      this.items = this.getAdminMenu();
    } else if (url.startsWith('/ca-support')) {
      this.items = this.getSupportMenu();
    } else if (url.startsWith('/ca-user')) {
      this.items = this.getUserMenu();
    } else {
      this.items = [];
    }
  }

  private getAdminMenu(): MenuItem[] {
    return [
      { separator: true },
      {
        label: 'Administrador',
        items: [
          { label: 'Dashboard', icon: 'pi pi-home', route: 'dashboard' },
          { label: 'Administración de usuarios', icon: 'pi pi-id-card', route: 'manage-users' },
          { label: 'Reportes', icon: 'pi pi-address-book', route: 'reports' },
        ]
      },
      this.getProfileSection()
    ];
  }

  private getSupportMenu(): MenuItem[] {
    return [
      { separator: true },
      {
        label: 'Soporte',
        items: [
          { label: 'Tickets', icon: 'pi pi-ticket', route: 'tickets' },
          { label: 'Clientes', icon: 'pi pi-users', route: 'clients' },
        ]
      },
      this.getProfileSection()
    ];
  }

  private getUserMenu(): MenuItem[] {
    return [
      { separator: true },
      {
        label: 'Usuario',
        items: [
          { label: 'Mi perfil', icon: 'pi pi-user', route: 'profile' },
          { label: 'Mis solicitudes', icon: 'pi pi-folder', route: 'requests' },
        ]
      },
      this.getProfileSection()
    ];
  }

  private getProfileSection(): MenuItem {
    return {
      label: 'Profile',
      items: [
        { label: 'Configuración', icon: 'pi pi-cog', route: 'settings' },
        { label: 'Cerrar sesión', icon: 'pi pi-sign-out', command: () => this.logout() }
      ]
    };
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
