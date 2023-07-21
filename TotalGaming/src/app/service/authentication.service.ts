import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated=false;

  constructor(private router: Router) { }

  logout()
  {
    this.isAuthenticated=false;
    this.router.navigate(['']);
  }
}
