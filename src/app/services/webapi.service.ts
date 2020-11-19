import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  baseURLUsers = environment.apiURL + 'users';
  baseURLPosts = environment.apiURL + 'posts';

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseURLUsers);
  }

  obtenerPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseURLPosts);
  }

  obtenerPostsPorUsuario(id: string): Observable<Post[]>{
    const url = `${this.baseURLPosts}?userId=${id}`;
    return this.http.get<Post[]>(url);
  }
}
