import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { switchMap } from 'rxjs/operators';
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:3000'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  checkUserExists(username: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseURL}/users`).pipe(
      map(users => users.some(user => user.username === username))
    );
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };

    // Comprueba si el usuario existe
    return this.checkUserExists(username).pipe(
      switchMap(userExists => {
        if (userExists) {
          // Realiza una solicitud POST a la API para autenticar al usuario
          return this.http.post<any>(`${this.baseURL}/login`, credentials);
        } else {
          // Usuario no encontrado
          return of(null);
        }
      })
    );
  }

  signup(username: string, userType: boolean): Observable<any> {
    const credentials = { username, userType };

    // Comprueba si el usuario existe
    return this.checkUserExists(username).pipe(
      switchMap(userExists => {
        if (userExists) {
          // El usuario ya existe
          return of(null);
        } else {
          // Realiza una solicitud POST a la API para autenticar al usuario
          return this.http.post<any>(`${this.baseURL}/signup`, credentials);
        }
      })
    );
  }
}
