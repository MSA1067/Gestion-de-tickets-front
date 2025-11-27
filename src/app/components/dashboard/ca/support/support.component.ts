import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {SiderMenuComponent} from "../../../../shared/components/sider-menu/sider-menu.component";
import {Subscription} from 'rxjs';
import {MenuService} from '../../../../service/menu-service/menu.service';
import {NgClass} from '@angular/common';
import {MenuComponent} from '../../../../shared/components/menu/menu.component';

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
