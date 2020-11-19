import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { WebapiService } from 'src/app/services/webapi.service';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.css']
})
export class UsuariosListadoComponent implements OnInit {
  usuarios: Usuario[];

  constructor(
    private router: Router,
    private webApiService: WebapiService
  ) { }


  ngOnInit(): void {
    this.webApiService
    .obtenerUsuarios()
    .subscribe(
      (usuarioDelApi: Usuario[]) => this.usuarios = usuarioDelApi,
      error => console.error(error)
    );
  }

  verPosts(idUsuario: number): void{
    this.router.navigate(['/posts', 'usuario', idUsuario]);
  }

}
