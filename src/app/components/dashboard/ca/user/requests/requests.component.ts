import { Component } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {InputText} from "primeng/inputtext";
import {NgClass, NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {TabPanel, TabView} from "primeng/tabview";
import {TableModule} from "primeng/table";
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {Textarea} from 'primeng/textarea';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [
    DropdownModule,
    InputText,
    NgIf,
    PrimeTemplate,
    TabPanel,
    TabView,
    TableModule,
    NgClass,
    Button,
    Dialog,
    Textarea
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {

  activeTab: string = 'activos';
  activeTabIndex = 0;

  modalVisible: boolean = false;

  categorias = [
    { label: 'Soporte Técnico', value: 1 },
    { label: 'Accesos', value: 2 },
    { label: 'Mantenimiento', value: 3 }
  ];

  prioridades = [
    { label: 'Baja', value: 'low' },
    { label: 'Media', value: 'medium' },
    { label: 'Alta', value: 'high' }
  ];


  estados = ['En Proceso', 'En Espera', 'Escalado', 'Pendiente'];

  // ---------------- DATOS QUEMADOS ----------------
  ticketsActivos = [
    {
      id: 'TKT-001',
      usuario: 'Carlos Ramírez',
      correo: 'carlos.ramirez@empresa.com',
      asunto: 'Error en sistema de facturación',
      descripcion: 'No se puede generar facturas del mes actual',
      categoria: 'Técnico',
      prioridad: 'Alta',
      estado: 'En Proceso',
      fecha: '2025-12-01'
    },
    {
      id: 'TKT-002',
      usuario: 'Carlos Ramírez',
      correo: 'carlos.ramirez@empresa.com',
      asunto: 'Solicitud de acceso a módulo de reportes',
      descripcion: 'Usuario requiere permisos adicionales',
      categoria: 'Accesos',
      prioridad: 'Media',
      estado: 'En Espera',
      fecha: '2025-12-01'
    },
    {
      id: 'TKT-003',
      usuario: 'Carlos Ramírez',
      correo: 'carlos.ramirez@empresa.com',
      asunto: 'Lentitud en aplicación web',
      descripcion: 'Sistema presenta retrasos al cargar datos',
      categoria: 'Rendimiento',
      prioridad: 'Alta',
      estado: 'Escalado',
      fecha: '2025-11-30'
    },
    {
      id: 'TKT-004',
      usuario: 'Carlos Ramírez',
      correo: 'carlos.ramirez@empresa.com',
      asunto: 'Cambio de contraseña',
      descripcion: 'Usuario olvidó su contraseña',
      categoria: 'Soporte',
      prioridad: 'Baja',
      estado: 'En Proceso',
      fecha: '2025-12-02'
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
