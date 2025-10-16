# Sistema de Gestión de Tickets - Frontend

## Descripción General

Este módulo corresponde al *frontend* del sistema de gestión de tickets de soporte técnico.
Fue desarrollado en *Angular* y permite a los usuarios interactuar con el sistema a través de una interfaz web intuitiva, conectándose al backend mediante una API REST.

El objetivo principal es facilitar la gestión visual de los tickets, mostrando información relevante y permitiendo el registro, seguimiento y resolución de incidencias.

---

## Objetivos

* Permitir a los usuarios crear y visualizar sus tickets.
* Facilitar a los técnicos la gestión y actualización de incidencias.
* Proporcionar al administrador una vista global de las operaciones.
* Implementar una interfaz moderna y responsiva para todos los roles.

---

## Tecnologías Utilizadas

* *Angular 18+*
* *TypeScript*
* *Angular Material / Tailwing | Ng zorro*
* *HTML5 / SCSS*
* *Node.js / npm*

---

## Principales Componentes

* *LoginComponent:* formulario de autenticación.
* *TicketListComponent:* listado de tickets con filtros y paginación.
* *TicketDetailComponent:* vista detallada con comentarios y archivos.
* *TicketFormComponent:* creación y edición de tickets.
* *DashboardComponent:* panel de control para el administrador.

---

## Comunicación con el Backend

El frontend consume los servicios REST del backend ubicado en:


http://localhost:8080/api/


El servicio Angular utiliza HttpClient para realizar operaciones CRUD sobre las entidades principales.

---

## Ejecución del Proyecto

### Requisitos previos

* Node.js 18+
* Angular CLI instalado globalmente

### Pasos

1. Clonar el repositorio

   bash
   git clone https://github.com/usuario/ticket-system-frontend.git
   
2. Instalar dependencias

   bash
   npm install
   
3. Ejecutar el servidor de desarrollo

   bash
   ng serve
   
4. Acceder a la aplicación

   
   http://localhost:4200
   
