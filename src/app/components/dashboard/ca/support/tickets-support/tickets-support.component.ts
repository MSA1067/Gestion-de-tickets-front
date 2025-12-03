import { Component } from '@angular/core';
import {PrimeNgModule} from '../../../../../shared/module/primeNg/prime-ng.module';
import {TabPanel, TabView} from 'primeng/tabview';
import {Textarea} from 'primeng/textarea';
@Component({
  selector: 'app-tickets-support',
  standalone: true,
  imports: [
    PrimeNgModule,
    TabView,
    TabPanel,
    Textarea
  ],
  templateUrl: './tickets-support.component.html',
  styleUrl: './tickets-support.component.css'
})
export class TicketsSupportComponent {

  // ============================================================
  //  TABS
  // ============================================================
  activeTab: string = 'activos';
  activeTabIndex = 0;

  // ============================================================
  //  MODAL LOCAL
  // ============================================================
  modalVisible: boolean = false;
  selectedTicket: any = null;

  // Abrir modal
  openModal(ticket: any) {
    this.selectedTicket = { ...ticket };   // copia segura
    this.modalVisible = true;
  }

  // Cerrar modal
  closeModal() {
    this.modalVisible = false;
    this.selectedTicket = null;
  }

  // Guardar cambios (simulación)
  saveTicket() {
    console.log("Cambios guardados:", this.selectedTicket);
    this.closeModal();
  }

  // ============================================================
  //  FILTROS
  // ============================================================
  estados = ['En Proceso', 'En Espera', 'Escalado', 'Pendiente'];
  prioridades = ['Alta', 'Media', 'Baja'];

  // ============================================================
  //  SELECCIÓN DE TICKETS ABIERTOS
  // ============================================================
  selectedTickets: any[] = [];

  asignarSeleccionados() {
    console.log("Asignando:", this.selectedTickets);
    this.selectedTickets = [];
  }

  // ============================================================
  //  DATOS QUEMADOS (simulan backend)
  // ============================================================
  ticketsActivos = [
    {
      id: 'TKT-001',
      asunto: 'Error en sistema de facturación',
      descripcion: 'No se puede generar facturas del mes actual',
      categoria: 'Técnico',
      prioridad: 'Alta',
      estado: 'En Proceso',
      fecha: '2025-12-01'
    },
    {
      id: 'TKT-002',
      asunto: 'Solicitud de acceso a módulo de reportes',
      descripcion: 'Usuario requiere permisos adicionales',
      categoria: 'Accesos',
      prioridad: 'Media',
      estado: 'En Espera',
      fecha: '2025-12-01'
    }
  ];

  ticketsAbiertos = [
    {
      id: 'TKT-006',
      usuario: 'María González',
      correo: 'maria.gonzalez@empresa.com',
      asunto: 'No puedo acceder al sistema',
      descripcion: 'Error de autenticación al ingresar',
      categoria: 'Acceso',
      departamento: 'Ventas',
      prioridad: 'Alta',
      fecha: '2025-12-02'
    },
    {
      id: 'TKT-007',
      usuario: 'Carlos Ramírez',
      correo: 'carlos.ramirez@empresa.com',
      asunto: 'Solicitud de nuevo equipo',
      descripcion: 'Requiero laptop para trabajo remoto',
      categoria: 'Hardware',
      departamento: 'Marketing',
      prioridad: 'Media',
      fecha: '2025-12-02'
    }
  ];
}

