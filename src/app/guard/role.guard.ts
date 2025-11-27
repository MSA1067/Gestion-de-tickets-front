import {ActivatedRouteSnapshot, CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {catchError, map, of} from 'rxjs';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {

  const auth = inject(LoginService);
  const router = inject(Router);

  const expectedRole = route.data['role'];

  return auth.loadUser().pipe(
    map((user: any) => {
      const role = user?.role;

      auth.setRole(role);

      if (role === expectedRole) return true;

      if (role === 'ROLE_ADMIN') router.navigate(['/ca-admin']);
      if (role === 'ROLE_SUPPORT') router.navigate(['/ca-support']);
      if (role === 'ROLE_USER') router.navigate(['/ca-user']);
      return false;
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};

