import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {User} from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  role: string;
  authenticated: User;

  ngOnInit() {
    this.authenticated = null;
    sessionStorage.clear();
  }

  onSubmit() {
    const u: string = this.loginForm.controls.username.value;
    const p: string = this.loginForm.controls.password.value;
    const user: User = new User(u, p, this.role.toLocaleUpperCase());
    this.authService.login(user).subscribe(result => {
      this.authenticated = result;
      if (this.authenticated !== null) {
        sessionStorage.setItem('username', this.authenticated.username);
        sessionStorage.setItem('password', this.authenticated.password);
        sessionStorage.setItem('role', this.authenticated.role);
        switch (this.authenticated.role) {
          case 'ADMIN': {
            this.router.navigateByUrl('/admin');
            break;
          }
          case 'ETUDIANT': {
            this.router.navigateByUrl('/etudiant');
            break;
          }
          case 'PROFESSEUR': {
            this.router.navigateByUrl('/prof');
            break;
          }
        }
      } else {
        console.log('Login failed');
        this.router.navigateByUrl('/');
      }
    });
  }


}
