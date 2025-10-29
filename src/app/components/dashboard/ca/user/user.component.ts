import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../../../shared/menu/menu.component";
import { Router, RouterOutlet } from "@angular/router";
import { SiderMenuComponent } from "../../../../shared/sider-menu/sider-menu.component";
import { Subscription } from 'rxjs';
import { MenuService } from '../../../../service/menu-service/menu.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet,
    SiderMenuComponent,
    NgClass
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  isCollapsed = false;
  private sub!: Subscription;
  role: any;

  constructor(
    private menuService: MenuService,
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
