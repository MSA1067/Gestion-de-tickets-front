import {Component, OnInit} from '@angular/core';
import {MenuComponent} from '../../../../shared/menu/menu.component';
import {Router, RouterOutlet} from '@angular/router';
import {SiderMenuComponent} from '../../../../shared/sider-menu/sider-menu.component';
import {NgClass} from '@angular/common';
import {Subscription} from 'rxjs';
import {MenuService} from '../../../../service/menu-service/menu.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet,
    SiderMenuComponent,
    NgClass
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  private sub!: Subscription;
  role: any;

  constructor(private menuService: MenuService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.role = navigation?.extras?.state?.['role'] ?? null;
  }

  ngOnInit() {
    this.sub = this.menuService.collapsed$.subscribe(value => {
      this.isCollapsed = value;
    });
  }
}
