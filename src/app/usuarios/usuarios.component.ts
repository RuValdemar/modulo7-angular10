import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { WebapiService } from '../services/webapi.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];

  constructor(
    private router: Router,
    private webApiService: WebapiService
  ) { }

  ngOnInit(): void {}
}
