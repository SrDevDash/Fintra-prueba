import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private HOST = 'https://63ecf737be929df00cb62fab.mockapi.io/api';
  private END_POINT_USER = 'users';
  private amILogin: boolean = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    // hash password
    const hashPassword = CryptoJS.SHA256(password).toString();
    // get user from mockapi
    this.http
      .get(`${this.HOST}/${this.END_POINT_USER}`)
      .subscribe((users: any) => {
        // check if some user match password and email
        const newUsers = users.find(
          (user: any) => user.Password == hashPassword && email == user.Email
        );

        // informal al usuario si se pudo loguear
        if (newUsers) {
          this.amILogin = true;
          alert('Usuario logueado correctamente');
        }
        alert('Usuario incorrecto');
      });
  }
}
