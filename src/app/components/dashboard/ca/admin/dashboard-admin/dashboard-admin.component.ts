import {Component, OnInit} from '@angular/core';
import {PrimeNgModule} from '../../../../../shared/module/primeNg/prime-ng.module';
import { ChartModule } from 'primeng/chart';
import {Tag} from 'primeng/tag';

type PrimeTagSeverity =
  | 'success'
  | 'danger'
  | 'secondary'
  | 'info'
  | 'warn'
  | 'contrast'
  | undefined;

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [PrimeNgModule, ChartModule, Tag],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent implements OnInit {
  // ================= KPIs =================
  kpis = {
    total: 124,
    activos: 24,
    cerrados: 60,
    creadosHoy: 30,
    resueltosHoy: 20,
  };

  // ================= CHART DATA =================
  barData: any;
  barOptions: any;

  pieData: any;
  pieOptions: any;

  lineData: any;
  lineOptions: any;

  // ================= USER REPORT TABLE =================
  userReport = [
    {user: 'Carlos', active: 3, inProgress: 2, closed: 5, total: 10},
    {user: 'Andrea', active: 6, inProgress: 4, closed: 2, total: 12},
    {user: 'Miguel', active: 2, inProgress: 1, closed: 3, total: 6},
  ];

  ngOnInit(): void {
    this.loadCharts();
  }

  loadCharts() {
    // ===== BAR CHART =====
    this.barData = {
      labels: ['Abiertos', 'En progreso', 'Cerrados'],
      datasets: [
        {
          label: 'Tickets',
          data: [25, 14, 40],
        },
      ],
    };

    this.barOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // ===== PIE CHART =====
    this.pieData = {
      labels: ['Baja', 'Media', 'Alta', 'Urgente'],
      datasets: [
        {
          data: [10, 20, 8, 4],
        },
      ],
    };

    // ===== LINE CHART =====
    this.lineData = {
      labels: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      datasets: [
        {
          label: 'Tickets creados',
          data: [10, 12, 15, 20, 18, 25, 28, 30, 32, 35, 40, 45],
          fill: false,
          tension: 0.3,
        },
      ],
    };
  }

  // ========== TAG SEVERITY ==========
  getLoadSeverity(row: any): PrimeTagSeverity {
    if (row.total >= 12) return 'danger';
    if (row.total >= 7) return 'warn';
    return 'success';
  }

  getLoadLabel(row: any): string {
    if (row.total >= 12) return 'Sobrecargado';
    if (row.total >= 7) return 'Moderado';
    return 'Normal';
  }
}
