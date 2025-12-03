import {Component, OnInit} from '@angular/core';
import {PrimeNgModule} from '../../../../../shared/module/primeNg/prime-ng.module';
import { ChartModule } from 'primeng/chart';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [PrimeNgModule, Tag, ChartModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {

  // KPI totals
  totals = { total: 0, active: 0, closed: 0 };

  lastUpdated: Date = new Date();

  // Charts data
  statesChartData: any;
  statesChartOptions: any;

  priorityChartData: any;
  priorityChartOptions: any;

  // Table rows (mock)
  assignedRows: Array<{
    userId: number;
    userName: string;
    userEmail?: string;
    avatar?: string;
    active: number;
    inProgress: number;
    closed: number;
  }> = [];

  ngOnInit(): void {
    // --- MOCK DATA: replace with your service calls ---
    this.assignedRows = [
      { userId: 1, userName: 'Ana Gómez', userEmail: 'ana@empresa.com', active: 2, inProgress: 1, closed: 12 },
      { userId: 2, userName: 'Carlos Pérez', userEmail: 'carlos@empresa.com', active: 5, inProgress: 3, closed: 8 },
      { userId: 3, userName: 'María Ruiz', userEmail: 'maria@empresa.com', active: 1, inProgress: 0, closed: 20 },
      { userId: 4, userName: 'Luis Herrera', userEmail: 'luis@empresa.com', active: 7, inProgress: 2, closed: 4 },
      { userId: 5, userName: 'Sofía Ramírez', userEmail: 'sofia@empresa.com', active: 0, inProgress: 0, closed: 3 },
    ];

    // compute totals from assignedRows (mock of backend totals)
    this.computeTotals();

    // init charts
    this.initStatesChart();
    this.initPriorityChart();
  }

  computeTotals() {
    const totalTickets = this.assignedRows.reduce((acc, r) => acc + r.active + r.inProgress + r.closed, 0);
    const active = this.assignedRows.reduce((acc, r) => acc + r.active + r.inProgress, 0); // active = open + in progress
    const closed = this.assignedRows.reduce((acc, r) => acc + r.closed, 0);

    this.totals.total = totalTickets;
    this.totals.active = active;
    this.totals.closed = closed;
  }

  // ---------------------------
  // Chart: States (bar)
  // ---------------------------
  initStatesChart() {
    // labels and data could come from an API grouped by status
    this.statesChartData = {
      labels: ['Abiertos', 'En Progreso', 'Cerrados'],
      datasets: [
        {
          label: 'Tickets',
          data: [
            this.assignedRows.reduce((a, r) => a + r.active, 0),
            this.assignedRows.reduce((a, r) => a + r.inProgress, 0),
            this.assignedRows.reduce((a, r) => a + r.closed, 0),
          ],
          backgroundColor: ['#42A5F5', '#FFA726', '#9E9E9E']
        }
      ]
    };

    this.statesChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true }
      }
    };
  }

  // ---------------------------
  // Chart: Priority (pie)
  // ---------------------------
  initPriorityChart() {
    // Mock priority counts: ideally ask backend for counts grouped by priority
    const priorityCounts = { low: 12, medium: 25, high: 8, urgent: 5 };

    this.priorityChartData = {
      labels: ['Baja', 'Media', 'Alta', 'Urgente'],
      datasets: [
        {
          data: [priorityCounts.low, priorityCounts.medium, priorityCounts.high, priorityCounts.urgent],
          backgroundColor: ['#9CCC65', '#FFEB3B', '#FFA726', '#E53935'],
        }
      ]
    };

    this.priorityChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } }
    };
  }

  // ---------------------------
  // Table helpers
  // ---------------------------
  getAssignedTotal(row: any): number {
    // careful arithmetic
    return (row.active ?? 0) + (row.inProgress ?? 0) + (row.closed ?? 0);
  }

  // reemplaza la función anterior por esta
  getLoadSeverity(row: any): 'success' | 'danger' | 'secondary' | 'info' | 'warn' | 'contrast' | undefined {
    const totalActive = (row.active ?? 0) + (row.inProgress ?? 0);
    if (totalActive >= 6) return 'danger';
    if (totalActive >= 3) return 'warn';   // <-- usar 'warn' en vez de 'warning'
    return 'success';
  }


  getLoadLabel(row: any): string {
    const totalActive = (row.active ?? 0) + (row.inProgress ?? 0);
    if (totalActive >= 6) return 'Sobrecargado';
    if (totalActive >= 3) return 'Con carga';
    return 'OK';
  }
}
