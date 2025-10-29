import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../../../../shared/menu/menu.component";
import {Router, RouterOutlet} from "@angular/router";
import {SiderMenuComponent} from "../../../../shared/sider-menu/sider-menu.component";
import {Subscription} from 'rxjs';
import {MenuService} from '../../../../service/menu-service/menu.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet,
    SiderMenuComponent,
    NgClass
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit {


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
