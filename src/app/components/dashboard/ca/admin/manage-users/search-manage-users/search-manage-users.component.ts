import { Component } from '@angular/core';
import {AutoComplete} from "primeng/autocomplete";
import {Button} from "primeng/button";
import {Card} from "primeng/card";
import {FloatLabel} from "primeng/floatlabel";
import {MultiSelect} from "primeng/multiselect";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {
  UserDatum,
  UserPagination,
  UserPaginationDatum,
  UserSummary
} from '../../../../../../shared/interfaces/user.interface';
import {UsersService} from '../../../../../../service/users/users.service';
import {PrimeNgModule} from '../../../../../../shared/module/primeNg/prime-ng.module';
import {Router} from '@angular/router';
import {CreateManageUsersComponent} from '../create-manage-users/create-manage-users.component';
import {EditManageUsersComponent} from '../edit-manage-users/edit-manage-users.component';

@Component({
  selector: 'app-search-manage-users',
  standalone: true,
  imports: [
    PrimeNgModule,
    CreateManageUsersComponent,
    EditManageUsersComponent

  ],
  templateUrl: './search-manage-users.component.html',
  styleUrl: './search-manage-users.component.css'
})
export class SearchManageUsersComponent {

  loading = false;
  visible: boolean = false;
  visibleEdit: boolean = false;

  usersSummary: UserDatum[] = [];

  selectedName: UserDatum | null = null;
  selectedUsername: UserDatum | null = null;
  selectedRole: string | null = null;

  filteredNames: UserDatum[] = [];
  filteredUsernames: UserDatum[] = [];

  roles = [
    { name: 'Administrador', value: 'ADMIN' },
    { name: 'Usuario', value: 'USER' },
    { name: 'Soporte', value: 'SUPPORT' }
  ];

  translateRole(role: string): string {
    const found = this.roles.find(r => r.value === role);
    return found ? found.name : role;
  }

  users: UserPaginationDatum[] = [];
  totalElements = 0;
  pageSize = 10;
  currentPage = 1;

  constructor(
    private usersService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsersSummary();
    this.loadUsers();
  }

  loadUsersSummary() {
    this.usersService.getSummaryUsers().subscribe({
      next: (res: UserSummary) => {
        this.usersSummary = res.data;
      }
    });
  }

  filterName(event: any) {
    const query = event.query.toLowerCase();
    this.filteredNames = this.usersSummary.filter(u =>
      u.name.toLowerCase().includes(query)
    );
  }

  filterUsername(event: any) {
    const query = event.query.toLowerCase();
    this.filteredUsernames = this.usersSummary.filter(u =>
      u.username.toLowerCase().includes(query)
    );
  }

  loadUsers(page = 1) {
    this.loading = true;

    const filters = {
      name: typeof this.selectedName === 'string'
        ? this.selectedName
        : this.selectedName?.name ?? null,

      username: typeof this.selectedUsername === 'string'
        ? this.selectedUsername
        : this.selectedUsername?.username ?? null,
      roles: this.selectedRole
    };

    console.log(this.selectedName);
    console.log(filters);

    this.usersService.getFilteredUsers(filters, page, this.pageSize)
      .subscribe({
        next: (res: UserPagination) => {
          this.users = res.data;
          this.totalElements = res.pagination.total_elements;
          this.currentPage = res.pagination.current_page;
          this.loading = false;
        },
        error: () => this.loading = false
      });
  }

  onLazyLoad(event: any) {
    const page = event.first / event.rows + 1;
    this.pageSize = event.rows;
    this.loadUsers(page);
  }

  resetFilters() {
    this.selectedName = null;
    this.selectedUsername = null;
    this.selectedRole = null;
    this.loadUsers();
  }

  onCloseModal() {
    this.visible = false;
  }

  onSaveAndRefresh() {
    this.visible = false;

    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  onCloseModalEdit() {
    this.visibleEdit = false;
  }

  onSaveAndRefreshEdit() {
    this.visibleEdit = false;

    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  toEdit(id: number) {
    this.router.navigate(['/ca-admin/manage-users/detail-users'] , {
      state: { userId: id }
    });
  }

  showDialog() {
    this.visible = true;
  }

  selectedUser: UserPaginationDatum | null = null;

  showDialogEdit(user: UserPaginationDatum) {
    console.log("🟦 Padre: Usuario recibido para editar:", user);
    this.selectedUser = user;
    this.visibleEdit = true;
  }


}
