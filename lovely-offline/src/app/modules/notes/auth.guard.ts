import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {
  }

  canLoad(): Observable<boolean> {
    if (!this.auth.authenticated) {
      this.router.navigate(['/user']);
      return of(false);
    }
    return of(true);
  }
}
