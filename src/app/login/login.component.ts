import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  routeRedirect = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void{
    this.authService.login();
    this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
    this.authService.urlUsuarioIntentaAcceder = '';
    this.router.navigate([this.routeRedirect]);
  }

  ngOnInit(): void {
  }

}
